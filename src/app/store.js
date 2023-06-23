import { configureStore } from "@testing-library/react";
import carReducer from ".../components/features/carSlice"
export const store = configureStore({
    reducer:{
        counter : carReducer,
    },
});