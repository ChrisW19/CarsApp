import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import { selectCarFormName, selectFilteredCars } from "../store/selector/selectCarName";

function CarList() {
    const dispatch = useDispatch();

    // Use memoized selectors
    const cars = useSelector(selectFilteredCars);
    const name = useSelector(selectCarFormName);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - {car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;