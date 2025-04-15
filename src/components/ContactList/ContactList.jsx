import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ phoneBook, onDelete }) {
  return (
    <ul className={css.contactList}>
      {phoneBook.map(data => (
        <li key={data.id} className={css.contact}>
          <Contact data={data} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
