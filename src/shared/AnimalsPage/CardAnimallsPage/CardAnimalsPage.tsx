import React, { useState } from "react";
import { AnimalModal } from "../../AnimalModal";
import styles from "./cardanimalspage.scss";
interface IPropsCard {
  id: number;
  name: string;
  specname: string;
  specnameparent: string;
}
export function CardAnimalsPage({
  id,
  name,
  specname,
  specnameparent,
}: IPropsCard): JSX.Element {
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
        <p>
          {specnameparent}- {specname}
        </p>
      </div>
      {isModalOpened && (
        <AnimalModal id={id} onClose={() => SetIsModalOpened(false)} />
      )}
    </>
  );
}
