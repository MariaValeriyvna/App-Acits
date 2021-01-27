import React, { FormEvent, useEffect, useRef, useState } from "react";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateAnimals, updateToday } from "../../store/actions";
import { PreLoader } from "../Preloader";

import styles from "./logpage.scss";

export function LogPage(): JSX.Element {
  const [formTouch, setFormTouch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!empty) {
      const payload = {
        username: login,
        password: password,
        // username: "test_user_1",
        // password: "user10000",
      };
      fetch("https://acits-api.herokuapp.com/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access !== undefined) {
            localStorage.setItem("tokenAcits", data.access);
            setIsLogin(true);
          } else {
            setEmpty(true);
          }
          setLoad(false);
        })
        .catch(console.log);
    }
  }, [empty]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!login || !password) {
      setEmpty(true);
      setFormTouch(true);
    } else {
      setLoad(true);
      setEmpty(false);
      setFormTouch(true);
    }
  }

  function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setLogin(event.target.value);
  }
  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    event.preventDefault();
  }
  return (
    <div className={styles.logpage}>
      {isLogin ? (
        <Redirect to="/today" />
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
          <fieldset className={styles.fieldset}>
            <legend>ACITS Регистрация</legend>

            <label htmlFor="log">Имя пользователя</label>
            <br />
            <input
              className={styles.inputText}
              type="text"
              name="log"
              placeholder="Введите имя пользователя (логин)"
              value={login}
              onChange={handleChangeLogin}
            />
            <br />
            <label htmlFor="password">Пароль</label>
            <br />
            <input
              className={styles.inputText}
              type="password"
              name="password"
              placeholder="Введите пароль"
              value={password}
              onChange={handleChangePassword}
            />
            <div className={styles.empty}>
              {formTouch && empty && (
                <span>Имя пользователя или пароль введены неверно</span>
              )}
            </div>
            <button className={styles.btn} type="submit">
              Войти
            </button>
          </fieldset>
        </form>
      )}
      <div>{load && <PreLoader />}</div>
    </div>
  );
}
