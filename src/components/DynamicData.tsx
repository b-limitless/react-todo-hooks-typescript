import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container } from './Elements';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import { DynamicData } from '../state/actions';
import Header from './Header';


function App() {

    const precision = 100;
    const [i, setI] = useState<number>(0)
    const [defaultData, setDefaultData] = useState([
        {
            filedName: "A",
            value: 3,
            mutable: false,
            previousValue: 3,
            enabled: false,
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
    ]);

    const state = useTypedSelector((state) => {
       return state;
    });

    console.log(state);

    const getTimerStatus = useTypedSelector(({stopTimer}) => {
        return stopTimer;
    });
    
    const getDynamicData = useTypedSelector(({ addData }) => {
        return addData;
    });

    console.log(getDynamicData);
    if (getDynamicData.length > 0) {
        // @ts-ignore
        getDynamicData.map(function (item) {
            //console.log(item);

        })
    }
    //    if(getDynamicData.length > 0) {
    //        // @ts-ignore
    //        getDynamicData.forEach(item => {
    //         console.log(JSON.parse(item))
    //        })
    //    }


    const { addData, stopTimer } = useActions();

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
                item.change = item.value - item.previousValue;
                item.upOrDown = item.previousValue > item.value ? "-" : "+";
                item.time = new Date();
            }
            return item;
        });
        return fields;
    }, []);

    

    useEffect(() => {
        stopTimer(false);
    }, [stopTimer]);

    useEffect(() => {
        //|| i === 5
        if (getTimerStatus) {
            return;
        }
        const updatedDate = updatedValue(defaultData)
        const timer = setInterval(() => {

            // const updatedData = addDynamicData({
            //     filedName: "A",
            //     value: 3,
            //     mutable: false,
            //     previousValue: 3,
            //     enabled: true,
            // });
            const jData = JSON.stringify(updatedDate);
            //localStorage.setItem(i.toString(), jData);
            //console.table(updatedDate)
            // console.log(addData(updatedDate))
            addData(jData);
            //addDynamicData(updatedDate);

            //setI(i + 1)

        }, 2000);
        return () => clearInterval(timer);
    }, [addData, getDynamicData, updatedValue, getTimerStatus])



    return <Header/>
}
export default App;