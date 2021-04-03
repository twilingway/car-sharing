import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order';
import menuReducer from './menu';

export default configureStore({
    reducer: {
        order: orderReducer,
        menu: menuReducer
    }
});