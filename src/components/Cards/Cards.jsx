import React from "react";
import styles from "./Cards.module.css"



function Cards({ album }) {

  return (
    <div className={styles.card}>
      <div>
        <img src={album.image} alt={album.title} className={styles.card_image} />
        <div className={styles.card_body}>
          <span>{follows} Follows</span>
        </div>
      </div>

      <div className={card_footer}>
        <p>{album?.title}</p>
      </div>
    </div>
  );


}


export default Cards;