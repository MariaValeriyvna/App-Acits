import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateAnimals } from "../../store/actions";
import { IPropsAnimals, RootState } from "../../store/store";
import { AnimalModal } from "../AnimalModal";
import { Header } from "../Header";
import styles from "./animalspage.scss";
import { CardAnimalsPage } from "./CardAnimallsPage";

export function AnimalsPage(): JSX.Element {
  const token = localStorage["tokenAcits"];
  const [error, setError] = useState(false);
  const results = useSelector<RootState, Array<IPropsAnimals>>(
    (state) => state.animals
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (results.length > 1) return;
    if (token) {
      fetch("https://acits-api.herokuapp.com/api/v1/animals", {
        headers: { Authorization: `Bearer ${token}`, "current-shelter": "1" },
      })
        .then((res) => res.json())
        .then((data) => {
          {
            if (data.code) {
              setError(true);
              localStorage.setItem("tokenAcits", "");
            }
            dispatch(updateAnimals(data.results));
          }
        })
        .catch(console.log);
    }
  }, [token]);
  return (
    <div className={styles.animalspageContainer}>
      <Header />
      <h1>Животные Приюта №1</h1>
      <ul className={styles.animalspage}>
        {!error && results && results !== undefined ? (
          results.map((result, index) => {
            return (
              <li key={index}>
                <CardAnimalsPage
                  id={result.id}
                  name={result.name}
                  specname={result.spec_name}
                  specnameparent={result.spec_parent_name}
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
