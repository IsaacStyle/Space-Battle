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

let alienShips = []
function createShips(num) {
    for(let i = 0; i < num; i++) {
        alienShips[i] = new Ship(`Alien ${i + 1}`,3 + Math.floor(Math.random()*4),2 + Math.floor(Math.random()*3),.6 + Math.floor(Math.random()*3) / 10)
    }
}

createShips(6)

let firstLevel = prompt("Would you like to start the game? Y or N?")
firstLevel = firstLevel.toUpperCase
let nextLevel = ''

function battleAlien(alien) {
while (player.hull > 0 && alien.hull > 0 && nextLevel !== 'N' && firstLevel !== 'N') {
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
        if (remaining !== 0) {
            nextLevel = prompt("Would you like to continue or retreat? Y to continue or N to retreat?")
        nextLevel = nextLevel.toUpperCase
        }
    } 
    if (remaining === 0) {
        console.log(`The Earth has been saved from the Alien threat!
        You Win!`)
    }
    if (nextLevel === 'N') {
        console.log("Game Over")
        break
    }
}
}
battleAlien(alienShips[0])
battleAlien(alienShips[1])
battleAlien(alienShips[2])
battleAlien(alienShips[3])
battleAlien(alienShips[4])
battleAlien(alienShips[5])
