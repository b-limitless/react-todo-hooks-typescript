/*
Action creator bind atomatically entire process of dispatching action 
Little bit esier in App.tsx
*/
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../state/actions';

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    }, [dispatch])
}
