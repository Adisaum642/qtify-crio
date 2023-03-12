import React from 'react'
import styles from "../Searchbar/Search.module.css"
import Searchicon from "../../assest/Searchicon.png"
function Search() {
  return (<div className={styles.wrapper}>

    <input type="text" placeholder='Search a song of your choice' className={styles.search} />
    <button className={styles.button}><img src={Searchicon} alt="Searchicon" /></button>
  </div>)
}

export default Search