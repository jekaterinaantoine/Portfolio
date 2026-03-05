import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="header__content">

        {/* Hamburger — left on mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger__line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger__line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger__line ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Name — middle on mobile */}
        <div className="header__logo--container">
          <div className="header__logo--img--cont">
            <img
              src="/images/logo_img.PNG"
              alt="Jekaterina Antoine Logo Image"
              className="header__logo--img"
            />
          </div>
          <span className="header__logo--sub">Jekaterina Antoine</span>
        </div>

        {/* Nav dropdown */}
        <div className={`header__main ${isOpen ? 'nav--open' : ''}`}>
          <nav>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header;