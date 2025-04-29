import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SearchContainer from '../components/SearchContainer'
import MostTrendyProjects from '../components/MostTrendyProjects'
import AllServices from '../components/AllServices'
import AboutUs from '../components/AboutUs'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchContainer/>
      <MostTrendyProjects/>
      <AllServices/>
      <AboutUs/>
      <WhyUs/>
    </div>
  )
}

export default Home
