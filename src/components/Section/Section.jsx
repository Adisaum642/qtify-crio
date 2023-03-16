import React, { useEffect, useState } from "react";
import styles from "./Section.module.css"

function Card({ title, dataStore }) {
const[card,setCard]= useState()

useEffect(() => {
  dataStore().then((data)=>{
    setCard(data);
  })
},[]);



  return (
<div>
    <div className={styles.titleBar}>
      <div><p>{title}</p></div>
      <div><p>Show All</p></div>
</div>

  <div>
    {card.map((store)=>()
      <cards />
    ))}
  </div>
</div>
  )

}

export default Card;