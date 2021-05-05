import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container } from './Elements';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import { DynamicData } from '../state/actions';
const defaultData = [
    {
        filedName: "A",
        value: 3,
        mutable: false,
        previousValue: 3,
        enabled: true,
    },
    {
        filedName: "B",
        value: 3,
        mutable: false,
        previousValue: 3,
        enabled: true,
    },
    {
        filedName: "C",
        value: 3,
        mutable: false,
        previousValue: 3,
        enabled: true,
    },
    {
        filedName: "D",
        value: 3,
        mutable: false,
        previousValue: 3,
        enabled: false,
    },
];

function App() {
    const [i, setI] = useState<number>(0);
    const precision = 100;

  

    const getDynamicData = useTypedSelector(({ dynamicData }) => {
        return dynamicData;
    });
   console.log(getDynamicData);
    const { addDynamicData } = useActions();

    const updatedValue = useCallback((fields: DynamicData[]) => {
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
    }, []);
 
    useEffect(() => {   
        if (getDynamicData.length === 5 || i === 5) {
            return;
        }
        const timer = setInterval(() => {
            const updatedDate = updatedValue(defaultData)
            // const updatedData = addDynamicData({
            //     filedName: "A",
            //     value: 3,
            //     mutable: false,
            //     previousValue: 3,
            //     enabled: true,
            // });
            console.table(updatedDate);
            //addDynamicData(updatedDate);
            
            setI(i+1);
           
        }, 1000);
        return () => clearInterval(timer);
    }, [addDynamicData, getDynamicData, i, updatedValue])

    
    return <Container><Button>Hello</Button></Container>
}
export default App;