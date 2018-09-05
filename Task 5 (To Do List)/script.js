let taskInput=document.getElementById("new-task");//Add a new task.
let addButton=document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
let clearAll = document.getElementById('clear'); //delete all tasks


//New task list item
let createNewTaskElement=function(taskString){

	let listItem=document.createElement("li");
	//input (checkbox)
	let checkBox=document.createElement("input");//checkbox
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
    
    label.id = 'label';
    listItem.id = 'add';
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	//appending.
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
	let listItem = createNewTaskElement(taskInput.value);
	if (taskInput.value == "") {
		alert ("You must write something");
		//addButton.disabled = true;
	}
	else {
		//addButton.disabled = false;
	    incompleteTaskHolder.appendChild(listItem);
	    bindTaskEvents(listItem, taskIncomplete);
	}
	taskInput.value = "";
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
	let clearAll = taskListItem.querySelector('button.clear');

	    //Bind editTask to edit button.
	    editButton.onclick=showPrompt;
		//Bind deleteTask to delete button.
	    deleteButton.onclick=showDeletePrompt;
		//Bind taskCompleted to checkBoxEventHandler.
		checkBox.onchange=checkBoxEventHandler;
}

for (let i = 0; i < incompleteTaskHolder.length; i++) {

	bindTaskEvents(incompleteTaskHolder[i],taskIncomplete);

}

function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
}

function showPrompt(text) {
    Cover();
    let form = document.getElementById('prompt-form');
    let container = document.getElementById('prompt-form-container');
    let editInput=document.createElement("input");

    editInput.id = 'editInput';
    form.appendChild(editInput);

    let labelEdit = document.getElementById('label');

    editInput.value = labelEdit.innerText;
    
    form.elements.save.onclick = function() {
     
       labelEdit.innerText =  editInput.value;
       document.body.removeChild(document.getElementById('delete-div'));
       container.style.display = 'none';

    };

    form.elements.cancel.onclick = function() {

       document.body.removeChild(document.getElementById('delete-div'));
       container.style.display = 'none';

    }

    container.style.display = 'block';
} 

let showClearList = function() {

	clearAll.style.display = 'block';

}

let hideClearList = function() {

	clearAll.style.display = 'none';

}

addButton.onclick = showClearList;
addButton.addEventListener('click', showClearList);

/*function ClearCover() {
    let clearDiv = document.createElement('div');
    clearDiv.id = 'clear-div';
    document.body.appendChild(clearDiv);
}

function showClearPrompt(text) {
    ClearCover();
    let formClear = document.getElementById('clear-form');
    let containerClear = document.getElementById('clear-container');

    formClear.elements.clear.onclick = function() {
     
    };

    formClear.elements.unclear.onclick = function() {

       let nn = document.getElementById('clear-div');
       nn.style.display = 'none';
       containerClear.style.display = 'none';

    }

    containerClear.style.display = 'block';
}

clearAll.onclick = showClearPrompt;
clearAll.addEventListener('click', showClearPrompt*/
function Cover() {
    let deleteDiv = document.createElement('div');
    deleteDiv.id = 'delete-div';
    document.body.appendChild(deleteDiv);
}

function showDeletePrompt(text) {
    Cover();
    let formDelete = document.getElementById('delete-form');
    let containerDelete = document.getElementById('delete-container'); 
    console.log("Delete Task...");

    formDelete.elements.again.onclick = function() {
       let ul = document.getElementById('incomplete-tasks');
       let li = document.getElementById('add');
       let lala = ul.removeChild(li);
       let bb = ul.firstChild;
       console.log(bb);
       if (!ul.firstChild) {

       	
       }
     
      hideClearList();
	  document.body.removeChild(document.getElementById('delete-div'));
       containerDelete.style.display = 'none';
	  
    };

    formDelete.elements.finish.onclick = function() {
       document.body.removeChild(document.getElementById('delete-div'));
       containerDelete.style.display = 'none';
    }
 
    containerDelete.style.display = 'block';
}
