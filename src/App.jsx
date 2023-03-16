import './App.css'
import { fetchTopAlbums } from './api/api'
import Navbar from "./components/Navbar/Navbar"
import Hero from "../src/components/Hero/Hero"
import Section from "../src/components/Section/Section"
import Cards from '../src/components/Cards/Cards'

export default function App() {
  return (
    <div id='app'>
      <Navbar />
      <Hero/> 
      <Section title = "Top Albums"  dataStore ={fetchTopAlbums}/>
      <Cards/>
    </div>
  )
}
