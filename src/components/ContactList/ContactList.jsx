import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              number={number}
              deleteContact={deleteContact}
              id={id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
