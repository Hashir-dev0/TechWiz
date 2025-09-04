import { Link } from "react-router-dom"
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      borderRadius: '9999px',
      maxWidth: '48rem',
      margin: '1rem auto',
      position: 'relative',
      zIndex: 10000,
    }} data-aos="fade-down">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '9999px',
          padding: '0.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <FaLeaf color="black" size={24} />
        </div>
        <div className="nav-links">
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/gallery" >Gallery</Link>
          <Link to="/Contact" >Contact</Link>
        </div>
      </div>
      <div className="nav-right">
        <a href="mailto:webworrier@gmail.com" style={{
          backgroundColor: 'white',
          color: 'black',
          marginRight: '1.5rem',
          borderRadius: '9999px',
          padding: '0.5rem 1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          textDecoration: 'none',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e5e7eb'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
        >
          webworrier@gmail.com
        </a>
        <button className="hamburger" onClick={toggleMenu} style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          marginLeft: '1rem'
        }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
          zIndex: 9999,
          height: 'auto',
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', touchAction: 'manipulation' }} onClick={toggleMenu}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', touchAction: 'manipulation' }} onClick={toggleMenu}>About</Link>
          <Link to="/gallery" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', touchAction: 'manipulation' }} onClick={toggleMenu}>Gallery</Link>
          <Link to="/Contact" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', touchAction: 'manipulation' }} onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
