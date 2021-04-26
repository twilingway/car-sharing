import { createSlice } from '@reduxjs/toolkit';
import fetchRate from '../thunks/rateThunks';

export const slice = createSlice({
    name: 'rate',
    initialState: {
        isFetch: false,
        isSuccess: false,
        isError: false,
        data: [],
        error: {}
    },
    reducers: {
    },
    extraReducers: {
        [fetchRate.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: []
            }
        ),

        [fetchRate.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload
            }
        ),
        [fetchRate.rejected]: (state, action) => (
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
