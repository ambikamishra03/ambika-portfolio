import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <motion.div
          className="navbar-brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <span className="brand-icon">AM</span>
            <span className="brand-text">Ambika</span>
          </Link>
        </motion.div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.ul
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://github.com/ambikamishra03" target="_blank" rel="noopener noreferrer" className="nav-button">
              GitHub
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  )
}
