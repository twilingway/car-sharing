import { createSlice } from '@reduxjs/toolkit';
import requestHttp from '../Api/http';

export const slice = createSlice({
    name: 'category',
    initialState: {
        isLoading: true,
        data: [],
    },
    reducers: {

        fetchCategory: () => ({
            isLoading: true,
        }),

        setCategory: (state, action) => (
            {
                ...state,
                isLoading: false,
                data: action.payload
            }
        ),

    }
});

export const {
    fetchCategory,
    setCategory,
} = slice.actions;

export const selectCategory = state => state.category.data;
export const selectCategoryLoading = state => state.category.isLoading;


export const getCategoryAsync = () => async (dispatch) => {
    dispatch(fetchCategory());
    const response = await requestHttp('https://api-factory.simbirsoft1.com/api/db/category');
    dispatch(setCategory(response.data));
};

export default slice.reducer;
