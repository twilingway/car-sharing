import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './reducers/orderReducer';
import menuReducer from './menu';
import pointReducer from './reducers/pointReducer';
import carReducer from './reducers/carReducer';
import categoryReducer from './reducers/categoryReducer';
import rateReducer from './reducers/rateReducer';
import rateTypeReducer from './reducers/rateTypeReducer';
import orderStatusReducer from './reducers/orderStatusReducer';

export default configureStore({
    reducer: {
        order: orderReducer,
        menu: menuReducer,
        point: pointReducer,
        car: carReducer,
        category: categoryReducer,
        rate: rateReducer,
        rateType: rateTypeReducer,
        orderStatus: orderStatusReducer,
    }
});