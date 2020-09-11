//import React from 'react'
//import NavBar from './components/NavBar'
//import Footer from './components/Footer'

/*Fill in the boilerplate React code required to render an
unorded list  (<ul>) to the page. 
the list should contain 3 list items (<li>)

Continue:
a) Your name with <h1>
b) Information <p>
c) list

HINTS:
import the libraries you neeed first
Use one of the libraries to render some JSX to the page*/

import React, { Component } from 'react'

export default class MainContent extends Component {
  constructor() {
    super()

    this.state = {
      isLoggedIN: true

    }
  }

  render() {
    let display

    if (this.state.isLoggedIN) {
      display = 'Logged in!'
    } else {
      display = 'Logged Out!!!!'
    }

    return (
      <div>
        <h1 style={{color: '#70f8ba'}}>{display}</h1>
      </div>
    )
  }
}


/*let MainContent = () => {
  const surName = 'Bui'
  return (
    <div>
      <br></br>

      {/*For javascript use singe curly bracket and for css use 2*//*
  <h1 style={{color: "#16a085"}}>Ryan Hung {surName}</h1>
      <br></br>
      
    </div>
  )
}

export default MainContent*/
