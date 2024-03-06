import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete}) => {
  return (
    <div className={css.contactCover}>
      <div >
        <div className={css.contactInfo}>
          <FaUser className={css.contactIcons} /> {name}
        </div>
        <div className={css.contactInfo}>
          <FaPhoneAlt className={css.contactIcons} /> {number}
        </div>
      </div>

      <button className={css.contactButton} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}


export default Contact;

