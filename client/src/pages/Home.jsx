import React from 'react'
import Hero from '../components/Hero'
import Caursel from '../components/Caursel'
import Invest from '../components/Invest'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div style={{marginTop:"105px"}}>
      <Hero/>
      <Caursel/>
      <Invest/>
      <Contact/>
    </div>
  )
}
