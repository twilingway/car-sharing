import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order';
import menuReducer from './menu';
import pointReducer from './point';
import carReducer from './car';
import categoryReducer from './category';
import rateReducer from './rate';
import rateTypeReducer from './rateType';
import orderStatusReducer from './orderStatus';

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