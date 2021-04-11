import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'rate',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {

        fetchRate: () => ({
            isLoading: true,
        }),

        setRate: (state, action) => (
            {
                isLoading: false,
                data: action.payload
            }
        ),
    }
});

export const {
    fetchRate,
    setRate,
} = slice.actions;

export const selectRate = state => state.rate;
export const selectRateLoading = state => state.rate.isLoading;

export const getRateAsync = () => async (dispatch) => {
    dispatch(fetchRate());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/rate');
    dispatch(setRate(response.data));
};

// export const getCarByCategoryAsync = (id) => async (dispatch) => {
//     dispatch(fetchRate());
//     const response = await requestHttp(`https://api-factory.simbirsoft1.com/api/db/car?categoryId=${id}`);
//     dispatch(setRate(response.data));
// };

export default slice.reducer;
