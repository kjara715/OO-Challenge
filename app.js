//Part One

class Vehicle{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk() {
        return "Beep.";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

//Part Two

class Car extends Vehicle{
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 4;
    }   
}

//Part Three

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    } 
}

//Part Four

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(item){
        if(this.vehicles.length >= this.capacity){ //first check to see if there's room
            return "Sorry, we're full.";
        }
        if(!(item instanceof Vehicle)){ //first check to see if there's room
            return "Only vehicles are allowed in here!"
        }
        this.vehicles.push(item);
        return "Vehicle added!"
    }
}
