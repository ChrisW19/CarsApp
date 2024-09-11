import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        brand: '',
        year: null,
        model: '',
        cost: 0
    },
    reducers: {
        changeBrand(state, action) {
            state.brand = action.payload;
        },
        changeYear(state, action) {
            state.year = action.payload;
        },
        changeModel(state, action) {
            state.model = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    //Clear input fields
    extraReducers(builder) {
        builder.addCase(addCar, (state) => {
            state.brand = "";
            state.year = null;
            state.model = "";
            state.cost = 0;
        });
    }
});

export const {changeBrand, changeModel, changeYear, changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer; 