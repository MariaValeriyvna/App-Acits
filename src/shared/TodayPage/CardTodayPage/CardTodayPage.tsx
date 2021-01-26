import React, { useState } from "react";
import { AnimalModal } from "../../AnimalModal";
import styles from "./cardtodaypage.scss";
interface IPropsCard {
  id: number;
  name: string;
  mytype: string;
}
export function CardTodayPage({ id, name, mytype }: IPropsCard): JSX.Element {
  const [isModalOpened, SetIsModalOpened] = useState(false);

  return (
    <>
      <div className={styles.animalcard}>
        <h2
          className={styles.animalname}
          onClick={() => {
            SetIsModalOpened(true);
          }}
        >
          {name}
        </h2>
        <h2>{mytype}</h2>
      </div>
      {isModalOpened && (
        <AnimalModal id={id} onClose={() => SetIsModalOpened(false)} />
      )}
    </>
  );
}
