// InnerHTML is going to overwite any DOM elements including event listeners. It is also a security risk. 



document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  // const app = new TaskLister();

	// A user should be able to create a new list.
		// Event Listener added to the form, submit event
		//Submit a form
			// Take in list title
			// Create a list in the DOM

const listForm = document.getElementById('create-list-form')
listForm.addEventListener('submit', function(event) {
	event.preventDefault();

	let listsDiv = document.getElementById('lists')
	const listTitleInput = document.getElementById('new-list-title')
	const listTemplate = `
	<div id="${listTitleInput.value}">
	   <h2>${listTitleInput.value}
	      <button data-title="${listTitleInput.value}" class="delete-list">
	        X
	      </button>
	   </h2>
	   <ul>
	   </ul>
 	</div>
	`

	const taskFormTemplate = `
	<form id="create-task-form">
	    <label for="parent-list">Select List:</label>
	    <select id="parent-list">
	    </select>

	    <label for="new-task-description">Task description:</label>
	    <input required type="text" id="new-task-description" placeholder="description">

	    <label for="new-task-priority">Priority level:</label>
	    <input type="text" id="new-task-priority" placeholder="priority">
	    <input type="submit" value="Create New Task">
 	 </form>
  	`

  	// we're adding the first line
	if (listsDiv === null) {
		listsDiv = document.createElement('div')
		listsDiv.id = 'lists'
		appContent.innerHTML += taskFormTemplate
		appContent.append(listsDiv)
	}

	// adding the option for the list 
	const selectEl = document.getElementById('parent-list')
	const optionEl = document.createElement('option')
	optionEl.value = listTitleInput.value
	optionEl.innerText = listTitleInput.value
	selectEl.append(optionEl)
	listsDiv.innerHTML += listTemplate

	lists.push()
})

// A user should be able to add new tasks to a list.
	//Event listener added to the form, submit event
		//prevent default
		//get all the inputs (the dropdown, description, priority)
		//create the task
		//add the task to the parent list


	const taskForm = document.getElementById('create-task-form')
	// Event delegation: add the event listener to the parent and then
	// you do if statements inside to conditionally react to the event
	appContent.addEventListener('submit', function(event) {
		// a target tells you which element something interacted with
		const taskFormIsSubmitted = event.target.id === 'create-task-form'

		if (taskFormIsSubmitted) {

			event.preventDefault();

			const parentListEl = document.getElementById('parent-list')
			const newTaskDescription = document.getElementById('new-task-description')
			const newTaskPriority = document.getElementById('new-task-priority')
			// const listUl = document.querySelector(`#${parentListEl.value} ul`)
			// need to finish line below!!
			const list = document.getElementById('parentListEl.value')
			//const listUl = document.querySelector(`#new-list ul`)

			const taskTemplate = `
				 <li>
        			Task: ${newTaskDescription.value}
        			<button data-list-title="${parentListEl.value}" data-task-name="${newTaskDescription.value}" class="delete-task">
           				 X
        			</button>
       			 <br>
        		Priority: ${newTaskPriority.value}
      			</li>
			`
		}
	})
	console.log(taskForm)






// A list has many tasks.



// A user should be able to delete a list **and** its associated tasks.
	// Clicking a button on a task should remove the task
		//Event listener added to the button
			//Remove the task
	//Clicking buttuin on a list should remove the list and all the taks 
		//Event listener added to the button
			//RTemove the task
	appContent.addEventListener('click', function(event) {

		const taskDeleteIsClicked = event.target.className === 'delete-task'
		const listDeleteIsClicked = event.target.className === 'delete-list'
		if (taskDeleteIsClicked) {
			event.target.parentElement.remove()
		} else if (listDeleteIsClicked) {
			// event.target.parentElement.parentElement.remove()
			document.getElementById(event.target.dataset.title).remove()
		}
	})

});

// WHERE IS MY DATA?

	// View
		// HTML , DOM
	// Memory
		// instances, array, objects are the structure that can store things
	// Server
		// Database (use fetch requests to get something to/from the database server)
