import React from 'react'
import styles from './Navbar.module.css'
import Logo from "../Logo/logo"
import Button from '../Button/Button'
import Search from '../Searchbar/Search'


function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo/>
      <Search/>
      
   <Button>Give Feedback</Button>
   
    </div>
  

 
    )
}

export default Navbar


