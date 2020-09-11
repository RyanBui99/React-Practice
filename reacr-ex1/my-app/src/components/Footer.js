import React, { Component } from 'react'

export default class Footer extends Component {
    constructor() {
        super()

        this.state = {
            footer: "my footer"
        }
    }

    render() {        
        return (
            <footer>
                <h3>This is: {this.state.footer} </h3>
            </footer>
        )
    }
}


/*function Footer() {
let date = new Date()

    return (
        <footer>
            <h3>This is: {date.getDate()} </h3>
        </footer>
    )
}


export default Footer*/