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
b) each joke should recieve a 'Question' prop and a 
'punchline' prop

exercise 6:
a) render a <Product /> component
b) Map the props

HINTS:
import the libraries you neeed first
Use one of the libraries to render some JSX to the page*/


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: toDoItemsId,
      count: 0
    }

  
  }
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
    const toDoIdMap = this.state.todos.map(i => <ToDoItems
      key={i.id}  
      description={i}
    />)

    let handleClick = () => {
      this.setState(prevSate => {
         return {
           count: prevSate.count + 1
         }
      })

    }

    return (
      <div className='app'>
      <NavBar />

      <MainContent />

      <main className='todo-list'>
        {toDoIdMap}
        </main>

    
      {<ContactCard app = {{
          imgUrl: 'data:image/jpeg;base64,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',
          name: 'Sweden'
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

      <br></br>
      <br></br>
      <br></br>


        <h1>{this.state.count}</h1>
        <button onClick={handleClick.bind(this)}>count</button>

  </div>
    )
  }
}

/*let App = () => 

    <div className='app'>
      <NavBar />

      <MainContent />

      <ToDoItems />

    
      <ContactCard app = {{
          imgUrl: 'https://www.varldensflaggor.se/bilder/flaggor/sveriges-flagga.png',
          name: 'Sweden'
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
