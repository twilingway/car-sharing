import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'order',
    initialState: {

        step: 1,
        lastStepValidate: 0,
        orderStatusId: {
            name: '',
            id: ''
        },
        cityId: {
            name: null,
            id: null,
        },
        pointId: {
            address: null,
            name: null,
            id: null,
        },
        carId: {
            name: null,
            id: null
        },
        color: null,
        dateFrom: null,
        dateTo: null,
        rateId: {
            price: null,
            id: null,
        },
        price: null,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false
    },
    reducers: {

        setOrderStep: (state, action) => ({
            ...state,
            step: action.payload
        }),
        setOrderLatStepValidate: (state, action) => ({
            ...state,
            lastStepValidate: action.payload
        }),
        setOrderByKey: (state, key, action) => ({
            ...state,
            [key]: action.payload
        }),

        setOrderCity: (state, action) => ({
            ...state,
            cityId: {
                id: action.payload.id,
                name: action.payload.name,
            }
        }),

        deleteOrderCity: (state) => ({
            ...state,
            cityId: {
                id: null,
                name: null,
            }
        }),

        setOrderPoint: (state, action) => ({
            ...state,
            pointId: {
                id: action.payload.id,
                name: action.payload.name,
                address: action.payload.address,
            }
        }),

        deleteOrderPoint: (state) => ({
            ...state,
            pointId: {
                id: null,
                name: null,
                address: null,
            }
        }),

        setOrderCar: (state, action) => ({
            ...state,
            carId: {
                // id: action.payload.id,
                // name: action.payload.name,
                ...action.payload
            }
        }),

        setOrderDateFrom: (state, action) => ({
            ...state,
            dateFrom: action.payload
        }),
        setOrderDateTo: (state, action) => ({
            ...state,
            dateTo: action.payload
        }),

        setOrderColor: (state, action) => ({
            ...state,
            color: action.payload
        }),
        setOrderRate: (state, action) => ({
            ...state,
            rate: { ...action.payload }
        }),

    }
});

export const {
    setOrderStep,
    setOrderLatStepValidate,
    setOrderByKey,
    setOrderPoint,
    setOrderCity,
    setOrderCar,
    deleteOrderCity,
    deleteOrderPoint,
    setOrderDateFrom,
    setOrderDateTo,
    setOrderColor,
    setOrderRate
} = slice.actions;

export const getOrderStepSelect = state => state.order.step;
export const getOrderLastStepSelect = state => state.order.lastStepValidate;

export const getOrderSelect = state => state.order;

export const getOrderCarSelect = state => state.order.carId;

export const getOrderCitySelect = state => state.order.cityId;
export const getOrderPointSelect = state => state.order.pointId;
export const getOrderCarColorsSelect = state => state.order.carId.colors;

export default slice.reducer;
