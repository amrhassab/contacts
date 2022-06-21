import {combineReducers} from '@reduxjs/toolkit';
import contacts from './contacts';

const rootReducer = combineReducers({
  contacts,
});

export default rootReducer;
