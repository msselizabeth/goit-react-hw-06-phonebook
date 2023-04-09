
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';


export const ContactForm = ({onSubmit}) => {

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//     const loginInputName = nanoid();
//     const loginInputnumber = nanoid();

//     const handleChange = e => {
//         const name = e.currentTarget.name;

//         switch (name) {
//             case 'name':
//             setName(e.currentTarget.value);
//             break;

//             case 'number':
//             setNumber(e.currentTarget.value);
//             break;
            
//             default:
//                 return;

//         }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     setName('');
//     setNumber('');
//   };
    
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts)
      return alert('This contact is already in your contacts.');

    dispatch(addContact({ name, number }));
    form.reset();
  };


        return (
            <form onSubmit={handleSubmit}>
                <h2 className={css.nameTitle}>Name</h2>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <h2 className={css.numberTitle}>Number</h2>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type='submit' className={css.addButton}>Добавить контакт</button>

            </form>
        )
}