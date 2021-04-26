import { createSlice } from '@reduxjs/toolkit';
import { fetchCar, fetchCarById } from '../thunks/carThunks';

const carInitialState = {
    isFetch: false,
    isError: false,
    isSuccess: false,
    data: [],
    error: {}
};

export const slice = createSlice({
    name: 'car',
    initialState: carInitialState,
    reducers: {
    },
    extraReducers: {
        [fetchCar.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: []
            }
        ),

        [fetchCar.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload
            }
        ),
        [fetchCar.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                data: [],
                error: action.payload
            }
        ),
        [fetchCarById.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: []
            }
        ),

        [fetchCarById.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload
            }
        ),
        [fetchCarById.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                data: [],
                error: action.payload
            }
        ),
    }
});

export default slice.reducer;