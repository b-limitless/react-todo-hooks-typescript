import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
    ]);

    const state = useTypedSelector((state) => {
       return state;
    });

    const getTimerStatus = useTypedSelector(({stopTimer}) => {
        return stopTimer;
    });
    
    const getDynamicData = useTypedSelector(({ addData }) => {
        return addData;
    });

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
                item.time = new Date().toLocaleTimeString('en-US');
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
    }, [addData, getDynamicData, updatedValue, getTimerStatus, defaultData])

    const getTableHead = useMemo(() => {
        if(getDynamicData.length > 0) {
            const firstRow = JSON.parse(getDynamicData[0]);
            const keys = Object.keys(firstRow[0]);
            
            const tr = keys.map((item, key) => <th key = {key} scope = "col">{item}</th>);
            return tr;
        }
    }, [getDynamicData])

    const disableRowUpdate =  useCallback((fieldName) => {
            const updated = defaultData.map(row => {
                if(row.filedName === fieldName) {
                    row.enabled = !row.enabled;
                    return row;
                }
                return row;
            });
            setDefaultData(updated)
            
    }, [defaultData]);

    const getTableBody = useMemo(() => {
        if(getDynamicData.length > 0) {
            const firstRow = JSON.parse(getDynamicData[getDynamicData.length - 1]);
            
           // @ts-ignore
          const tr = firstRow.map((item, key) => <tr key = {key} scope = "col">
              <td>{item.filedName}</td>
              <td>{item.value}</td>
              <td>{item.mutable}</td>
              <td>{item.previousValue}</td>
              <td>{item.enabled ? <button className = "btn btn-primary" onClick = {() => disableRowUpdate(item.filedName)}>Disable</button> : <button onClick = {() => disableRowUpdate(item.filedName)} className = "btn btn-primary">Enable</button> }</td>
              <td></td>
              <td></td>
              <td></td>
              </tr>);
            //return tr;
            return tr;
        }
    }, [getDynamicData, disableRowUpdate])

  
    const getLastIndexDynamic = useMemo(() => {
        if(getDynamicData.length > 0) {
            // Get the last index 
            const lastIndexData = JSON.parse(getDynamicData[getDynamicData.length - 1]);
            
            if(lastIndexData){
                // @ts-ignore
                const htmlElement = lastIndexData.map((item ,key) => <div key = {key}>{item.value}</div>);
                return htmlElement;
            }
            
        }
    }, [getDynamicData])

    
    return <><Header/>
     <table className="table">
  <thead>
    <tr>
      {getTableHead}
    </tr>
  </thead>
  <tbody>
    {getTableBody}
  </tbody>
</table>
    </>
}
export default App;