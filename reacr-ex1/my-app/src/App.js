import React, { Component } from 'react'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ToDoItems from './components/ToDoComponents/ToDoItems'
import toDoItemsId from './components/ToDoComponents/toDoItemId'
import ContactCard from './components/ContatctCard'
import Joke from './components/JokeComponents/Joke'
import jokeId from './components/JokeComponents/jokeId'
import Product from './components/ProductComponents/Product'
import productId from './components/ProductComponents/productIds'
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

exercise 6:
a) render a <Product /> component
b) Map the props

HINTS:
import the libraries you neeed first
Use one of the libraries to render some JSX to the page*/


export default class App extends Component {
  render() {

    // Joke Component here 
    const jokeIdMap = jokeId.map(i => <Joke 
      key={i.id}
      jokeQuestion={i.jokeQuestion}
      punchLine={i.punchLine}
    />)
    
    
    // Product component here
    const productIdMap = productId.map(i => <Product
      key={i.id} 
      product={i}
    />)


    //To do items component here
    const toDoIdMap = toDoItemsId.map(i => <ToDoItems
      key={i.id}  
      description={i}
    />)

    return (
      <div className="app">
      <NavBar />

      <MainContent />

      <div className="list">
        {toDoIdMap}
      </div>

    
      {<ContactCard app = {{
          imgUrl: "https://www.varldensflaggor.se/bilder/flaggor/sveriges-flagga.png",
          name: "Sweden"
        }}
      
      />}

      <br></br>
      <Footer />

      <br></br>

      {jokeIdMap}
      <br></br>
      <br></br>
      <br></br>

      {productIdMap}


  </div>
    )
  }
}

/*let App = () => 

    <div className="app">
      <NavBar />

      <MainContent />

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
      <br></br>
      <br></br>
      <br></br>

      {productIdMap}


  </div>
  
 

export default App;*/
