import { useDispatch, useSelector } from "react-redux";
import {changeBrand, changeYear, changeModel, changeCost, addCar} from '../store';
import { createSelector } from "@reduxjs/toolkit";


function CarForm() {
    const dispatch = useDispatch();

    const memoizedForm = createSelector(
        (state) => state.form.brand,
        (state) => state.form.year,
        (state) => state.form.model,
        (state) => state.form.cost,
        (brand, year, model, cost) => {
            return { brand, year, model, cost };
        }
    );

    const { brand, year, model, cost } = useSelector(memoizedForm);

    const handleBrandChange = (event) => {
        dispatch(changeBrand(event.target.value));
    }

    const handleYearChange = (event) => {
        const year = parseInt(event.target.value)  || 0;
        dispatch(changeYear(year));
    }

    const handleModelChange = (event) => {
        dispatch(changeModel(event.target.value));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value)  || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({brand, year, model, cost}))

    }

    return <div className="car-form panel">
        <h3 className="subtitle is-3">Add Car</h3>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Brand</label>
                    <input 
                        className="input is-expanded"
                        value={brand}
                        onChange={handleBrandChange} 
                    />
                </div>
                <div className="field">
                    <label className="labelyear">Model Year</label>
                    <input 
                        className="input is-expanded"
                        value={year || ''}
                        placeholder="Enter a 4-digit year"
                        onChange={handleYearChange} 
                    />
                </div>
                <div className="field">
                    <label className="label">Model</label>
                    <input 
                        className="input is-expanded"
                        value={model}
                        onChange={handleModelChange} 
                    />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input 
                        className="input is-expanded"
                        value={cost || ''}
                        onChange={handleCostChange} 
                        type="number"
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
        
    </div>
}

export default CarForm;