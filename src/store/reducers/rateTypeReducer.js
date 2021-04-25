import { createSlice } from '@reduxjs/toolkit';
import fetchRateType from '../thunks/rateTypeThunks';

export const slice = createSlice({
    name: 'rateType',
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
        [fetchRateType.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: []
            }
        ),

        [fetchRateType.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload
            }
        ),
        [fetchRateType.rejected]: (state, action) => (
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
