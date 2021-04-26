import { createSlice } from '@reduxjs/toolkit';
import fetchOrderStatus from '../thunks/orderStatusThunks';

export const slice = createSlice({
    name: 'orderStatus',
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
        [fetchOrderStatus.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: [],
                error: {}
            }
        ),

        [fetchOrderStatus.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload,
            }
        ),
        [fetchOrderStatus.rejected]: (state, action) => (
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
