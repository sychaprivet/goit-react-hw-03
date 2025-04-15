import { useEffect, useState } from "react";
import "./App.css";
import phoneBookData from "../Data/PhoneBook.json";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

export default function App() {
  const [phoneBook, setPhone] = useState(() => {
    const savedValues = window.localStorage.getItem("phoneBook");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return phoneBookData;
  });

  useEffect(() => {
    window.localStorage.setItem("phoneBook", JSON.stringify(phoneBook));
  }, [phoneBook]);

  function addPhone(values) {
    setPhone(prevPhone => {
      return [...prevPhone, values];
    });
  }

  function deletePhone(phoneId) {
    setPhone(prevPhone => {
      return prevPhone.filter(phone => phone.id !== phoneId);
    });
  }

  const [filterBook, setFilterBook] = useState("");

  const visiblePhone = phoneBook.filter(phone =>
    phone.name.toLowerCase().includes(filterBook.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addPhone} />
      <SearchBox value={filterBook} onFilter={setFilterBook} />
      <ContactList phoneBook={visiblePhone} onDelete={deletePhone} />
    </>
  );
}
