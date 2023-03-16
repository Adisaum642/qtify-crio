import React from "react";
import styles from "../Hero/Hero.module.css"
import HeroHead from "../../assest/heroimg.png"


function Hero() {

  return (
    <div className={styles.hero}>
      <div className={styles.para}>
        <p>100 Thousand Songs, ad-free  </p>
        <p>Over thousands podcast episodes </p></div>
      <div className={styles.img}><img src={HeroHead} alt="Searchicon" /></div>
    </div>
  )

}


export default Hero
