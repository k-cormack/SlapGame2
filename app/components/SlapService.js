import Target from "../models/Target.js"

let scareCrow = new Target("Scarecrow", 100, "//placehold.it/200x200", 1, 5, 10, 13)


class SlapService {
    constructor() {

    }
    attack(type) {
        scareCrow.attack(type) //not sure what the "type"s are/how they function - maybe either slap/punch/kick?
    }
    get Target() {
        return {
            health: scareCrow.health,
            name: scareCrow.name,
            hits: scareCrow.hits,
            img: scareCrow.img,
            dead: scareCrow.dead
        }
    }
}

console.log("SlapService.js")

export default SlapService
