import { createSelector } from 'reselect';

// Input selectors
const selectCarsData = (state) => state.cars.data;
const selectSearchTerm = (state) => state.cars.searchTerm;
const selectFormBrand = (state) => state.form.brand;

// Memoized selector
export const selectFilteredCars = createSelector(
    [selectCarsData, selectSearchTerm],
    (data, searchTerm) => {
        return data.filter((car) =>
            car.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
);

export const selectCarFormBrand = selectFormBrand;