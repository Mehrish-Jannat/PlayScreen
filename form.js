class Form {
    constructor(){
        this.title = createElement("h2")
        this.input = createInput("Name")
        this.halfButton = createButton("Start")
        this.greeting = createElement("h3")
    }

    hide(){
        this.title.hide()
        this.input.hide()
        this.halfButton.hide()
        this.greeting.hide()
    }
    display(){
        this.title.html("CarRace")
        this.title.position(130,0)
        this.input.position(130,160)
        this.halfButton.position(250,200)
        this.halfButton.mousePressed(()=>{
            this.input.hide()
            this.halfButton.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
        this.greeting.html("Why are you even here? " + player.name)
        this.greeting.position(60,160)
        })
    }
}