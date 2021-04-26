import { createAsyncThunk, } from '@reduxjs/toolkit';
import { getCar, getCarByCategory } from '../../Api/carApi';

export const fetchCar = createAsyncThunk('car/fetchCar',
    async () => {
        const response = await getCar();
        return response.data;
    }
);

export const fetchCarById = createAsyncThunk('car/fetchCarById',
    async (id) => {
        const response = await getCarByCategory(id);
        return response.data;
    }
);
