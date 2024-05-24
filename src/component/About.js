import React from 'react'
import HeroSection from './HeroSection'

function About() {
  const data={
    name:"My Ecommerce",
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About
