import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';


export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsToLowerCase = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
          {contactsToLowerCase && contactsToLowerCase.map(
              ({ id, name, number }) => {
                  return (
                      <li key={id} className={css.item}>
                          <p className={css.text}>{name}: {number}</p>
                          <button className={css.deleteBtn} type='button' onClick={() => dispatch(deleteContact(id))}>Удалить</button>
                      </li>
                  )
              }
          )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};