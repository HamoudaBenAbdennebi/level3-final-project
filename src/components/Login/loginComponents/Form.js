import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../../redux/actions/action";

import "../style.css";
const Form = () => {
  const [state, setState] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(state));
    history.push("/login");

    setState({});
  };
  const { username, email, password } = state;

  return (
    <div className="form">
      <h1>Sign in</h1>
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
      <button onClick={handleSubmit}>send</button>
    </div>
  );
};

export default Form;
