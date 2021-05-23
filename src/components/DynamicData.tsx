import React, { useCallback, useEffect, useMemo } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import { DynamicData } from '../state/actions';
import Header from './Header';
function App() {
    const precision = 100;

    const defaultData = useTypedSelector(({ dynamicData }) => {
        return dynamicData;
    });

    const getTimerStatus = useTypedSelector(({ stopTimer }) => {
        return stopTimer;
    });

    const getDynamicData = useTypedSelector(({ addData }) => {
        return addData;
    });


    const { addData, stopTimer, updateRow } = useActions();

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
                item.change = Math.round((item.value - item.previousValue) * 1e2) / 1e2;
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
        if (getTimerStatus) {
            return;
        }
        const updatedDate = updatedValue(defaultData)
        const timer = setInterval(() => {
            const jData = JSON.stringify(updatedDate);
            addData(jData);
        }, 2000);
        return () => clearInterval(timer);
    }, [addData, getDynamicData, updatedValue, getTimerStatus, defaultData])

    const getTableHead = useMemo(() => {
        if (getDynamicData.length > 0) {
            const firstRow = JSON.parse(getDynamicData[0]);
            const keys = Object.keys(firstRow[0]);
            const tr = keys.map((item, key) => <th key={key} scope="col">{item}</th>);
            return tr;
        }
    }, [getDynamicData]);

    const disableRowUpdate = useCallback((fieldName) => {
        updateRow(fieldName)
    }, [updateRow]);

    const getTableBody = useMemo(() => {
        if (getDynamicData.length > 0) {
            const firstRow = JSON.parse(getDynamicData[getDynamicData.length - 1]);

            const tr = firstRow.map((item:DynamicData, key:number) => <tr key={key}>
                <td>{item.filedName}</td>
                <td>{item.value}</td>
                <td>{item.mutable}</td>
                <td>{item.previousValue}</td>
                <td>{item.enabled ? <button className="btn btn-primary" onClick={() => disableRowUpdate(item.filedName)}>Disable</button> : <button onClick={() => disableRowUpdate(item.filedName)} className="btn btn-primary">Enable</button>}</td>
                <td>{item.change}</td>
                <td>{item.change && item.change > 0 ? <div className = "btn btn-success">+</div> : <div className = "btn btn-danger">-</div>}</td>
                <td>{item.time}</td>
            </tr>);
            return tr;
        }
    }, [getDynamicData, disableRowUpdate])

    return <><Header />
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