import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'order',
    initialState: {

        step: 1,
        lastStepValidate: 0,
        selectedCategory: {
            id: null,
            name: null
        },
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
        isFullTank: null,
        isNeedChildChair: null,
        isRightWheel: null
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

        setOrderCity: (state, action) => (

            {
                ...state,
                cityId: {
                    id: action.payload.value,
                    name: action.payload.label,
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
                id: action.payload.value,
                name: action.payload.name,
                address: action.payload.label,
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

        deleteOrderCar: (state) => ({
            ...state,
            carId: {
                name: null,
                id: null
            }
        }),

        setOrderSelectedCategory: (state, action) => ({
            ...state,
            selectedCategory: action.payload
        }),

        setOrderDateFrom: (state, action) => ({
            ...state,
            dateFrom: action.payload
        }),
        setOrderDateTo: (state, action) => ({
            ...state,
            dateTo: action.payload
        }),
        deleteOrderDate: (state) => ({
            ...state,
            dateFrom: null,
            dateTo: null,
        }),

        setOrderColor: (state, action) => ({
            ...state,
            color: action.payload
        }),
        deleteOrderColor: (state) => ({
            ...state,
            color: null,
        }),
        setOrderRate: (state, action) => ({
            ...state,
            rateId: { ...action.payload }
        }),
        deleteOrderRate: (state) => ({
            ...state,
            rateId: {
                price: null,
                id: null,
            },
        }),

        setOrderService: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload]
        }),
        deleteOrderService: (state) => ({
            ...state,
            isFullTank: null,
            isNeedChildChair: null,
            isRightWheel: null
        }),

    }
});

export const {
    setOrderStep,
    setOrderLatStepValidate,
    setOrderByKey,
    setOrderCity,
    deleteOrderCity,
    setOrderPoint,
    deleteOrderPoint,
    setOrderCar,
    deleteOrderCar,
    setOrderSelectedCategory,
    setOrderDateFrom,
    setOrderDateTo,
    deleteOrderDate,
    setOrderColor,
    deleteOrderColor,
    setOrderRate,
    deleteOrderRate,
    setOrderService,
    deleteOrderService,
} = slice.actions;

export const getOrderStepSelect = state => state.order.step;
export const getOrderLastStepSelect = state => state.order.lastStepValidate;

export const getOrderSelect = state => state.order;

export const getOrderCarSelect = state => state.order.carId;

export const getOrderCitySelect = state => state.order.cityId;
export const getOrderPointSelect = state => state.order.pointId;
export const getOrderCarColorsSelect = state => state.order.carId.colors;

export const selectOrderSelectedCategory = state => state.order.selectedCategory;

export default slice.reducer;
