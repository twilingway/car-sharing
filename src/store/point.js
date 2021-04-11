import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'point',
    initialState: {
        isLoading: false,
        city: [],
        street: []
    },
    reducers: {

        fetchPoint: (state) => ({
            ...state,
            isLoading: true,
        }),

        setCityPoint: (state, action) => (
            {
                ...state,
                isLoading: false,
                city: action.payload
            }
        ),
        setStreetPoint: (state, action) => (
            {
                ...state,
                isLoading: false,
                street: action.payload
            }
        ),
    }
});

export const {
    fetchPoint,
    setCityPoint,
    setStreetPoint,

} = slice.actions;

export const selectPoint = state => state.point;
export const selectPointLoading = state => state.point.isLoading;

export const getCityAsync = () => async (dispatch) => {
    dispatch(fetchPoint());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/city');
    dispatch(setCityPoint(response.data));
};

export const getPointsAsync = (id) => async (dispatch) => {
    dispatch(fetchPoint());
    const response = await requestHttp(`https://api-factory.simbirsoft1.com/api/db/point?cityId=${id}`);
    dispatch(setStreetPoint(response.data));
};

export default slice.reducer;
