import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'basket',
    initialState: {
        isActive: false
    },
    reducers: {
        setBasketStatus: (state, action) => ({
            ...state,
            isActive: action.payload
        }),
    }
});

export const {
    setBasketStatus } = slice.actions;

export default slice.reducer;
