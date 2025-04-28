import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SearchContainer from '../components/SearchContainer'
import MostTrendyProjects from '../components/MostTrendyProjects'
import AllServices from '../components/AllServices'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchContainer/>
      <MostTrendyProjects/>
      {/* <AllServices/> */}
    </div>
  )
}

export default Home
