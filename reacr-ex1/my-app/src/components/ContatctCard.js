import React from 'react'

let ContactCard = (props) => {
    return(
        <div className="contact-Card">
            <img src={props.app.imgUrl} alt="sweden"/>
            <h3>{props.app.name}</h3>

        </div>
    )
}

export default ContactCard