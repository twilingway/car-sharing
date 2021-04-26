import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'menu',
    initialState: {
        isActive: false
    },
    reducers: {
        setMenuStatus: (state, action) => ({
            ...state,
            isActive: action.payload
        }),
    }
});

export const {
    setMenuStatus } = slice.actions;

export const getMenuStatusSelect = state => state.menu.isActive;

export default slice.reducer;
