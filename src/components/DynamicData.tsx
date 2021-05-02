import React, { useEffect } from 'react';
import {Button, Container} from './Elements';
import {useTypedSelector} from '../hooks/use-typed-selector';
import {useActions} from '../hooks/use-actions';
import {DynamicData} from '../state/actions';

function App() {
    const precision = 100; // 2 decimals
    const getDynamicData = useTypedSelector(({dynamicData}) => {
        return dynamicData;
    });
    const {addDynamicData} = useActions();

    useEffect(() => {
        // addDynamicData({
        //     filedName: "My Name",
        //     value: 3,
        //     mutable: false,
        //     previousValue: 3,
        //     enabled: true,
        // })
       setInterval(() => {
           const getDynamicData = updatedValue([{
            filedName: "My Name",
            value: 3,
            mutable: false,
            previousValue: 3,
            enabled: true,
        }]);
       // console.log(getDynamicData)
            
        }, 2000);
        
        //addDynamicData(getDynamicData);
        

    }, [addDynamicData, getDynamicData])

   

    const updatedValue = (fields:DynamicData[]) => {
        fields.map((item) => {
            if (item.enabled) {
                var randomnum =
                    Math.floor(
                        Math.random() * (2 * precision - 1 * precision) +
                            1 * precision
                    ) /
                    (1 * precision);
                item.previousValue = item.value;
                item.value = randomnum;
                item.upOrDown = item.previousValue > item.value ? "-" : "+";
                item.time = new Date();
            }
    
            return item;
        });
        return fields;
    };
   
    return <Container><Button>Hello</Button></Container>
}

export default App;