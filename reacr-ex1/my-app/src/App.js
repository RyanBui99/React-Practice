import React from 'react'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ToDoItems from './components/ToDoItems'
import './App.css'

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


let App = () => 
    <div className="app">
      <NavBar />

      <MainContent />

      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />

      <Footer />
    </div>
  
 

export default App;
