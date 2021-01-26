import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useCloseElement } from "../../hooks/useCloseElement";
import { RootState } from "../../store/store";
import { Crossicon } from "../img";
import styles from "./animalmodal.scss";
interface IPropsModal {
  onClose: () => void;
  id: number;
}
interface IPropResult {
  name: string;
  animal_attributes: [{ name: string; value: string }];
}
interface IParams {
  [key: string]: string;
}

export function AnimalModal({ onClose, id }: IPropsModal): JSX.Element {
  const paramsAnimal: IParams = {
    height: "рост",
    weight: "вес",
    sex: "пол",
    color: "цвет",
    special_signs: "особые приметы",
  };
  const token = localStorage["tokenAcits"];
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const isClose = useCloseElement(ref, false, onClose);
  const node = document.querySelector("#modal_root");
  const [result, setResult] = useState<IPropResult>();

  useEffect(() => {
    fetch(`https://acits-api.herokuapp.com/api/v1/animals/${id}/`, {
      headers: { Authorization: `Bearer ${token}`, "current-shelter": "1" },
    })
      .then((res) => res.json())
      .then((data) => data)
      .then((data) => {
        if (data.code) {
          setError(true);
          localStorage.setItem("tokenAcits", "");
        } else setResult(data);
      })
      .catch(console.log);
  }, [id, token]);
  if (!node || isClose || result == undefined) return <div />;

  return ReactDOM.createPortal(
    <>
      {!error ? (
        <div className={styles.modalWrap}>
          <div className={styles.modal} ref={ref}>
            <button className={styles.cross} onClick={onClose}>
              <Crossicon />
            </button>
            <h1>{result.name}</h1>
            <ul>
              {result.animal_attributes.map((element, index) => {
                const prop = element.name;
                return (
                  <li key={index}>
                    {paramsAnimal[prop]} - {element.value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>,
    node
  );
}
