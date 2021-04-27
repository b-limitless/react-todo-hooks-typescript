import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../state/reducers';

// To access the redux store we can directly use useSelector in 
// For example in App.jxs but we will use useTypedSelector instead of 
// Becase what kind of data is store in redux store it will tell us in
// Advance 
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
