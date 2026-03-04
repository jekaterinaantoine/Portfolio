const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
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
        <div className="header__main">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;