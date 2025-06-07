//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
function displayOutput(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = message;
}

// Test functions
function testCat() {
  const myCat = new Cat("Siamese");
  myCat.makeSound();
  myCat.purr();
}

function testDog() {
  const myDog = new Dog("Golden Retriever");
  myDog.makeSound();
  myDog.bark();
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
