import SlapService from "./SlapService.js"
//PRIVATE PARTS

let mySlapService = new SlapService()

function draw() { //"draw" is just the name; could call it "update", etc.
    let target = mySlapService.Target
    let template = `
        <div>
            <div><img src="${target.img}" alt="target image" /></div>
            <h2>${target.name}</h2>
            <h3>Health: ${target.health}</h3>
            <h3>Hits: ${target.hits}</h3>
        </div>
        <div>
            <button onclick="app.controllers.mySlapController.attack('slap')">Slap</button>
            <button onclick="app.controllers.mySlapController.attack('punch')">Punch</button>
            <button onclick="app.controllers.mySlapController.attack('kick')">Kick</button>
            <button onclick="app.controllers.mySlapController.attack('special')">Special</button>      
        </div>
        ` //remember, these are back-ticks
    document.getElementById("target").innerHTML = template;
}


///PUBLIC PARTS

class SlapController {
    constructor() {
        draw()

    }
    attack(type) {
        mySlapService.attack(type)
        draw()
    }

}
export default SlapController

console.log("SlapController.js")
