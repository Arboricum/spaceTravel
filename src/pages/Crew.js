import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import PageContent from '../components/PageContent'
import './PagesGlobal.css'
import './Crew.css'

export default function Crew() {
    const { data, isPending, error } = useFetch('/data.json')
    const [pageData, setPageData] = useState('')
    const [currentPage, setCurrentPage] = useState('Douglas Hurley')
    useEffect(() => {
      if (data) {
        setPageData(data.crew)
      }
    }, [data])
    /* const handleSelectionCSS = (e) => {
      const selectedElement = document.querySelector('.crew-nav-li-selected');
      selectedElement.classList.toggle('crew-nav-li-selected');
      e.target.classList.toggle('crew-nav-li-selected');
    } */
   const changePage = (page) => {
    setCurrentPage(page)
   }
  return (
    <main className='main-crew'>
      <h1><span>02</span> MEET YOUR CREW</h1>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p></p>}
      {pageData && (
      <section className='pageContent-container pageContent-container-crew'>
        {/* <nav className='nav-crew'>
          <ul className='crew-nav-ul'>
            {pageData.map((data, index) => {
              return (
              <li 
                key={`${index}${data.name}`}
                onClick={(e) => {
                  setCurrentPage(data.name)
                  handleSelectionCSS(e)
                }}
                className={index === 0? 'crew-nav-li crew-nav-li-selected' : 'crew-nav-li'}
              ></li>
              )
            })}
          </ul>
        </nav> */}
        <PageContent dataSource='crew' pageData={pageData} currentPage={currentPage} changePage={changePage}/>
      </section>
      )}
    </main>
  )
}
