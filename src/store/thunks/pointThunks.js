import { createAsyncThunk, } from '@reduxjs/toolkit';
import { getCity, getPoint } from '../../Api/pointApi';

export const fetchCity = createAsyncThunk('point/fetchCity',
    async () => {
        const response = await getCity();
        return response.data;
    }
);

export const fetchPointById = createAsyncThunk('point/fetchPoint',
    async (id) => {
        const response = await getPoint(id);
        return response.data;
    }
);
