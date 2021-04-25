import { createSlice } from '@reduxjs/toolkit';
import { fetchCity, fetchPointById } from '../thunks/pointThunks';

export const slice = createSlice({
    name: 'point',
    initialState: {
        isFetch: false,
        isSuccess: false,
        isError: false,
        city: [],
        street: [],
        error: {}
    },
    reducers: {
    },
    extraReducers: {
        [fetchCity.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                city: [],
                street: [],
            }
        ),

        [fetchCity.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                city: action.payload
            }
        ),
        [fetchCity.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                city: [],
                street: [],
                error: action.payload
            }
        ),
        [fetchPointById.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                street: []
            }
        ),

        [fetchPointById.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                street: action.payload
            }
        ),
        [fetchPointById.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                street: [],
                error: action.payload
            }
        ),
    }
});

export default slice.reducer;
