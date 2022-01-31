import React from "react";
import "./ObservationForm.css";

const ObservationForm = ({ name, text, onChange, onSubmit, setToggle }) => {
  return (
    <form className="observation-create-form" onSubmit={(e) => onSubmit(e)}>
      <textarea
        className="observation-input-name"
        rows={3}
        placeholder="name"
        value={name}
        name="name"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <textarea
        className="observation-textarea-text"
        rows={3}
        placeholder="write your observation here"
        value={text}
        name="text"
        required
        onChange={(e) => onChange(e)}
      />
      <button type="submit" className="observation-submit-button">
        Submit
      </button>
    </form>
  );
};

export default ObservationForm;

// props.setToggle((prev) => !prev);
