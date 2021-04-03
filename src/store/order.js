import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'order',
    initialState: {

        step: 1,
        lastStepValidate: 0,
        point: {
            city: '',
            street: ''
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
        }),
        setLatStepValidate: (state, action) => ({
            ...state,
            lastStepValidate: action.payload
        }),
        setOrderByKey: (state, key, action) => ({
            ...state,
            [key]: action.payload
        }),

        setCity: (state, action) => ({
            ...state,
            point: { ...state.point, city: action.payload }
        }),

        setStreet: (state, action) => ({
            ...state,
            point: { ...state.point, street: action.payload }
        }),

        setAnything: (state, action) => ({
            ...state,
            [action.payload.name]: action.payload.data
        })


    }
});

export const {
    setStep,
    setLatStepValidate,
    setOrderByKey,
    setCity,
    setStreet,
    setAnything } = slice.actions;

export const getStepSelect = state => state.order.step;
export const getLastStepSelect = state => state.order.lastStepValidate;

export const getOrderSelect = state => state.order;

export const getCitySelect = state => state.order.point.city;
export const getStreetSelect = state => state.order.point.street;
export const getModelSelect = state => state.order.model;


export default slice.reducer;
