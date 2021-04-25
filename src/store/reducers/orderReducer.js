import { createSlice } from '@reduxjs/toolkit';
import postOrder, { fetchOrderById, putOrder } from '../thunks/orderThunks';

export const slice = createSlice({
    name: 'order',
    initialState: {
        id: null,
        step: 1,
        lastStepValidate: 0,
        selectedCategory: {
            id: null,
            name: null
        },
        orderStatusId: {
            name: null,
            id: null
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
        isRightWheel: null,
        error: {}
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

        setOrderStatusId: (state, action) => ({
            ...state,
            orderStatusId: action.payload
        }),

        setOrderCity: (state, action) => ({
            ...state,
            cityId: {
                id: action.payload.value,
                name: action.payload.label,
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
            isRightWheel: null,
        }),

        setOrderPoint: (state, action) => ({
            ...state,
            pointId: {
                id: action.payload.value,
                name: action.payload.name,
                address: action.payload.label,
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
            isRightWheel: null,
        }),

        setOrderCar: (state, action) => ({
            ...state,
            carId: {
                ...action.payload
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
            isRightWheel: null,
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

        setOrderColor: (state, action) => ({
            ...state,
            color: action.payload
        }),

        setOrderRate: (state, action) => ({
            ...state,
            rateId: { ...action.payload }
        }),

        setOrderService: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload]
        }),

        setOrderPrice: (state, action) => ({
            ...state,
            price: action.payload
        }),


        clearOrder: () => ({
            id: null,
            step: 1,
            lastStepValidate: 0,
            selectedCategory: {
                id: null,
                name: null
            },
            orderStatusId: {
                name: null,
                id: null
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
            isRightWheel: null,
            error: {}
        })

    },
    extraReducers: {
        [postOrder.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                error: {}
            }
        ),

        [postOrder.fulfilled]: (state, action) => (
            {
                ...state,
                ...action.payload,
                isFetch: false,
                isSuccess: true,
            }
        ),
        [postOrder.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                error: action.payload
            }
        ),
        [putOrder.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                error: {}
            }
        ),

        [putOrder.fulfilled]: (state, action) => (
            {
                ...state,
                ...action.payload,
                isFetch: false,
                isSuccess: true,
            }
        ),
        [putOrder.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isError: true,
                error: action.payload
            }
        ),
        [fetchOrderById.pending]: (state) => (
            {
                ...state,
                isFetch: true,
                isSuccess: false,
                isError: false,
                error: {}
            }
        ),

        [fetchOrderById.fulfilled]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: true,
                error: {},
                ...action.payload
            }
        ),
        [fetchOrderById.rejected]: (state, action) => (
            {
                ...state,
                isFetch: false,
                isSuccess: false,
                isError: true,
                error: action.payload
            }
        )
    },
});

export const {
    setOrderStep,
    setOrderLatStepValidate,
    setOrderByKey,
    setOrderCity,
    setOrderPoint,
    setOrderCar,
    setOrderSelectedCategory,
    setOrderDateFrom,
    setOrderDateTo,
    setOrderColor,
    setOrderRate,
    setOrderService,
    setOrderStatusId,
    setOrderPrice,
    clearOrder,
} = slice.actions;



export default slice.reducer;
