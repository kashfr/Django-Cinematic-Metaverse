import React from "react";
import "./ObservationForm.css";

const ObservationForm = ({ username, text, onChange, onSubmit }) => {
  return (
    <form className="observation-create-form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="observation-input-author"
        placeholder="Name"
        value={username}
        name="author"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      {/* <input
        className="observation-input-rating"
        placeholder="Rating (1-5)"
        value={rating}
        name="rating"
        required
        onChange={(e) => onChange(e)}
      /> */}
      <textarea
        className="observation-textarea-description"
        rows={10}
        placeholder="Write your observation..."
        value={text}
        name="description"
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
