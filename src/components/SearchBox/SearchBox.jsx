import css from "./SearchBox.module.css";



const SearchBox = ({ value, onFilter }) => {
    return (
        <div>
            <p className={css.paragraphSearch}>Find contacts by name</p>
            <input
                className={css.inputSearch}
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    )
}


export default SearchBox;