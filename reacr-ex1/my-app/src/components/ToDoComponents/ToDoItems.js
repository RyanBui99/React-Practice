import React from 'react'

let ToDoItems = (props) => {
 
       return (
			
        <div className='todo-items'>
            <input type='checkbox'/>
            <p>{props.description.text}</p>
        </div>
        )
    
}


/*let ToDoItems = () => {
    return(
        <div class='items'>
	<section class='todo'>
		<ul class='todo-list'>
			<li class='done'>
				<input type='checkbox' id='find' checked disabled/> 
				<label class='toggle' for='find'></label>
				Find an idea.
			</li>
			<li>
				<input type='checkbox' id='build'/> 
				<label class='toggle' for='build'></label>
				Build it!
			</li>
			<li>
				<input type='checkbox' id='ship'/> 
				<label class='toggle' for='ship'></label>
				Ship it...<br />
				with a line break!
			</li>
		</ul>
	</section>
</div>
    )
}*/

export default ToDoItems