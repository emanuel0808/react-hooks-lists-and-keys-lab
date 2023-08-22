import React from 'react';

const NavBar = () => {
  const links = ['home', 'about', 'projects']; // Replace with your actual link names

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  );
};

export default NavBar;

