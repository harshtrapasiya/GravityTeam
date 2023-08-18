import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className='hero_section'>
        <h1>Balancing Crypto Markets </h1>
        <p>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
        <Link className='get_btn'>Get in touch</Link>
      </div>

    </div>
  )
}
