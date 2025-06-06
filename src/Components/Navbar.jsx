import React, { useEffect, useState } from "react";
import navData from "../data/navigation.json";
import "../styles/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("#Hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect scroll for navbar background change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check which section is currently in viewport to update active link
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navData.menu.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(item.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">{navData.logo}</div>
        <ul className="menu">
          {navData.menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={active === item.link ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
