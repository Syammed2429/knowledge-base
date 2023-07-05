import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
}

interface Article {
    id: string;
    title: string;
    createdOn: string;
    updatedOn: string;
    content: string;
    icon: string;
    authorId: string;
    status: string;
}

interface Author {
    id: string;
    name: string;
}

interface JSONDataInterface {
    categories: Category[];
    articles: Article[];
    authors: Author[];
}

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