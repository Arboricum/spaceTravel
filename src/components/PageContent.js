import React from 'react'
import '../pages/PagesGlobal.css'
import '../pages/Crew.css'
import '../pages/Destination.css'
import '../pages/Technology.css'

export default function PageContent({dataSource, pageData, currentPage, changePage}) {
  const currentPageData = pageData.filter((data) => data.name === currentPage)[0]
  return (
    <>
      <section 
        className={
          dataSource === 'destinations'? 
          'pageContent-img pageContent-img-left':
          dataSource === 'crew'? 
          'pageContent-img pageContent-img-right pageContent-img-right-crew':
          'pageContent-img pageContent-img-right pageContent-img-right-tech'
        }
      >
        <img 
          src={dataSource === 'technology'? 
            currentPageData.images.portrait.slice(1) 
            : 
            currentPageData.images.png.slice(1)} 
          alt={currentPageData.name}
        />
      </section>
      <section 
        className={
          dataSource === 'destinations'? 
          'pageContentTxt-right':
          'pageContentTxt-left'
        }
      >
        <PageContentNav 
          pageData={pageData} 
          changePage={changePage} 
          dataSource={dataSource}
        />
        <div>
        {dataSource === 'crew' && (
          <p className='role'>{currentPageData.role.toUpperCase()}</p>
        )}
        {dataSource === 'technology' && (
          <p className='terminology'>THE TERMINOLOGY...</p>
        )}
        {/* name */}
        <h2 
          className={
            dataSource === 'destinations'? 
            'pageContent-title-dest':
            'pageContent-title'
          }
        >
          {currentPageData.name.toUpperCase()}
        </h2>
        {(dataSource === 'destinations' || dataSource === 'technology') && (
          <p className='description'>{currentPageData.description}</p>
        )}
        {dataSource === 'crew' && (
          <p className='bio'>{currentPageData.bio}</p>
        )}
        {dataSource === 'destinations' && (
          <>
          <hr style={{margin: '24px 0'}}/>
          <section className='pageDetails'>
            <div>
              <p className='details-label'>AVG. DISTANCE</p>
              <p className='details'>{currentPageData.distance.toUpperCase()}</p>
            </div>
            <div>
              <p className='details-label'>EST. TRAVEL TIME</p>
              <p className='details'>{currentPageData.travel.toUpperCase()}</p>
            </div>
          </section>
          </>
        )}
        </div>
      </section>
    </>
  )
}

function PageContentNav({pageData, changePage, dataSource}) {
  console.log('nav')
  const selectionClasses = () => {
    let selectedClass;
    let notSelectedClass;
    let navClass;
    switch (dataSource) {
      case 'destinations':
        selectedClass = 'dest-nav-li-selected'
        notSelectedClass = 'dest-nav-li'
        navClass = 'dest-nav'
        break;
      case 'crew':
        selectedClass = 'crew-nav-li-selected'
        notSelectedClass = 'crew-nav-li'
        navClass = 'nav-crew'
        break;
      case 'technology':
        selectedClass = 'tech-nav-li-selected'
        notSelectedClass = 'tech-nav-li'
        navClass = 'nav-tech'
        break;
      default:
        return;
    }
    return {selectedClass, notSelectedClass, navClass}
  }
  const {selectedClass, notSelectedClass, navClass} = selectionClasses()
  const handleSelectionCSS = (e) => {
    const selectedElement = document.querySelector(`.${selectedClass}`);
    selectedElement.classList.toggle(selectedClass);
    e.target.classList.toggle(selectedClass);
  }
  return (
  <nav className={navClass}>
    <ul>
      {pageData.map((data, index) => {
        return (
        <li 
          key={`${index}${data.name}`}
          onClick={(e) => {
            changePage(data.name)
            handleSelectionCSS(e)
          }}
          className={index === 0? `${selectedClass} ${notSelectedClass}` : `${notSelectedClass}`}
        >
          {dataSource === 'destinations'? 
          data.name.toUpperCase():
          dataSource === 'technology'?
          index + 1:
          ''
          }
        </li>
        )
      })}
    </ul>
  </nav>
  )
}
