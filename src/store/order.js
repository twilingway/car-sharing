import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'order',
    initialState: {

        step: 1,
        point: {
            city: null,
            street: null
        },
        model: null,
        color: null,
        time: null,
        tariff: null,
        services: {},
    },
    reducers: {
        setStep: (state, action) => ({
            ...state,
            step: action.payload
        })
    }
});

export const { setStep } = slice.actions;

export const getStep = state => state.order.step;

export default slice.reducer;
