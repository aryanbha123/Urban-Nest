import React from 'react'
import Hero from '../components/Hero'
import Caursel from '../components/Caursel'
import Invest from '../components/Invest'
import Contact from '../components/Contact'
import About from '../components/About'
import Service from '../components/Service'
import Stories from '../components/Stories'
import Dehradun from '../components/Dehradun'
export default function Home() {
  return (
    <div style={{marginTop:"105px"}}>
      <Hero/>
      <Caursel/>
      <Invest/>
      <Stories/>
      <Dehradun/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  )
}
