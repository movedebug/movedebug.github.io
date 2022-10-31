import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/counter';
import globalSlice from './feature/global';

export default configureStore({
  reducer: {
    counter: counterReducer,
    global: globalSlice,
  },
})