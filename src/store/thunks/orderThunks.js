
import { createAsyncThunk, } from '@reduxjs/toolkit';
import orderPost, { getOrderById, orderPut } from '../../Api/orderApi';

export const fetchOrderById = createAsyncThunk('order/fetchOrderById',
    async (id) => {
        const response = await getOrderById(id);
        if (response.response?.status === 404) {
            throw Error(response.message);
        }
        return response.data;
    }
);

export const putOrder = createAsyncThunk('order/putOrder',
    async (body) => {
        console.log('bodyPut :>> ', body);
        const response = await orderPut(body);
        return response.data;
    }
);

const postOrder = createAsyncThunk('order/postOrder',
    async (body) => {

        const response = await orderPost(body);
        return response.data;
    }
);


export default postOrder;

