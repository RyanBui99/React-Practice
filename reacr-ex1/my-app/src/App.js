import React from 'react'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ToDoItems from './components/ToDoItems'
import ContactCard from './components/ContatctCard'
import Joke from './components/Joke'
import jokeId from './components/jokeId'
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

exercise 5:
a) render 5 <Joke /> components
b) each joke should recieve a "Question" prop and a 
"punchline" prop

HINTS:
import the libraries you neeed first
Use one of the libraries to render some JSX to the page*/

const jokeIdMap = jokeId.map(i => <Joke 
  key={i.id}
  jokeQuestion={i.jokeQuestion}
  punchLine={i.punchLine}
/>)

let App = () => 

    <div className="app">
      <NavBar />

      <MainContent />

      <ToDoItems />
      <ToDoItems />
      <ToDoItems />
      <ToDoItems />

    
      <ContactCard app = {{
          imgUrl: "https://www.varldensflaggor.se/bilder/flaggor/sveriges-flagga.png",
          name: "Sweden"
        }}
      
      />

      <br></br>
      <Footer />

      <br></br>

      {jokeIdMap}
      


  </div>
  
 

export default App;
