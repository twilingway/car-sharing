import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'rateType',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {

        fetchRateType: () => ({
            isLoading: true,
        }),

        setRateType: (state, action) => (
            {
                isLoading: false,
                data: action.payload
            }
        ),
    }
});

export const {
    fetchRateType,
    setRateType,
} = slice.actions;

export const selectRateType = state => state.rateType;
export const selectRateTypeLoading = state => state.rateType.isLoading;

export const getRateTypeAsync = () => async (dispatch) => {
    dispatch(fetchRateType());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/rateType');
    dispatch(setRateType(response.data));
};

// export const getCarByCategoryAsync = (id) => async (dispatch) => {
//     dispatch(fetchRate());
//     const response = await requestHttp(`https://api-factory.simbirsoft1.com/api/db/car?categoryId=${id}`);
//     dispatch(setRate(response.data));
// };

export default slice.reducer;
