import { useEffect, useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import initialContacts from "../../contacts.json";
import css from "./App.module.css";

const LS_KEY = "contacts";

function App() {
  const [filter, setFilter] = useState("");
  const [contactsList, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem(LS_KEY);
    const parsedContactsFromLocalStorage = JSON.parse(contactsFromLocalStorage);

    parsedContactsFromLocalStorage
      ? setContacts(parsedContactsFromLocalStorage)
      : setContacts(initialContacts);
  }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contactsList);
    localStorage.setItem(LS_KEY, stringifiedContacts);
  }, [contactsList]);

  useEffect(() => {
    const loweredcaseInputValue = filter.toLowerCase();
    const filteredContacts = contactsList.filter(({ name }) =>
      name.toLowerCase().includes(loweredcaseInputValue)
    );
    setFilteredContacts(filteredContacts);
  }, [filter, contactsList]);

  const onInputChange = (inputValue) => {
    setFilter(inputValue);
  };

  const onFormSumbit = (entrie) => setContacts([...contactsList, entrie]);

  const deleteContact = (idValue) => {
    const updatedContactList = contactsList.filter(({ id }) => id !== idValue);
    setContacts(updatedContactList);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onFormSumbit={onFormSumbit} />
      <SearchBox filterValue={filter} onInputChange={onInputChange} />
      <ContactList
        contacts={filter ? filteredContacts : contactsList}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
