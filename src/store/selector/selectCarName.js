import { createSelector } from 'reselect';

// Input selectors
const selectCarsData = (state) => state.cars.data;
const selectSearchTerm = (state) => state.cars.searchTerm;
const selectFormName = (state) => state.form.name;

// Memoized selector
export const selectFilteredCars = createSelector(
    [selectCarsData, selectSearchTerm],
    (data, searchTerm) => {
        return data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
);

export const selectCarFormName = selectFormName;