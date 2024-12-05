import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import PageContent from '../components/PageContent'
import './PagesGlobal.css'
import './Destination.css'

export default function Destination() {
    const { data, isPending, error } = useFetch('/data.json')
    const [pageData, setPageData] = useState('')
    const [currentPage, setCurrentPage] = useState('Moon')
    useEffect(() => {
      if (data) {
        setPageData(data.destinations)
      }
    }, [data])
    /* const handleSelectionCSS = (e) => {
      const selectedElement = document.querySelector('.dest-nav-li-selected');
      selectedElement.classList.toggle('dest-nav-li-selected');
      e.target.classList.toggle('dest-nav-li-selected');
    } */
      const changePage = (page) => {
        setCurrentPage(page)
       }
  return (
    <main className='main-destination'>
      <h1><span>01</span> PICK YOUR DESTINATION</h1>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p></p>}
      {pageData && (
      <section className='pageContent-container pageContent-container-dest'>
        {/* <nav className='nav-dest'>
          <ul>
            {pageData.map((data, index) => {
              return (
              <li 
                key={`${index}${data.name}`}
                onClick={(e) => {
                  setCurrentPage(data.name)
                  handleSelectionCSS(e)
                }}
                className={index === 0? 'dest-nav-li dest-nav-li-selected' : 'dest-nav-li'}
              >{data.name.toUpperCase()}</li>
              )
            })}
          </ul>
        </nav> */}
        <PageContent dataSource='destinations' pageData={pageData} currentPage={currentPage} changePage={changePage}/>
      </section>
      )}
    </main>
  )
}
