import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Register = (props) => {
  const [formParams, setFormParams] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister(formParams);
  };

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn} navText="Войти" navLink="signin" />
      <div className="login">
        <h2 className="login__text">Регистрация</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <input
            id="email"
            name="email"
            type="email"
            value={formParams.email}
            onChange={handleChange}
            className="login__input login__input-field"
            placeholder="Email"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            value={formParams.password}
            onChange={handleChange}
            className="login__input login__input-field"
            placeholder="Пароль"
            required
          />
          <div className="login__but">
            <button
              type="submit"
              className="login__but-submit login__but-submit_mod"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div className="register">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to="signin" className="register__text register__link">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
