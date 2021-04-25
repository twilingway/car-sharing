
import { createAsyncThunk, } from '@reduxjs/toolkit';
import getOrderStatus from '../../Api/orderStatusApi';


const fetchOrderStatus = createAsyncThunk('orderStatus/fetchOrderStatus',
    async () => {
        const response = await getOrderStatus();
        return response.data;
    }
);
export default fetchOrderStatus;

