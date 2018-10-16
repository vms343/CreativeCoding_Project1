//CREATE CLASS FOR SPOT

class Spot {
	
	constructor() { //main spot constructor information 
		this.x = 400; //establish x coordinate 
		this.y = 675; //establish y coordinate 
		this.vx = random(-60,50); //random movement of x spots between -60 and 50
		this.vy = random(-20,-40); //random movement of y spots between -20 and -30
		this.alpha = 200; //establish opacity
		this.alpha2 = 100; //establish another opacity 
	}
	
	finished() { //return function when finished 
		return this.alpha < 0; //return method when opacity is less than 0 
	}
	
	update(){ //updating spots
		this.x += this.vx; //increment x values by random  
		this.y += this.vy; //increment y values by random 
		this.alpha -= 5; //decrement alpha values by 5 to make it fade away 
	}
	
	show(){ //displaying spots data 
		noStroke(); //bubbles without outline
		fill(147,122,247,this.alpha2); //light purple fill with opacity method
		ellipse(this.x,this.y,80,80); //draw bigger ellipse at x,y methods
		fill(178,226,232,this.alpha); //light blue fill with opacity method
		ellipse(this.x,this.y,60,60); //draw another smaller ellipse at x,y methods
		
	
	}
	
}//Spot Class closing bracket