import css from "./SearchBox.module.css";

const SearchBox = ({ onInputChange, filterValue }) => {
  const oninputValueChange = (e) => {
    onInputChange(e.target.value);
  };
  return (
    <div className={css.searchbox}>
      <p>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        onChange={oninputValueChange}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBox;
