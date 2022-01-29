import "./Quest.css";

const Quest = (props) => {
  return (
    <form className="quest-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="quest-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Quest"
        placeholder="Quest"
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Quest;
