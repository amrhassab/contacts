import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const getStore = () => store;
const getState = () => store.getState();

export {getStore, getState};

export default {
  getStore,
  getState,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
