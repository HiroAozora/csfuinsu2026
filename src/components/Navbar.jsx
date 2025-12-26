import React, { useState, useEffect } from "react";
import logo from "../assets/logocsf.png"; // Changed to logocsf.png
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const NavLink = ({ to, children }) => {
    const isHashLink = to.startsWith("/#");

    if (isHashLink) {
      const targetId = to.substring(2);
      if (location.pathname === "/") {
        const handleClick = (e) => {
          e.preventDefault();
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
          closeMenu();
        };
        return <a href={to} onClick={handleClick}>{children}</a>;
      }
      return (
        <Link to={`/?hash=${targetId}`} onClick={closeMenu}>
          {children}
        </Link>
      );
    }

    return (
      <Link to={to} onClick={closeMenu}>
        {children}
      </Link>
    );
  };

  return (
    <nav className={`navbar-container ${visible ? '' : 'navbar-hidden'}`}>
      <div className="csf-window navbar-window">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="CSF Official Logo" className="navbar-logo" />
        </Link>
        
        {/* Burger Menu Button - gets positioned by flexbox in CSS */}
        <div className="burger-menu" onClick={handleMenuToggle}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/#lomba">LOMBA</NavLink>
          <NavLink to="/#sponsor">SPONSOR</NavLink>
        </div>
      </div>

      {/* Mobile Menu - now outside the window */}
      <div className={`mobile-nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/#lomba">LOMBA</NavLink>
        <NavLink to="/#sponsor">SPONSOR</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
