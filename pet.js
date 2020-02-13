class Pet {
    constructor(name){
        this._name = name;
        this._age = 1;
        this._maxAge = 10;
        this._hungerLevel = 20;
        this._thirstLevel = 20;
        this._isBored = true;
        this._boredomLevel = 10;
        this._exerciseLevel = 0;
        this._maxExerciseLevel = 20;
        this._isAlive = true;
    }
    // GETTERS
    get name(){
        return this._name;
    }
    get age() {
        return this._age;
    }
    get maxAge(){
        return this._maxAge;
    }
    get hungerLevel(){
        return this._hungerLevel;
    }
    get thirstLevel(){
        return this._thirstLevel;
    }
    get isBored(){
        return this._isBored;
    }
    get exerciseLevel(){
        return this._exerciseLevel;
    }
    get maxExerciseLevel(){
        return this._maxExerciseLevel;
    }
    get isAlive(){
        return this._isAlive;
    }
    get boredomLevel(){
        return this._boredomLevel;
    }
    // METHODS
    feed(){
        if (this.hungerLevel <= 19) {
            this._hungerLevel++;
            console.log(`Yummy! Hunger level is now ${this.hungerLevel}.`)
        } else {
            console.log(`I'm not hungry! Hunger level is maxed out at ${this.hungerLevel}.`)
        }
    }
    giveDrink(){
        if (this.thirstLevel <= 19) {
            this._thirstLevel++;
            console.log(`Hydration increasing! Thirst level is now ${this.thirstLevel}.`)
        } else {
            console.log(`No more water please, I'm not thirsty! Thirst level: ${this.thirstLevel}.`)
        }
    }
    play(){
        if (this.boredomLevel <= 10 && this.boredomLevel > 0) {
            this._thirstLevel--;
            this._hungerLevel--;
            this._isBored = false;
            this._boredomLevel++;
            console.log(`I'm having fun! Boredom level is now ${this.boredomLevel}`)
        } else if (this.boredomLevel === 0){
            console.log(`Too late! I've died of boredom...`)
        } else {
            console.log(`I don't feel like playing. Boredom level is ${this.boredomLevel}`)
        }
    }
    exercise(){

    }
    levelUp() {
        this._age++;
        if (this.age > this.maxAge){
            console.log(`Max age reached! ${this.name} has died...`)
        } else if (this.age <= this.maxAge) {
            console.log(`Happy birthday to me! I'm ${this.age} years old.`);
        }
    }
    checkHunger(){
        if (this.hungerLevel >= 0 && this.hungerLevel <=10) {
            console.log(`I'm hungry...feed me! Hunger level: ${this.hungerLevel}`)
        } else if (this.hungerLevel >= 11 && this.hungerLevel <= 15) {
            console.log(`I'm pretty full...but I could eat more! Hunger level: ${this.hungerLevel}`)
        } else {
            console.log(`I'm full, stop feeding me! Hunger level: ${this.hungerLevel}`)
        }
    }
    checkThirst(){
        if (this.thirstLevel >= 0 && this.thirstLevel <=10) {
            console.log(`I'm thirsty...give me a drink! Thirst level: ${this.thirstLevel}`)
        } else if (this.thirstLevel >= 11 && this.thirstLevel <= 19) {
            console.log(`I'm pretty hydrated...but I could drink more! Thirst level: ${this.thirstLevel}`)
        } else {
            console.log(`No more water please, I'm not thirsty! Thirst level: ${this.thirstLevel}`)
        }
    }
    checkExerciseLevel(){

    }
    checkBoredom(){
        if (this.boredomLevel <= 10 && this.boredomLevel > 5) {
            console.log(`I'm not bored at all! Boredom level is ${this.boredomLevel}`)
        } else if (this.boredomLevel <= 4 && this._boredomLevel > 1){
            console.log(`I'm kinda bored, play with me!`)
        } else {
            console.log(`Too late, I died of boredom`)
    }
}
}

const lefou = new Pet("Lefou"); // creating pet
// console.log(lefou) // printing pet info to console
// console.log(lefou.checkHunger()); // expect "I'm full!" to print
// console.log(lefou.checkThirst()); // expect "No more water please!" to print
lefou.checkBoredom();