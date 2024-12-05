import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import PageContent from '../components/PageContent'
import './PagesGlobal.css'
import './Technology.css'

export default function Technology() {
    const { data, isPending, error } = useFetch('/data.json')
    const [pageData, setPageData] = useState('')
    const [currentPage, setCurrentPage] = useState('Launch vehicle')
    /* const handleSelectionCSS = (e) => {
      const selectedElement = document.querySelector('.tech-nav-li-selected');
      selectedElement.classList.toggle('tech-nav-li-selected');
      e.target.classList.toggle('tech-nav-li-selected');
    } */
      const changePage = (page) => {
        setCurrentPage(page)
       }
    useEffect(() => {
      if (data) {
        setPageData(data.technology)
      }
    }, [data])
  return (
    <main className='main-tech'>
      <h1><span>03</span> SPACE LAUNCH 101</h1>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p></p>}
      {pageData && (
      <section className='pageContent-container-tech'>
       {/*  <nav className='nav-tech'>
          <ul>
            {pageData.map((data, index) => {
              return (
              <li 
                key={`${index}${data.name}`}
                onClick={(e) => {
                  setCurrentPage(data.name)
                  handleSelectionCSS(e)
                }}
                className={index === 0? 'tech-nav-li tech-nav-li-selected' : 'tech-nav-li'}
              >{index + 1}</li>
              )
            })}
          </ul>
        </nav> */}
        <PageContent dataSource='technology' pageData={pageData} currentPage={currentPage} changePage={changePage}/>
      </section>
      )}
    </main>
  )
}
