class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10){
        super(name, health, speed, strength)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake()
        console.log('The journey of a thousand miles begins with a single step')
    }
}

const shoyo = new Sensei('shoyo', 100);
shoyo.showStats();
shoyo.speakWisdom();
shoyo.showStats();
