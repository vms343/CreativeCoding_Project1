//CREATE BREATHING FLOWER CLASS:ONE THAT MOVES USING SINE FUNCTION

class BreatheFlower {
	
	constructor(){ //main BreatherFlower constructor information 
		this.x = random(width);// x values are random 
		this.y = random(height); //y values are random 
		this.rad = random(2,20); //random radian values between 6 and 24 
		this.theta = random(PI); //random theta intervals
		this.dtheta = random(0.5,1);//random distance between sine functions 
	}
	
	//method to increment theta and have flower breathe 
	
		breathe(){
			this.theta += this.dtheta; //make flower move in and out 
		}
	
	//method to show sine function and draw flower 
		
		display(){
			
			//sine function variable
			this.r = this.rad + this.rad * (sin(this.theta) + 1); 
				
			//DRAW FLOWER 
					push(); //push matrix move flower to center 
					translate(-300,0); //translate left 300
					drawFlower(this.y,this.y,this.r,this.r,color(242,163,144));//flower function calling 
					pop();
			
		}	
					
	} //CLASS BREATHEFLOWER end bracket