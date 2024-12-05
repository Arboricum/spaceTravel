import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

export default function Navbar() {
  const location = useLocation();
  const [hamb, setHamb] = useState(false);
  return (
    <>
      <nav className='nav'>
        <Link 
          to={'/'}
          className={location.pathname === '/'? 'selected' : ''}
        >
          <span>00</span>
          HOME
        </Link>

        <Link 
          to={'/destination'}
          className={location.pathname === '/destination'? 'selected' : ''}
        >
          <span>01</span>
          DESTINATION
        </Link>

        <Link 
          to={'/crew'}
          className={location.pathname === '/crew'? 'selected' : ''}
        >
          <span>02</span>
          CREW
        </Link>

        <Link 
          to={'/technology'}
          className={location.pathname === '/technology'? 'selected' : ''}
        >
          <span>03</span>
          TECHNOLOGY
        </Link>
      </nav>
      {/* HAMBURGER-MENU ------------------------------------------------------*/}
      <div className='nav-hamb-container'>
        {!hamb? 
          <img src='/assets/shared/icon-hamburger.svg' alt='hamburger menu' onClick={() => setHamb(true)}/>
          : 
          <img src='/assets/shared/icon-close.svg' alt='close hamburger-menu' onClick={() => setHamb(false)}/>
        }
        {hamb && (
          <nav className='nav-hamb'>
            
            <Link 
              to={'/'}
              className={location.pathname === '/'? 'selected' : ''}
            >
              <span>00</span>
              HOME
            </Link>

            <Link 
              to={'/destination'}
              className={location.pathname === '/destination'? 'selected' : ''}
            >
              <span>01</span>
              DESTINATION
            </Link>

            <Link 
              to={'/crew'}
              className={location.pathname === '/crew'? 'selected' : ''}
            >
              <span>02</span>
              CREW
            </Link>

            <Link 
              to={'/technology'}
              className={location.pathname === '/technology'? 'selected' : ''}
            >
              <span>03</span>
              TECHNOLOGY
            </Link>
          </nav>
        )
      }
      </div>
    </>
  )
}
