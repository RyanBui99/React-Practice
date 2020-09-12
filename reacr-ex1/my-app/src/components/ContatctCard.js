import React, { Component } from 'react'

let handleClick = () => console.log("clicky")


export default class ContatctCard extends Component {
    render() {
        return (
            <div>
                <a href = {this.props.app.imgUrl} onMouseOver={handleClick}>
                    <img src={this.props.app.imgUrl} alt="sweden!!"/>
                    <h3>{this.props.app.name}</h3>
                </a>
            </div>
        )
    }
}


/*let ContactCard = (props) => {
    return(
        <div className="contact-Card">
            <img src={props.app.imgUrl} alt="sweden"/>
            <h3>{props.app.name}</h3>

        </div>
    )
}

export default ContactCard*/