import { createAsyncThunk, } from '@reduxjs/toolkit';
import getRateType from '../../Api/rateTypeApi';

const fetchRateType = createAsyncThunk('rateType/fetchRateType',
    async () => {
        const response = await getRateType();
        return response.data;
    }
);
export default fetchRateType;
