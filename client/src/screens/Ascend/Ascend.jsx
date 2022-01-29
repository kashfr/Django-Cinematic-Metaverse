import { useState } from "react";
import "./Ascend.css";
import { ascend } from "../../services/users";
import { useHistory } from "react-router-dom";

const Ascend = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });
  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onAscenscion = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await ascend(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, passwordConfirmation } = form;

  return (
    <div className="form-container">
      <h3>Ascend</h3>
      <form onSubmit={onAscenscion}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
};

export default Ascend;
