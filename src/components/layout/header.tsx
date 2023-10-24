import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import Logo from "../../icons/logo";
import HomeIcon from "../../icons/Home";
import CloseMenu from "../../assets/close.png";
import menuIcon from "../../assets/menu.png";
// import { CSSTransition } from "react-transition-group";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  // const [isNavVisible, setNavVisibility] = useState(false);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 700px)");
  //   handleMediaQueryChange(mediaQuery)
  //   mediaQuery.addEventListener('click',handleMediaQueryChange);
  //   handleMediaQueryChange(mediaQuery);

  //   return () => {
  //     mediaQuery.removeEventListener('click',handleMediaQueryChange);
  //   };
  // }, []);

  // const handleMediaQueryChange = mediaQuery => {
  //   if (mediaQuery.matches) {
  //     setIsSmallScreen(true);
  //   } else {
  //     setIsSmallScreen(false);
  //   }
  // };

  // const toggleNav = () => {
  //   setNavVisibility(!isNavVisible);
  // };

  return (
    <header className="header-container">
      <Link to={"/"}>
        <Logo />
      </Link>

      {/* <div className="menu-links"> */}
      {/* <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      > */}
      <div className="navigation">
        <div
          onClick={() => setIsMenuShown(!isMenuShown)}
          className="nav-mobile"
        >
          {isMenuShown ? (
            <div className="nav-img-close">
              <img src={CloseMenu} alt="Logo" style={{ width: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-img">
              <img src={menuIcon} alt="Logo" style={{ width: "3rem" }} />
            </div>
          )}
        </div>
        <div className={!isMenuShown ? "nav-container" : "nav-links"}>
          <Link className="nav-link text-3xl font-bold underline" to={"/"}>
            <HomeIcon color="#fff" />
          </Link>
          {/* <Link className="nav-link" to={"/about"}>
            About
          </Link> */}
          <Link className="nav-link" to={"/gallery"}>
            Gallery
          </Link>
          <Link className="nav-link" to={"/contact"}>
            Contact
          </Link>
          <Link className="nav-link" to={"/resume"}></Link>
        </div>
        {/* </CSSTransition> */}
      </div>
      {/* <button onClick={() => setIsMenuShown(!isMenuShown)} className="hamBurger"> */}

      {/* </button> */}
      {/* <Link className="text-3xl font-bold underline" to={"/resume"}>Resume</Link><Link to={"/about"}>About</Link>
        <Link to={"/gallery"}>Gallery</Link><Link to={"/contact"}>Contact</Link> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
