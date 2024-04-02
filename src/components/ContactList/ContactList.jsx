import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (filterValue, contacts) => {
  const loweredCaseFilterValue = filterValue.toLowerCase();
  if (filterValue === "") {
    return contacts;
  } else {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(loweredCaseFilterValue)
    );
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(filterValue, contacts);

  return (
    <>
      <ul className={css.contactsList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
