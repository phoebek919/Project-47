class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
hide(){
  this.greeting.hide();
  this.title.hide();
  this.input.hide();
  this.button.hide();
}
display(){
  this.title.html("DOGGIE GAME");
  this.title.position(350,70);
  this.title.style('font-size','70px');
  this.title.style('color','red');

  this.input.position(350,100);
  this.input.style('width','250px');
  this.input.style('height','70px');
  this.input.style('background','white');

  this.reset.html("R");
  this.reset.position(500,70);
  this.reset.style('width','150px');
  this.reset.style('height','150px');
  this.reset.style('background','red');

  this.button.position(350,150);
  this.button.style('width','200px');
  this.button.style('height','200px');
  this.button.style('background','blue');

  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount += 1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Hello:"+player.name);
    this.greeting.position(400,250);
    this.greeting.style('color','blue');
    this.greeting.style('font-size','10px');

  })
  this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);

    var playerInfoRef = database.ref('players');
    playerInfoRef.remove();
  })
} 

}
