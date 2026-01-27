import React from 'react'
import Services from '../components/Services'
import About from '../components/About'

export default function AboutPage({ onSelect }) {
  return (
    <>
      <About />
      <Services onSelect={onSelect} />
    </>
  )
}