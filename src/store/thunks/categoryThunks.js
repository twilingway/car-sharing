import { createAsyncThunk, } from '@reduxjs/toolkit';
import getCategory from '../../Api/categoryApi';

const fetchCategory = createAsyncThunk('category/fetchCategory',
    async () => {
        const response = await getCategory();
        return response.data;
    }
);
export default fetchCategory;