import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import Header from './Header';

const Graphs: React.FC = () => {
    const getDynamicData = useTypedSelector((state) => {
        return state;
    });
    

    const {stopTimer } = useActions();
    useEffect(() => {
        stopTimer(true);
    }, [stopTimer])

    useEffect(() => {
        console.log(getDynamicData);
    }, [getDynamicData])
    return (
        <div>
            <Header/>
            We will have graphs here
        </div>
    );
};

;

export default Graphs;