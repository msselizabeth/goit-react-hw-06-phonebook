import PropTypes from 'prop-types';
import css from './Filter.module.css'
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = ({ filter }) => {
    const dispatch = useDispatch();
      
    const handleFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };
    return (
        <label className={css.label}>
            Find contacts by name 
            <input type="text" onChange={handleFilter} className={css.input}/>
        </label>
    )
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
}