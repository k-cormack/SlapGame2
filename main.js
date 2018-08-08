import SlapController from "./app/components/SlapController.js"

//PRIVATE



//PUBLIC

class App {
    constructor() {
        this.controllers = {
            mySlapController: new SlapController()
        }
    }
}
window.app = new App() // THIS is what instantiates everything to the user screen - see above class "App"
console.log("main.js")