import { Link } from "react-router-dom"
import { FaLeaf } from "react-icons/fa"

export default function Navbar() {
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
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '9999px',
          padding: '0.5rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <FaLeaf color="black" size={24} />
        </div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Work</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/playground" style={{ color: 'white', textDecoration: 'none' }}>Playground</Link>
        <Link to="/resource" style={{ color: 'white', textDecoration: 'none' }}>Resource</Link>
      </div>
      <div>
        <a href="mailto:webworrier@gmail.com" style={{
          backgroundColor: 'white',
          color: 'black',
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
      </div>
    </nav>
  )
}
