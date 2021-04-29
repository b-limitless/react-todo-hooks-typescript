import React, { useEffect } from 'react';
import {Button, Container} from './Elements';
import {useTypedSelector} from '../hooks/use-typed-selector';
import {useActions} from '../hooks/use-actions';


function App() {
    const getDynamicData = useTypedSelector(({dynamicData}) => {
        return dynamicData;
    });
    const {addDynamicData} = useActions();

    useEffect(() => {
        addDynamicData({
            filedName: "My Name",
            value: 3,
            mutable: false,
            previousValue: 3,
            enabled: true,
        })
    }, [addDynamicData])

    console.log(getDynamicData);
   
    return <Container><Button>Hello</Button></Container>
}

export default App;