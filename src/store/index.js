import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeCost, changeBrand, changeYear, changeModel } from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, changeCost, changeBrand, changeYear, changeModel, addCar, removeCar, changeSearchTerm};