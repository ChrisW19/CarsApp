import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm || '';
    });

    const handleSearchChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <form >
                <div className="search field is-horizonta;">
                    <label className="label">Search</label>
                    <input
                        className="input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        />

                </div>
            </form>
        </div>
    )
}

export default CarSearch;