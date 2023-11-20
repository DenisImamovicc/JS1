
const pets = [
    {
        name: "Mr Barksby",
        species: "Dog",
        age: 5,
        hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
        owner: {
            name: "Mr Beans",
            age: 57,
        },
        sound: "WOOOFF!",
        speak() {
            console.log(`${this.name} sound: ${this.sound}`);
        }
    },
    {
        hobbies: ["Be cute"],
        species: "Kitten",
        age: 1,
        name: "Meow Jr",
        sound: "meooow!",
        meowCounter: 0,
        speak() { // same as writing "speak: function() {}"
            this.meowCounter++;
            console.log(this.sound);
            console.log(`Meowed times today: ${this.meowCounter}`);
        }
    },
  {
  	hobbies: ["Be cute"],
  	species: "Old kitten",
  	age: 9,
  	name: "Meow Sr",
  	sound: "meooow!",
  	meowCounter: 0,
  	speak() { // same as writing "speak: function() {}"
  		this.meowCounter++;
  		console.log(this.sound);
  		console.log(`Meowed times today: ${this.meowCounter}`);
  	}
  }
];

const getOwner = (pet) => 
    pet.hasOwnProperty(`owner`) ? pet.owner.name : "missing"
 
const getHobbies = (pet) => 
    pet.hobbies.join(" and ")

const addPetsList = (pet) => {
    const petsList = document.getElementById("petsList")
    petsList.innerHTML += 
    `<hr>
        <li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old.
            His owner is ${getOwner(pet)} and his favorite
            hobbies is to ${getHobbies(pet)}.
        </li>      
     <br>`
}    

const displayPetsList = () => {
    pets.forEach(pet => {
        addPetsList(pet)
     });
}