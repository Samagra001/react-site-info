import React from 'react';
import img from "../images/logo192.png"

export default function Navbar(){
  return (
    <nav>
      <img className='nav--icon' src= {img} alt="react logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}