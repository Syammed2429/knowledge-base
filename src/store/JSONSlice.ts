import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JSONDataInterface } from '../interface/Interface';





const initialState: JSONDataInterface = {
    categories: [],
    articles: [],
    authors: [],
};


const JSONSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        setJSONData(state, action: PayloadAction<JSONDataInterface>) {
            return action.payload
        }
    }
});



export const { setJSONData } = JSONSlice.actions;

export default JSONSlice.reducer;