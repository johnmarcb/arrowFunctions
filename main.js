//Exercise 1
const newHello = () => `Hello Redness`;
// console.log(newHello());

//Exercise 2
const numbersArray = [10, 5, 3, 54];
const numbersReduced = numbersArray.reduce((acc, curr) => acc + curr);

// console.log(numbersReduced);

//Exercise 3

const Animal = (animal, sound, delay) => {
  this.animal = animal;
  this.sound = sound;
  this.delay = delay;
};

const animalGreet = (Animal.prototype.greet = () => {
  setTimeout(
    function () {
      console.log(`Hi, I am a ${this.animal}...${this.sound}`);
    }.bind(this),
    this.delay
  );
});

const dog = new Animal('Dog', 'Bark', 3000);
const cat = new Animal('Cat', 'Meow', 200);
animalGreet(dog);
cat.greet();
