
import { createSlice } from '@reduxjs/toolkit';
import contacts from '../components/initialContacts'
import { nanoid } from 'nanoid';


export const contactSlice = createSlice(
    {
        name: 'contact',
        initialState: contacts,
        reducers: {
            addContact: {
                reducer(state, action) {
                    state.push(action.payload)
                },
                prepare({ name, number }) {
                    return {
                        payload: {
                            name,
                            number,
                            id: nanoid(),
                        }
                    }
                }
            },
            deleteContact(state, action) {
                return state.filter( cont => cont.id !== action.payload)
            }
        }
    }
)

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;