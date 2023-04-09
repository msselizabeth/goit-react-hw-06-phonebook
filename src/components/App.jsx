import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import css from './App.module.css'
import initialContacts from './initialContacts.json'


export const App =() =>  {
    return (
      <div className={css.appContainer}>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
    </div>
  );
};
