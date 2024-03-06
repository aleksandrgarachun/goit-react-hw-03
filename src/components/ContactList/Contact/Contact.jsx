import css from "./Contact.module.css"
//import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete}) => {
  return (
    <div className={css.mainWrapper}>
      <div >
        <div>
          {" "}
          <FaUser /> {name}
        </div>
        <div>
          {" "}
          <FaPhoneAlt /> {number}
        </div>
      </div>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}


export default Contact;

