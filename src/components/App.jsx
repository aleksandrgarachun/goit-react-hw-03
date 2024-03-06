import { useState, useEffect } from "react";
import './App.css'
import ContactForm from "./ContactForm/ContactForm.jsx"
import ContactList from "./ContactList/ContactList.jsx"
import SearchBox from './SearchBox/SearchBox.jsx'


const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('contacts');
        return storedContacts ? JSON.parse(storedContacts) : initialContacts;
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
    };

    const [filter, setFilter] = useState('');

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}

export default App;