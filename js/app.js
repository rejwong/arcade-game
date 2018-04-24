// Enemies our player must avoid
var Enemy = function(rowNumber) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = this.setRow(rowNumber); //1=60 2=140 3=225
    this.speed = Math.ceil((Math.random() * 5)*100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 505){
        this.x = this.x + (this.speed * dt);
    } else {
        this.x = -100;
    }
    this.collisionDetect();
};

Enemy.prototype.collisionDetect = function(){
    // if player is in same row
    if(player.y === this.y) {
        // console.log('collide');
        if(this.x > player.xMin && this.x < player.xMax){
            player.resetPosition();
            player.deductLife();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.setRow = function(rowNumber){
    switch(rowNumber){
        case 1:
            return 55; // 60
        break;

        case 2: 
            return 135; // 140
        break;

        case 3: 
            return 215; // 225
        break;        
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 375; // 375
    this.lives = 3;
    this.level = 1;
    this.levelCounter = document.querySelector('.level-number');
    this.livesCounter = document.querySelector('.lives-number');
};

Player.prototype.update = function() {
    this.xMin = this.x - 50;
    this.xMax = this.x + 50;

    if(this.y === -25) {
        console.log('Nice!');
        this.resetPosition();
        this.incrementLevel();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(pressedKey) {
    
    switch(pressedKey) {
        case 'up':
            if (this.y !== -25){
                this.y = this.y - 80;
            }
        break;

        case 'down': 
            if (this.y !== 375){
                this.y = this.y + 80;
            }
        break;

        case 'left':
            if (this.x !== 0) {
                this.x = this.x - 100;
            }
        break;

        case 'right':
            if (this.x !== 400) {
                this.x = this.x + 100;
            }
        break;
        default:
            console.log('waiting...');
        break;
    }

};

Player.prototype.resetPosition = function() {
    this.x=200;
    this.y= 375;
    this.update();
};

Player.prototype.deductLife = function(){
    this.lives--;
    this.livesCounter.innerHTML = this.lives;
    if(this.lives === 0) {
        alert('Game over, try again!');
        this.resetGame();
    }
};

Player.prototype.resetLives = function() {
    this.lives = 3;
    this.livesCounter.innerHTML = this.lives;
};

Player.prototype.resetLevel = function() {
    this.level = 1;
    this.levelCounter.innerHTML = this.level;
};

Player.prototype.incrementLevel = function() {
    this.level++;
    this.levelCounter.innerHTML = this.level;
    this.resetEnemies();
};

Player.prototype.resetEnemies = function(){
    allEnemies = [];
    createEnemies();
};

Player.prototype.resetGame = function() {
    this.resetLives();
    this.resetLevel();
    this.resetPosition();
    this.resetEnemies();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy = new Enemy();
allEnemies.push(enemy);

console.log(allEnemies);

var player = new Player();
console.log(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
