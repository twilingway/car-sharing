import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'car',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {

        fetchCar: () => ({
            isLoading: true,
        }),

        setCar: (state, action) => (
            {
                isLoading: false,
                data: action.payload
            }
        ),
    }
});

export const {
    fetchCar,
    setCar,
} = slice.actions;

export const selectCar = state => state.car;
export const selectCarLoading = state => state.car.isLoading;

export const getCarAsync = () => async (dispatch) => {
    dispatch(fetchCar());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/car');
    dispatch(setCar(response.data));
};

export const getCarByCategoryAsync = (id) => async (dispatch) => {
    dispatch(fetchCar());
    const response = await requestHttp(`https://api-factory.simbirsoft1.com/api/db/car?categoryId=${id}`);
    dispatch(setCar(response.data));
};

export default slice.reducer;
