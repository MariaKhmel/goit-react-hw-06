import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

function App() {
  // useEffect(() => {
  //   const contactsFromLocalStorage = localStorage.getItem(LS_KEY);
  //   const parsedContactsFromLocalStorage = JSON.parse(contactsFromLocalStorage);

  //   parsedContactsFromLocalStorage
  //     ? setContacts(parsedContactsFromLocalStorage)
  //     : setContacts(initialContacts);
  // }, []);

  // useEffect(() => {
  //   const stringifiedContacts = JSON.stringify(contactsList);
  //   localStorage.setItem(LS_KEY, stringifiedContacts);
  // }, [contactsList]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
