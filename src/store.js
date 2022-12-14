import { configureStore } from '@reduxjs/toolkit';
import wizardReducer from './wizardSlice';

export default configureStore({
    reducer: {
        wizard: wizardReducer,
    },
});
