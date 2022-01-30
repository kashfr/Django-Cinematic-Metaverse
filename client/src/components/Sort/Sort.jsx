import "./Sort.css";

const Sort = (props) => {
  const handleSort = (event) => {
    props.handleSort(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort By:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="current-bid-ascending">
          &nbsp; Current Bid, low to high &nbsp;
        </option>
        <option value="current-bid-descending">
          &nbsp; Current Bid, high to low &nbsp;
        </option>
        <option value="time-ascending">&nbsp; Time, low to high &nbsp;</option>
        <option value="time-descending">&nbsp; Time, high to low &nbsp;</option>
      </select>
    </form>
  );
};

export default Sort;
