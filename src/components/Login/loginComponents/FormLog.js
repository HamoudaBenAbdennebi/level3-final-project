import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../../redux/actions/action";
import { Link } from "react-router-dom";
import "../style.css";
const FormLog = () => {
  const [state, setState] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(signIn(state));
    history.push("/");
  };
  const { username, email, password } = state;

  return (
    <div className="form">
      <h1>Log in</h1>
      <input
        type="text"
        onChange={handleChange}
        value={username}
        placeholder="username"
        name="username"
        autocomplete="off"
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        value={email}
        autocomplete="off"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={password}
        autocomplete="off"
      />
      <button onClick={handleSubmit}>login</button>
      <Link to="/register" style={{ color: "white" }}>
        New here , create an account
      </Link>
    </div>
  );
};

export default FormLog;
