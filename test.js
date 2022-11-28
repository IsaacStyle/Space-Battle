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

createShips(6)
console.log(alienShips[0])
console.log(alienShips[1])
console.log(alienShips[2])
console.log(alienShips[3])
console.log(alienShips[4])