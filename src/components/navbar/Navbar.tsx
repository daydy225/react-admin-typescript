import React, { useEffect } from 'react'
import './navbar.css'
import { useRef } from 'react'

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // add scrool event listener to navbar
    window.addEventListener('scroll', () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.classList.add('sticky')
        } else {
          navbarRef.current.classList.remove('sticky')
        }
      }
    })

    return () => {
      // remove scrool event listener from navbar
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div
      className="navbar"
      ref={navbarRef}
    >
      <div className="logo">
        <img
          src="logo.svg"
          alt=""
        />
        <span>reactadmin</span>
      </div>
      <div className="icons">
        <img
          src="/search.svg"
          alt=""
          className="icon"
        />
        <img
          src="/app.svg"
          alt=""
          className="icon"
        />
        <img
          src="/expand.svg"
          alt=""
          className="icon"
        />
        <div className="notification">
          <img
            src="/notifications.svg"
            alt=""
          />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <span>John</span>
        </div>
        <img
          src="/settings.svg"
          alt=""
          className="icon"
        />
      </div>
    </div>
  )
}

export default Navbar
