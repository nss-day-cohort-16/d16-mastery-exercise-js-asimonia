// Get references to elements in the DOM
var growButton = document.getElementById("grow");
var heightInput = document.getElementById("height");
var charInput = document.getElementById("char");

// Create a placeholder for a TreeObj object
var treeObj;

// Create object constructor
function TreeObj(height, char) {
	this.height = height;
	this.char = char;
}

function growTree() {
	if (heightInput.value && charInput.value) {
		alert("You created your tree!");

		// create the Tree object
		treeObj = new TreeObj(heightInput.value, charInput.value);
		
		// call the tree function and pass the object
		tree(treeObj);
		
	} else {
		alert("Both fields must have a value");
	}
}

// Add event listeners
growButton.addEventListener("click", function(event) {
	event.preventDefault();
	growTree();
});

heightInput.addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		growTree();
	}
});

charInput.addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		growTree();
	}
});


function tree(obj) {
	console.log(obj);
}