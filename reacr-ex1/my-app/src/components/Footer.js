import React from 'react'

function Footer() {
let date = new Date()

    return (
        <footer>
            <h3>This is: {date.getDate()} </h3>
        </footer>
    )
}


export default Footer