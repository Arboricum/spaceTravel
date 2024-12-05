import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='header'>
      <section className='header-logo-section'>
        <img src='/assets/shared/logo.svg' alt='logo' />
      </section>
      <Navbar />
    </header>
  )
}
