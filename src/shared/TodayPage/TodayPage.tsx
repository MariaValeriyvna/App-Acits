import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateToday } from "../../store/actions";
import { IPropsToday, RootState } from "../../store/store";
import { Header } from "../Header";
import { PreLoader } from "../Preloader";
import { CardTodayPage } from "./CardTodayPage";
import styles from "./todaypage.scss";

export function TodayPage(): JSX.Element {
  const token = localStorage.getItem("tokenAcits");
  const nowDate = new Date().toLocaleDateString();
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const results = useSelector<RootState, Array<IPropsToday>>(
    (state) => state.today
  );
  useEffect(() => {
    if (results && results.length > 1) return;
    if (token) {
      setLoad(true);
      fetch("https://acits-api.herokuapp.com/api/v1/prescriptions/today", {
        headers: { Authorization: `Bearer ${token}`, "current-shelter": "1" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code) {
            setError(true);
            localStorage.setItem("tokenAcits", "");
          }
          dispatch(updateToday(data.results));
          setLoad(false);
        })
        .catch(console.log);
    }
  }, [token]);
  return (
    <div className={styles.todaypageContainer}>
      <div>{load && <PreLoader />}</div>
      <Header />
      <h1>Сегодня {nowDate}</h1>
      <ul className={styles.todaypage}>
        {!error && results && results !== undefined ? (
          results.map((result, index: number) => {
            return (
              <li key={index}>
                <CardTodayPage
                  id={result.animal.id}
                  name={result.animal.name}
                  mytype={result.my_type}
                />
              </li>
            );
          })
        ) : (
          <Redirect to="/login" />
        )}
      </ul>
    </div>
  );
}
