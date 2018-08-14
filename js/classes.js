class Entity {
	constructor() {
		this.sprite = 'images/';
		this.x = 2;
		this.y = 5;
	}
// Brings back the bugs after they reach end of canvas
	update(dt) {
		this.isOutOfBoundsX = this.x > 5;
		this.isOutOfBoundsY = this.y < 1;

	}
// Draws the entity on the screen
	render() {
		 ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
	}
// Checks if there is a collison between player & enemy
	checkCollisions(playerOrEnemy) {
		if (this.y === playerOrEnemy.y) {
			if (this.x >= playerOrEnemy.x - 0.5 && this.x <= playerOrEnemy.x + 0.5) {
				return true;
			}
		} 
		else {
			return false;
		}
	}
}

// Player
class Player extends Entity {
	constructor() {
		super();
		this.sprite += 'char-boy.png';
		this.moving = false; //
		this.win = false;
	}

update(dt) {
	super.update();
	if (this.isOutOfBoundsY && !this.moving && !this.win) {
		alert("You won!");
		this.win = true;
		// add what happens when player wins
	}
}
// Draws the player on the screen
render() {
	super.render();
	this.moving = false;
}
// Moves the player based on key pressed
	handleInput(input) {
		switch (input) {
			case 'left':
				this.x = this.x > 0 ? this.x - 1 : this.x; 
				break;
			case 'up':
				this.y = this.y > 0 ? this.y - 1 : this.y; 
				break;
			case 'right':
				this.x = this.x < 4 ? this.x + 1 : this.x;
				break;
			case 'down':
				this.y = this.y < 5 ? this.y + 1 : this.y;
				break;
			default:
				break;
		}
		this.moving = true;
	}
}
// Enemy
class Enemy extends Entity {
	constructor(x, y) {
		super();
		this.sprite += 'enemy-bug.png';
		this.x = x;
		this.y = y;
	}

	update(dt) {
		super.update();
		if(this.isOutOfBoundsX) {
			this.x = -1; 
		} 
		else {
			this.x += dt; //optional: use a random/or faster pace
		}
	}
}

