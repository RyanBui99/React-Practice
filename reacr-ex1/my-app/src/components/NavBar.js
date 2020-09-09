import React from 'react'


/*Fill in the boilerplate React code required to render an
unorded list  (<ul>) to the page. 
the list should contain 3 list items (<li>)

Exercise 2:
a) Your name with <h1>
b) Information <p>
c) list

Exercise 3:
a) Make a main content component
b) Make a navigation component
c) Make a footer component

HINTS:
import the libraries you neeed first
Use one of the libraries to render some JSX to the page*/


function NavBar() {
  return (
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a className="active" href="#projects">Projects</a>
        <a className="active" href="#aboutMe">About me</a>
        <a className="active" href="#contact">Contact</a>
    </div>
  )
}

export default NavBar
