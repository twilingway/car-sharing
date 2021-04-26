import { createSlice } from '@reduxjs/toolkit';
import fetchCategory from '../thunks/categoryThunks';

const categoryInitialState =
{
    isFetch: true,
    isSuccess: false,
    isError: false,
    data: [],
    error: {}
};


export const slice = createSlice({
    name: 'category',
    initialState: categoryInitialState,
    reducers: {
    },
    extraReducers: {
        [fetchCategory.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                data: []
            }
        ),

        [fetchCategory.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                data: action.payload
            }
        ),
        [fetchCategory.rejected]: (state, action) => (
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