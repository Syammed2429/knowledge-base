import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import JSONReducer from './JSONSlice'
import updatedData from './UpdatedJSONSlice'
// import articlesReducer from './articlesSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        Json: JSONReducer,
        updatedCategories: updatedData
        // articles: articlesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

