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

/*
	Main console log function below

task:
concatenate:    spaces + char

given: height = 7
spaces:  (height - 1) - i 
char: 2i + 1

(spaces, char)

123456*  			(6, 1)		
12345***			(5, 3)
1234*****			(4, 5)
123*******			(3, 7)
12*********			(2, 9)
1***********		(1, 11)
*************		(0, 13)

*/

function tree(obj) {
	var height = obj.height;
	var char = obj.char;

	for (var i = 0; i < height; i++) {
		var spaces = (height - 1) - i;
		var numChar = 2 * i + 1;
		console.log(" ".repeat(spaces) + char.repeat(numChar));
	}

}

