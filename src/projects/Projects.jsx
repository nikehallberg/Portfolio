import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import github from '../assets/github.png'

const pages = [
  { id: '1', title: 'Page 1' },
  { id: '2', title: 'Page 2' },
  { id: '3', title: 'Page 3' },
  { id: '4', title: 'Page 4' },
]

const Projects = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    const target = carousel.children[activeIndex]
    if (!target) return
    carousel.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  }, [activeIndex])

  const scrollBy = (direction) => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + direction
      if (nextIndex < 0) return pages.length - 1
      if (nextIndex >= pages.length) return 0
      return nextIndex
    })
  }

  return (
    <div className='projects-page'>
      <h2>Projects</h2>
      <p>Projects.</p>
      <div className='projects-carousel-wrapper'>
        <button
          className='carousel-arrow left'
          type='button'
          onClick={() => scrollBy(-1)}
          aria-label='Previous project'
        >
          ◄
        </button>
        <ul ref={carouselRef} className='projects-carousel'>
          {pages.map((page) => (
            <li key={page.id} data-acc-name={page.id}>
              <h2>{page.title}</h2>
            </li>
          ))}
        </ul>
        <button
          className='carousel-arrow right'
          type='button'
          onClick={() => scrollBy(1)}
          aria-label='Next project'
        >
          ►
        </button>
      </div>
      <p>Or just check out my GitHub</p>
      <div className='github-link'>
        <a href='https://github.com/nikehallberg?tab=repositories' target='_blank' rel='noreferrer'>
          <img src={github} alt='GitHub repository link' />
        </a>
      </div>
    </div>
  )
}

export default Projects
