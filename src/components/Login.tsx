import React, { useState, FC } from 'react';
import { useTypedSelector  } from '../hooks/use-typed-selector';
import { useActions  } from '../hooks/use-actions';
import axios from 'axios';
import { useEffect } from 'react';


export interface MyModel {
    email: string;
    password: string;
}

function useFormFields<T>(initialState: T): [T, (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void] {
    const [inputs, setValues] = useState<T>(initialState);

    return [
        inputs,
        function (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
            setValues({
                ...inputs,
                [event.target.id]: event.target.value
            });
        }
    ];
}



const Login:FC = (props:any) => {
    const { authUser } = useActions();
    const auth = useTypedSelector(({auth}) => {
        return auth;
    });

    console.log(props)

    const [inputs, handleInputChange] = useFormFields<MyModel>({
        email: '',
        password: ''
    });

    const handleSubmitItem = (event: React.FormEvent) => {
        event.preventDefault();
        authUser({email: 'bhara', password: 'somehin', isAuthenticated: true});
        localStorage.setItem('jwtTokenT', 'werwerwerwer');
    };

    useEffect(() => {
        if(auth.isAuthenticated) {
            // Redirect to dashboard 
            props.history.push('/dashboard')
        }
    }, [auth, props])
    
    return (
        <div className="container" >

            <form className=""
                noValidate autoComplete="off"
                onSubmit={handleSubmitItem}>
                <input
                    type="text"
                    id = "email"
                    name="email"
                    className="form-control"
                    value={inputs.email}
                    onChange={handleInputChange}
                    placeholder = "Email"
                />
                <br />
                <input
                    type="password"
                    id = "password"
                    name = "password"
                    className="form-control"
                    value={inputs.password}
                    onChange={handleInputChange}
                    placeholder = "Password"
                />
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
};

Login.propTypes = {

};

export default Login;