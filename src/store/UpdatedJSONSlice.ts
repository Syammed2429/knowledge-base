import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdatedCategory } from "../interface/Interface";



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