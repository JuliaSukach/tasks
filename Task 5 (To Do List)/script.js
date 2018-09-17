let taskInput = document.getElementById("new-task");//Add a new task.
let addButton = document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
let clearAll = document.getElementById('clear'); //delete all tasks


//New task list item
let createNewTaskElement = function(taskString) {

	let listItem = document.createElement("li");
	//input (checkbox)
	let checkBox = document.createElement("input");
	//label
	let label = document.createElement("label");
	//input (text)
	let editInput = document.createElement("input");
	//button.edit
	let editButton = document.createElement("button");
	//button.delete
	let deleteButton = document.createElement("button");

	label.innerText = taskString;

	checkBox.type="checkbox";
	editInput.type="text";
    
    label.id = 'label';
    label.className="label";
    listItem.id = 'add';

	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
    deleteButton.className="delete";

    checkBox.className="checkbox";
    
	//appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
    return listItem;
    
    //click label ---> input checked
   /* for (let i = 0; i < label.length; i++) {
        label[i].onclick = function() {
            console.log('checked');
            document.getElementsByClassName('checkbox').checked = true;
        };
    }*/
}

let addTask=function() {
	console.log("Add Task...");
	//Create a new list item
	let listItem = createNewTaskElement(taskInput.value);
	if (taskInput.value == "") {
        console.log(addButton);
		alert ("You must write something");
		addButton.disabled = true;
	}
	else {
        taskInput.onkeypress = function() {
            console.log("hello");
            addButton.disabled = "";
        }
	    incompleteTaskHolder.appendChild(listItem);
	    bindTaskEvents(listItem, taskIncomplete);
	}
	taskInput.value = "";
}

let taskIncomplete = function(){
    console.log("Incomplete Task...");
		
	let listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncomplete);
}

addButton.onclick = addTask;
addButton.addEventListener("click",addTask);

let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
    //select ListItems children
	let checkBox=taskListItem.querySelector("input[type = checkbox]");
	let editButton=taskListItem.querySelector("button.edit");
	let deleteButton=taskListItem.querySelector("button.delete");


	    //Bind editTask to edit button.
	    editButton.onclick = showPrompt;
		//Bind deleteTask to delete button.
	    deleteButton.onclick = showDeletePrompt;
		//Bind taskCompleted to checkBoxEventHandler.
		checkBox.onchange = checkBoxEventHandler;
}

for (let i = 0; i < incompleteTaskHolder.length; i++) {

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

    let labelEdit = document.getElementById('label');

    console.log("Edit Task...");

    edit.value = labelEdit.innerText;
    
    form.elements.save.onclick = function() {
     
        labelEdit.innerText =  edit.value;
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
       
        let res = ul.contains(li);
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



