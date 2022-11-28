class Ship {
    constructor(name,hull,firePower,accuracy) {
        this.name = name
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
    takeDamage(num) {
        return this.hull -= num;
}
}
const player = new Ship('USS_Assembly',20,5,.7)
let remaining = 6
let a1 = {}
let a2 = {}
let a3 = {}
let a4 = {}
let a5 = {}
let a6 = {}

function createAlienShip1(name,hull,firePower,accuracy) {
    a1 = new Ship(name,hull,firePower,accuracy)
    return a1
}
function createAlienShip2(name,hull,firePower,accuracy) {
    a2 = new Ship(name,hull,firePower,accuracy)
    return a2
}
function createAlienShip3(name,hull,firePower,accuracy) {
    a3 = new Ship(name,hull,firePower,accuracy)
    return a3
}
function createAlienShip4(name,hull,firePower,accuracy) {
    a4 = new Ship(name,hull,firePower,accuracy)
    return a4
}
function createAlienShip5(name,hull,firePower,accuracy) {
    a5 = new Ship(name,hull,firePower,accuracy)
    return a5
}
function createAlienShip6(name,hull,firePower,accuracy) {
    a6 = new Ship(name,hull,firePower,accuracy)
    return a6
}

createAlienShip1('Alien 1',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

createAlienShip2('Alien 2',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

createAlienShip3('Alien 3',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

createAlienShip4('Alien 4',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

createAlienShip5('Alien 5',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

createAlienShip6('Alien 6',3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)

function battleAlien(alien) {
while (player.hull > 0 && alien.hull > 0) {
    if (player.accuracy >= Math.random()) {
 alien.takeDamage(player.firePower)
    console.log(`You did ${player.firePower} damage to the enemy ship! ${alien.name} has ${alien.hull} hitpoints left.`)
    } else {
        console.log(`You missed the mark.`)
    }
    if  (alien.accuracy >= Math.random() && alien.hull > 0) {
    player.takeDamage(alien.firePower)
    console.log(`You took ${alien.firePower} damage from the enemy Alien. You have ${player.hull} hitpoints left.`)
    } else {
        console.log(`You've evaded the enemy attack!`)
    }
    if (player.hull <= 0) {
        console.log(`The ${player.name} been annihilated by the Aliens. 
        Mission Failed, We'll get em' next time`)
    }
    if (alien.hull <= 0) {
        console.log(`You've sent ${alien.name} to their doom. 
        ${remaining -= 1} to go!`)
    }
}
}
battleAlien(a1)