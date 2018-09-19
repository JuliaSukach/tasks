let taskInput = document.getElementById("new-task");//Add a new task.
let addButton = document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
let clearAll = document.getElementById('clear'); //delete all tasks

let createNewTaskElement = function(taskString) {

	let listItem = document.createElement("li");
	
	let checkBox = document.createElement("input");
	
	let label = document.createElement("label");
	
	let editInput = document.createElement("input");
	
	let editButton = document.createElement("button");
	
	let deleteButton = document.createElement("button");

	label.innerText = taskString;

	checkBox.type = "checkbox";
	editInput.type = "text";
    
    label.id = 'label';
    label.className = "label";
    label.setAttribute("for", "checkbox");
    listItem.id = 'add';
    listItem.className = 'add';

	editButton.className = "edit button";
    deleteButton.className = "delete button";

    checkBox.className = "checkbox";
    
	//appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
    return listItem;
    
}

taskInput.oninput = function () {
    if (taskInput.value !== "") {
        addButton.removeAttribute("disabled");;
    }
}

let addTask = function() {
	console.log("Add Task...");
	
	let listItem = createNewTaskElement(taskInput.value);
   
	if (taskInput.value == "") {
        addButton.setAttribute("disabled", "true");
	}
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
    addButton.setAttribute("disabled", "true");
	taskInput.value = "";
}

let taskIncomplete = function(){
    console.log("Incomplete Task...");
		
	let listItem = this.parentNode;
	bindTaskEvents(listItem,taskIncomplete);
}

//addButton.onclick = addTask;
addButton.addEventListener("click",addTask);

let bindTaskEvents = function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
    //select ListItems children
	let checkBox = taskListItem.querySelector("input[type = checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");
	   
	    editButton.onclick = showPrompt;
		
	    deleteButton.onclick = showDeletePrompt;
		
		checkBox.onchange = checkBoxEventHandler;
}

let incompleteTasksLength = incompleteTaskHolder.length; 

for (let i = 0; i < incompleteTasksLength; i++) {

	bindTaskEvents(incompleteTaskHolder[i],taskIncomplete);

}


function showCover () {
    let coverWindow = document.createElement('div');
    coverWindow.className = 'cover-div';
    coverWindow.id = 'cover-div';
    document.body.appendChild(coverWindow);
}

function hideCover () {
    document.body.removeChild(document.getElementById('cover-div'));
}

let showClearList = function() {
	clearAll.style.display = 'block';
}

let hideClearList = function() {
	clearAll.style.display = 'none';
}

function showPrompt() {
    showCover();
    let form = document.getElementById('edit-form');
    let container = document.getElementById('edit-container');
    let edit = document.getElementById("editInput");

    let listItem = this.parentNode;
    console.log(listItem);

    let text = listItem.querySelector("label.label");
    console.log(text);

    let labelEdit = document.getElementById('label');

    console.log("Edit Task...");

    edit.value = text.innerText;
    
    form.elements.save.onclick = function() {
     
        text.innerText =  edit.value;
        hideCover();
        container.style.display = 'none';

    };

    form.elements.cancel.onclick = function() {

        hideCover();
        container.style.display = 'none';

    }
    
    container.style.display = 'block';
}

function showDeletePrompt() {
    showCover();

    let containerDelete = document.getElementById('delete-container'); 
    let formDelete = document.getElementById('delete-form');
    
    console.log("Delete Task...");

    formDelete.elements.again.onclick = function() {
        let ul = document.getElementById('incomplete-tasks');
        let li = document.getElementById('add');
       
        ul.removeChild(li);
        
        let res = ul.contains(document.getElementById('add'));

        console.log(res);

        if (res == false) {
           hideClearList();
        }
       
	    hideCover();
        containerDelete.style.display = 'none';
	  
    };

    formDelete.elements.finish.onclick = function() {
        hideCover();
        containerDelete.style.display = 'none';
    }
 
    containerDelete.style.display = 'block';
}

addButton.onclick = showClearList;
addButton.addEventListener('click', showClearList);

function showClearPrompt() {
    showCover();
    let formClear = document.getElementById('clear-form');
    let containerClear = document.getElementById('clear-container');

    console.log("Clear Tasks...")

    formClear.elements.clear.onclick = function() {
        
        while (incompleteTaskHolder.lastChild) {
            incompleteTaskHolder.removeChild(incompleteTaskHolder.lastChild);
        }

        hideCover();
        hideCover();
        containerClear.style.display = 'none';
        let res = incompleteTaskHolder.contains(document.getElementById('add'));
        console.log(res);
        if (res == false) {
            hideClearList();
        }
     
    };

    formClear.elements.unclear.onclick = function() {

        hideCover();
        hideCover();
        containerClear.style.display = 'none';

    }
    containerClear.style.display = 'block';
}

clearAll.onclick = showClearPrompt;
clearAll.addEventListener('click', showClearPrompt)



