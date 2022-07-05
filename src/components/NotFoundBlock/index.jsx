import React from "react";

import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего не найдено!
      </h1>
      <h2 className={styles.second}>Данная страница отсутствует</h2>
    </div>
  );
}

export default NotFoundBlock;
