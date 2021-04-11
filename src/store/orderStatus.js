import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'orderStatus',
    initialState: {
        isLoading: false,
        data: {}
    },
    reducers: {

        fetchOrderStatus: () => ({
            isLoading: true,
        }),

        setOrderStatus: (state, action) => (
            {
                isLoading: false,
                data: action.payload
            }
        ),
    }
});

export const {
    fetchOrderStatus,
    setOrderStatus,
} = slice.actions;

export const selectRate = state => state.orderStatus;
export const selectRateLoading = state => state.orderStatus.isLoading;

export const getOrderStatusAsync = () => async (dispatch) => {
    dispatch(fetchOrderStatus());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/orderStatus');
    dispatch(setOrderStatus(response.data));
};

// export const getCarByCategoryAsync = (id) => async (dispatch) => {
//     dispatch(fetchRate());
//     const response = await requestHttp(`https://api-factory.simbirsoft1.com/api/db/car?categoryId=${id}`);
//     dispatch(setRate(response.data));
// };

export default slice.reducer;
