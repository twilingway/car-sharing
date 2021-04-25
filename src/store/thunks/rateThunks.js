import { createAsyncThunk, } from '@reduxjs/toolkit';
import getRate from '../../Api/rateApi';

const fetchRate = createAsyncThunk('rate/fetchRate',
    async () => {
        const response = await getRate();
        return response.data;
    }
);
export default fetchRate;
