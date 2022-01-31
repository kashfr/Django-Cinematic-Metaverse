import React from "react";
import "./ObservationForm.css";

const ObservationForm = ({ name, text, onChange, onSubmit }) => {
  return (
    <form className="observation-create-form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="observation-input-name"
        placeholder="name"
        value={name}
        name="name"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <textarea
        className="observation-textarea-text"
        rows={10}
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
