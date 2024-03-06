import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";


const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className={css.contactList}>
            <ul className={css.listUl}>
                {contacts.map((contact) => (
                    <li className={css.listLi} key={contact.id}>
                        <Contact {...contact} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
