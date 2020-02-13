class Pet {
    constructor(name){
        this._name = name;
        this._age = 8;
        this._maxAge = 10;
        this._hungerLevel = 18;
        this._thirstLevel = 20;
        this._isBored = false;
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

    }
    play(){
        
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
            return `I'm hungry...feed me! Hunger level: ${this.hungerLevel}`
        } else if (this.hungerLevel >= 11 && this.hungerLevel <= 15) {
            return `I'm pretty full...but I could eat more! Hunger level: ${this.hungerLevel} `
        } else {
            return `I'm full, stop feeding me!`
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
}

const lefou = new Pet("Lefou"); // creating pet
// console.log(lefou) // printing pet info to console
// console.log(lefou.checkHunger()); // expect "I'm full!" to print
// console.log(lefou.checkThirst()); // expect "No more water please!" to print
lefou.checkThirst();
