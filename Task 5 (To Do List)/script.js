let taskInput=document.getElementById("new-task");//Add a new task.
let addButton=document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks


//New task list item
let createNewTaskElement=function(taskString){

	let listItem=document.createElement("li");

	//input (checkbox)
	let checkBox=document.createElement("input");//checkbx
	//label
	let label=document.createElement("label");//label
	//input (text)
	let editInput=document.createElement("input");//text
	//button.edit
	let editButton=document.createElement("button");//edit button

	//button.delete
	let deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	checkBox.type="checkbox";
	editInput.type="text";
    
	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

let addTask=function(){
	console.log("Add Task...");
	//Create a new list item
	let listItem=createNewTaskElement(taskInput.value);
	if (taskInput.value == "") {
		alert ("You must write something");
		//addButton.disabled = true;
	}

	else {
		//addButton.disabled = false;
	    incompleteTaskHolder.appendChild(listItem);
	    bindTaskEvents(listItem, taskIncomplete);
	}
}

//Edit an existing task.

let editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");

let listItem=this.parentNode;

let editInput=listItem.querySelector('input[type=text]');
let label=listItem.querySelector("label");
let containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
	if(containsClass) {

		label.innerText=editInput.value;
	}
	else {

		editInput.value=label.innerText;
	}
		//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}

//Delete task.
let deleteTask=function(){
	console.log("Delete Task...");

	let listItem=this.parentNode;
	let ul=listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);
}

let taskIncomplete=function(){
    console.log("Incomplete Task...");
		
	let listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncomplete);
}

addButton.onclick=addTask;
addButton.addEventListener("click",addTask);

let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	let checkBox=taskListItem.querySelector("input[type=checkbox]");
	let editButton=taskListItem.querySelector("button.edit");
	let deleteButton=taskListItem.querySelector("button.delete");

			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}

for (let i=0; i<incompleteTaskHolder.length;i++){

	bindTaskEvents(incompleteTaskHolder[i],taskIncomplete);

}
