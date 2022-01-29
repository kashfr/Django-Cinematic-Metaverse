import { useState } from "react";
import "./PlugIn.css";
import { plugIn } from "../../services/users";
import { useHistory } from "react-router-dom";

const PlugIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onPlugIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await plugIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
      return <button type="submit">Plug In</button>;
    }
  };

  const { email, password } = form;

  return (
    <div className="form-container">
      <h3>Plug In</h3>
      <form onSubmit={onPlugIn}>
        <label>Email</label>
        <input
          required
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email"
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
        {renderError()}
      </form>
    </div>
  );
};

export default PlugIn;
