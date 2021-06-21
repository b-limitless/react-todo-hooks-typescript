import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';

const Dashbaord:FC = (props:any) => {
    const auth = useTypedSelector(({auth}) => {
        return auth;
    });

    useEffect(() => {
        if(!auth.isAuthenticated) {
            props.history.push('/login');
        }
    }, [auth, props.history])
    return (
        <div>
            This is Dashboard
        </div>
    );
};

Dashbaord.propTypes = {
    
};

export default Dashbaord;