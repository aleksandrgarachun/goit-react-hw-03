import css from "./SearchBox.module.css";
import PropTypes from "prop-types";
//import { useId, useState } from "react";


const SearchBox = ({ value, onFilter}) => {
  return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={e => onFilter(e.target.value)} />
    </div>
  )
}

export default SearchBox