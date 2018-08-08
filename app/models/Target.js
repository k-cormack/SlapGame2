console.log("Target.js")


class Target {
    constructor(name, health, img, slapDamage, punchDamage, kickDamage, specialDamage) {
        this.name = name || ""
        this.health = health || 100
        this.img = img || ""
        this.damages = {
            slap: slapDamage,
            punch: punchDamage,
            kick: kickDamage,
            special: specialDamage
        }
        this.dead = false //these do NOT need to be specified when creating a Target, so these are NOT listed above
        this.hits = 0     //these do NOT need to be specified when creating a Target, so these are NOT listed above
    }

    attack(type) {
        if (this.dead) { //no need to put "= true" - this is asking if it is true, and if so, return

            return //returns undefined, but STOPS the rest of the function from running if TRUE
        }
        if (this.damages[type]) {
            this.health -= this.damages[type]
            this.hits++
            if (this.health <= 0) {
                this.health = 0
                this.dead = true
            }       //also returns undefined, as the service will "reach in" and "grab" the data
        }

    }
}



export default Target