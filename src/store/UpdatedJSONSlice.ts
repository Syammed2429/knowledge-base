import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdatedCategory {
    updateTime: string;
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


interface AppState {
    updatedCategories: UpdatedCategory[];
}

const initialState: AppState = {
    updatedCategories: [],
};

const updatedCategories = createSlice({
    name: 'updatedCategories',
    initialState,
    reducers: {
        setUpdatedData(state, action: PayloadAction<AppState>) {
            return action.payload
        }
    }
});

export const { setUpdatedData } = updatedCategories.actions;
export default updatedCategories.reducer 