import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import { selectCarFormBrand, selectFilteredCars } from "../store/selector/selectCarName";

function CarList() {
    const dispatch = useDispatch();

    // Use memoized selectors
    const cars = useSelector(selectFilteredCars);
    const brand = useSelector(selectCarFormBrand);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        console.log(car)
        const bold = brand && car.brand.toLowerCase().includes(brand.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.brand} - {car.year} {car.model} - ${car.cost}
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