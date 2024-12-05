import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className='main-home'>
      <section className='home-text-section'>
        <h2 className='home-pretitle'>SO YOU WANT TO TRAVEL TO</h2>
        <h1 className='home-title'>SPACE</h1>
        <p className='home-p'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p>
      </section>
      <aside className='home-btn-section'>
        <button type='button' className='home-btn' onClick={() => navigate('/destination')}>EXPLORE</button>
      </aside>
    </main>
  )
}
