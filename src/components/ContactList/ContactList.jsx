import Contact from "./Contact/Contact";
//import css from "./ContactList.module.css";
//import PropTypes from "prop-types";




const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact {...contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;




