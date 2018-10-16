//WAVE VARIABLES
	var xspace = 4; //space between each x value
	var w; //width of wave

	var theta = 500.0; //angle starts at 0
	var amplitude = 70.0; //height of wave 
	var period = 200.0; //how long until wave repeats again
	var ix; //increment x
	var yvalues; //array of y (height) values for every x value

//CLOUD VARIABLES
	var Cloud1; //variable for cloud 1
	var Cloud2; //variable for cloud 2
	var Cloud3; //variable for cloud 3

//declare global variable of screen to make patterns show in one sketch
	var screenie = 1;

//declaring moving bubble array function
	spots = [];

//declare breathing array function 
	breathers = [];
	
function setup() {
	
	//CLOUD SETUP 
	Cloud1 = 0; //x location of Cloud 1 
	Cloud2 = 0; //x location of Cloud 2
	Cloud3 = 0; //x location of Cloud 3
	
	//MAIN PAGE BACKGROUND 
		createCanvas(800,600); //main background
		background(178,247,255);//clear blue background
		screenie = 1;
	
	//WAVE SETUP 
		w = width; //width of wave 
		ix = (TWO_PI /period) * xspace; //increment x by TWO_PI/period 
		yvalues = new Array(floor(w+5/xspace));//each y value produces new Array 
	
	//BACKGROUND GRASSLAND  
			noStroke();
			fill(181,255,188); //green grass
			ellipseMode(CENTER);
			ellipse(740,600,450,350); //right field of grass  
			fill(181,255,188);
			ellipse(0,715,600,600); //left field of grass
			ellipse(400,800,600,600); //middle field of grass
	
	//BREATHING FLOWER SETUP 
			//FLOWER CLASS INITIALIZE OBJET 
					for (var i = 0; i < 50; i++){
						let b = new BreatheFlower();
						breathers.push(b);
						}
	
} //function setup closed bracket 

function draw() {

	//DRAWING SCREEN 1:BACKGROUND PAGE 
	
		//REDRAW BACKGROUND
	if(screenie == 1){
		background(178,247,255);//reset clear blue background
		
		//BACKGROUND GRASSLAND  
			noStroke();
			fill(181,255,188); //green grass
			ellipseMode(CENTER);
			ellipse(740,600,450,350); //right field of grass  
			fill(181,255,188);
			ellipse(0,715,600,600); //left field of grass
			ellipse(400,800,600,600); //middle field of grass
		
			//DRAW SUN:CALLING TO FUNCTION 
				drawSun(600,60,100,100,color(232,243,109),2);

			//DRAW CLOUD:CALLING TO FUNCTION 
				drawCloud(125, 141, 50, 50, //circle 1
								 76, 159, 60, 60, //circle 2
								155, 155, 60, 60, //circle 3 
								197, 178, 55, 55, //circle 4 
								116, 183, 65, 65, //circle 5 
								158, 187, 50, 50, //circle 6 
								38, 184, 55, 55, //circle 7 
								75, 196, 50, 50, //circle 8 
								color(255)); //color(white)

			//DRAW ANOTHER CLOUD 2:RE-CALLING FUNCTION
				drawCloud(265, 48, 55, 55, //circle 1
								299, 56, 50, 50, //circle 2
								323, 85, 50, 50, //circle 3
								227, 64, 55, 55, //circle 4
								280, 84, 50, 50, //circle 5
								245, 87, 40, 40, //circle 6
								214, 86, 60, 45, //circle 7
								190, 85, 50, 50, //circle 8
								color(255)); //color(white)

			//DRAW ANOTHER CLOUD 3:RE-CALLING FUNCTION
				drawCloud(399, 128, 50, 50, //circle 1
								473, 136, 50, 50, //circle 2
								456, 114, 40, 40, //circle 3
								438, 142, 40, 40, //circle 4
								424, 97, 45, 45, //circle 5
								431, 124, 30, 30, //circle 6
								407, 148, 30, 30, //circle 7
								376, 143, 50, 50, //circle 8
								color(255)); //color(white)
		
			//DRAW TREE ARRAY:CALLING FUNCTION 
				drawTree(45,360,15,60,color(107,62,36),2,//tree branch
								 27,370,52,330,77,370,color(34,145,107),2, //triangle 1 (bottom)
								 27,330,52,290,77,330,color(34,145,107),2, //triangle 2 (middle)
								 27,290,52,250,77,290,color(34,145,107),2); //triangle 3 (top)
	

			//DRAW WAVE:CALLING TO FUNCTION 
				makeWave();

			//DRAW WAVE BUBBLES:CALLING TO FUNCTION 
				bubbleWave();

			//DRAW STEM:CALLING FUNCTION 
				drawStem(678,280,5,150,2,color(172,255,180)); 

			//DRAW FLOWER:CALLING FUNCTION
				drawFlower(2,46,30,50,color(252,191,255));//flower

			//DRAW FLOWER CENTER:CALLING FUNCTION 
				drawFlowerCenter(0,0,52,52,color(255,200,116)); //flower center circle
	
		} //screenie 1 closing bracket 
	
	
	//DRAWING SCREEN 2:RAINBOW AND CLOUDS MOVING PAGE 
		if(screenie == 2){
			background(70,130,255);//dark blue background
			frameRate(30); 
			
			//CALLING FUNCTION: DRAW RAINBOW 
			drawRainbow(300,560); 
			
			//DRAW CLOUD 1 AGAIN WITH DIFFERENT PARAMETERS
			Cloud1 = Cloud1 + 1; //makes Cloud 1 increment and move 
			drawCloud(Cloud1 + 125, 141, 50, 50, //circle 1
								 Cloud1 + 76, 159, 60, 60, //circle 2
								Cloud1 + 155, 155, 60, 60, //circle 3 
								Cloud1 + 197, 178, 55, 55, //circle 4 
								Cloud1 + 116, 183, 65, 65, //circle 5 
								Cloud1 + 158, 187, 50, 50, //circle 6 
								Cloud1 + 38, 184, 55, 55, //circle 7 
								Cloud1 + 75, 196, 50, 50, //circle 8 
								color(255)); //color(white)
				if(Cloud1 > 800){ //reloop when Cloud1 goes off screen
					Cloud1 = -600;
					}
			
			//DRAW ANOTHER CLOUD 2:RE-CALLING FUNCTION
				Cloud2 = Cloud2 + 1.2; //makes Cloud 2 increment and move
				drawCloud(Cloud2 + 265, 48, 55, 55, //circle 1
								Cloud2 + 299, 56, 50, 50, //circle 2
								Cloud2 + 323, 85, 50, 50, //circle 3
								Cloud2 + 227, 64, 55, 55, //circle 4
								Cloud2 + 280, 84, 50, 50, //circle 5
								Cloud2 + 245, 87, 40, 40, //circle 6
								Cloud2 + 214, 86, 60, 45, //circle 7
								Cloud2 + 190, 85, 50, 50, //circle 8
								color(255)); //color(white)
				if(Cloud2 > 800){ //reloop when Cloud1 goes off screen
					Cloud2 = -400;
					}
					
			//DRAW ANOTHER CLOUD 3:RE-CALLING FUNCTION
				Cloud3 = Cloud3 + 1.5; //makes Cloud 3 increment and move 
				drawCloud(Cloud3 + 399, 128, 50, 50, //circle 1
								Cloud3 + 473, 136, 50, 50, //circle 2
								Cloud3 + 456, 114, 40, 40, //circle 3
								Cloud3 + 438, 142, 40, 40, //circle 4
								Cloud3 + 424, 97, 45, 45, //circle 5
								Cloud3 + 431, 124, 30, 30, //circle 6
								Cloud3 + 407, 148, 30, 30, //circle 7
								Cloud3 + 376, 143, 50, 50, //circle 8
								color(255)); //color(white)
				if(Cloud3 > 800){ //reloop when Cloud1 goes off screen
					Cloud3 = -500;
					}
		//DRAW ANOTHER CLOUD 4:RE-CALLING FUNCTION (RIGHT SIDE:AT BOTTOM OF RAINBOW)
			drawCloud(392, 570, 40, 50, //circle 1
							463, 584, 42, 45, //circle 2
							456, 558, 40, 40, //circle 3
							438, 582, 40, 40, //circle 4
							424, 542, 45, 45, //circle 5
							431, 560, 40, 35, //circle 6
							407, 586, 58, 40, //circle 7
							376, 586, 58, 50, //circle 8
							color(255)); //color(white)
			//DRAW ANOTHER CLOUD 5:RE-CALLING FUNCTION (LEFT SIDE:AT BOTTOM OF RAINBOW)
				drawCloud(218, 580, 58, 50, //circle 1
							210, 584, 42, 45, //circle 2
							200, 560, 46, 50, //circle 3
							178, 582, 58, 44, //circle 4
							164, 560, 45, 53, //circle 5
							141, 560, 48, 50, //circle 6
							157, 588, 58, 52, //circle 7
							126, 586, 58, 53, //circle 8
							color(255)); //color(white)
		
		} //screenie 2 closing bracket 
	
	//DRAWING SCREEN 3:SUN AND SUNSET PAGE 
		if(screenie == 3){
			background(178,247,255);
			frameRate(4);
		
					//SUNSET
					if(mouseY>600){
						background(178,247,255); //light blue background for day 
					}
					if(mouseY<200 & mouseY>100){
						background(255,251,176); //light yellow
					}
					if(mouseY<300 & mouseY>200){
						background(255,186,124); //light peach
					}
					if(mouseY<400 & mouseY>300){
						background(232,130,197); //light pink 
					}
					if(mouseY<500 & mouseY>400){
						background(255,123,106); //light redish
					}
					if(mouseY<600 & mouseY>500){
						background(227,71,88); //red background
					}
			
		//SUN MOVEMENT 
			
				if(mouseY<800 & mouseY>600){ //small sun when low in the sky
					drawSun(350,mouseY,100,100,color(232,243,109),2);
					}
				if(mouseY<600 & mouseY>390){
					drawSun(350,mouseY,250,250,color(232,243,109),2);
					}
					if(mouseY<400){ //small sun when high in the sky  
						drawSun(350,mouseY,300,300,color(232,243,109),2);
					}
		
		//BUTTERFLIES RANDOMLY FILLING UP PAGE 
			var butterflyX = random(0,500); //random x location for heart 
 			var butterflyY = random(0,500); //random y location for heart 

		//FOR LOOP TO CREATE MULTIPLE 
 			for(var i = 0; i < 8; i ++){
				translate(butterflyX,butterflyY);
				drawButterfly(50,15,//vertex 1
								50,-3,90,5,50,40, //bezier vertex 1
								50,15, //vertex 2
								50,-3,10,5,50,40, //bezier vertex 2
								color(188,218,232)); //light blue fill 
			}
		
	}//screenie 3 closing bracket 
	
	//DRAWING SCREEN 4:FLOWER THAT BREATHES IN AND OUT 
	if(screenie == 4){
		background(198,224,255); //light blue background
		frameRate(5); 
		
		//FLOWER CLASS THAT BREATHES 
			for(var i = 0; i < breathers.length;i++){
				breathers[i].breathe(); //calling breathe method 
				breathers[i].display(); //calling display method
			} 
	
	}//screenie 4 closing bracket 
	
	//DRAWING SCREEN 5:PARTICLES MOVING AROUND: SOOTHING 
		if(screenie == 5){
			background(255,169,216); //light pink background 
			frameRate(7); 
			
		//BUBBLE FOR LOOP 
			for (let i = 0; i < 3; i++){
				let s = new Spot();
				spots.push(s);
				}
			for (let i = spots.length - 1; i>=0;i--){
				spots[i].update(); //calling update method 
				spots[i].show(); //calling present method
			//get rid of this specific bubble 
					if(spots[i].finished()){
							spots.splice(i,3);
							}
			}
				
			}//end of screenie 5 bracket 
				
	
} //end of draw bracket 
	
//SUN FUNCTION 
	function drawSun(sunX,sunY,sunW,sunH,color,thickness){
			 noStroke(); //no outline
			 strokeWeight(thickness);
			 fill(color);
			 ellipse(sunX,sunY,sunW,sunH);
		 }

//DRAW CLOUD FUNCTION 
	function drawCloud(cloud1X1,cloud1Y1,cloud1W1,cloud1H1,
									cloud1X2,cloud1Y2,cloud1W2,cloud1H2,
									cloud1X3,cloud1Y3,cloud1W3,cloud1H3,
									cloud1X4,cloud1Y4,cloud1W4,cloud1H4,
									cloud1X5,cloud1Y5,cloud1W5,cloud1H5,
									cloud1X6,cloud1Y6,cloud1W6,cloud1H6,
									cloud1X7,cloud1Y7,cloud1W7,cloud1H7,
									cloud1X8,cloud1Y8,cloud1W8,cloud1H8,
										color1C){ 
			noStroke(); //no outline
			fill(color1C); //white clouds
			ellipseMode(CENTER);
			ellipse(cloud1X1,cloud1Y1,cloud1W1,cloud1H1); //circle 1
			ellipse(cloud1X2,cloud1Y2,cloud1W2,cloud1H2); //circle 2
			ellipse(cloud1X3,cloud1Y3,cloud1W3,cloud1H3); //circle 3
			ellipse(cloud1X4,cloud1Y4,cloud1W4,cloud1H4); //circle 4
			ellipse(cloud1X5,cloud1Y5,cloud1W5,cloud1H5); //circle 5
			ellipse(cloud1X6,cloud1Y6,cloud1W6,cloud1H6); //circle 6
			ellipse(cloud1X7,cloud1Y7,cloud1W7,cloud1H7); //cirlce 7
			ellipse(cloud1X8,cloud1Y8,cloud1W8,cloud1H8); //circle 8
		}

//DRAW TREE FUNCTION 
function drawTree(branchX,branchY,branchW,branchH, colorB, thickness, //tree branch
               triangle1X,triangle1Y,triangle1X2,triangle1Y2,triangle1X3,triangle1Y3, color1,thickness,//triangle 1
               triangle2X,triangle2Y,triangle2X2,triangle2Y2,triangle2X3,triangle2Y3, color2, thickness, //triangle 2
               triangle3X,triangle3Y,triangle3X2,triangle3Y2,triangle3X3,triangle3Y3, color3, thickness){ //triangle 3
	
										//tree branch
                      stroke(colorB);
                      strokeWeight(thickness);
                      fill(colorB);
                      rect(branchX,branchY, branchW, branchH);
                      
                    //tree triangle 1
                      stroke(color1);
                      strokeWeight(thickness);
                      fill(color1);
                      triangle(triangle1X,triangle1Y,triangle1X2,triangle1Y2,triangle1X3,triangle1Y3);
 
                    //tree triangle 2
                      stroke(color2);
                      strokeWeight(thickness);
                      fill(color2);
                      triangle(triangle2X,triangle2Y,triangle2X2,triangle2Y2,triangle2X3,triangle2Y3);
                    
                    //tree triangle 3
                      stroke(color3);
                      strokeWeight(thickness);
                      fill(color3);
                      triangle(triangle3X,triangle3Y,triangle3X2,triangle3Y2,triangle3X3,triangle3Y3);
}

//FLOWER FUNCTIONS 
	function drawStem(stemX,stemY,stemW,stemH,thickness,colorS){
			//FLOWER STEM
			stroke(colorS);
			strokeWeight(thickness);
			fill(colorS);
			rect(stemX,stemY,stemW,stemH);
		}

function drawFlower(flowerX,flowerY,flowerW,flowerH,colorF){
		//FLOWER
			translate(680,260);
			stroke(colorF);
			fill(colorF);
			for (var i = 0; i < 12; i ++) {
				ellipse(flowerX,flowerY,flowerW,flowerH);
				rotate(PI/4);
			}
		}
	
function drawFlowerCenter(centerX,centerY,centerW,centerH,colorFC){ //center circle
		noStroke();
		fill(colorFC);
		ellipse(centerX,centerY,centerW,centerH);
}

//WATER WAVE FUNCTION 1
function makeWave(){
	//increment theta by 0.01 to make it slow paced 
	theta += 0.01;
	var x = theta;
	//calculates a y value for each x value in sine function
	for(var i = 0; i < yvalues.length; i++){ 
		yvalues[i] = sin(x)*amplitude/1.6; //y values array for integer 
		x+=ix; //x plus or equal to increment of x
	}
}

//WATER WAVE FUNCTION 2 
function bubbleWave(){
	noStroke();
	fill(3,24,248); //blue color of ocean 
	
	//loop bubbles of waves at each (x,y) location 
	for (var x = 0; x < yvalues.length; x++){
		ellipse(x*xspace, height/1.1+yvalues[x],20,20); //draws circle at each (x,y) location 
	}
}

//RAINBOW FUNCTION 
	function drawRainbow(centerX,centerY){
	
	//RED
	stroke(255,0,0); //red stroke
  fill(255,0,0); //red fill
  ellipse(centerX,centerY,300,300);

	//ORANGE
	stroke(257,127,0); //orange stroke
  fill(257,127,0); //orange
  ellipse(centerX,centerY,280,280);

	//YELLOW
	stroke(255,255,0); //yellow stroke
  fill(255,255,0); //yellow
  ellipse(centerX,centerY,260,260);

	//GREEN
	stroke(0,255,0); //green stroke
  fill(0,255,0); //green
  ellipse(centerX,centerY,240,240);

	//BLUE
	stroke(0,0,255); //blue stroke
  fill(0,0,255); //blue 
  ellipse(centerX,centerY,220,220);

	//INDIGO 
	stroke(75,0,130); //indigo stroke
  fill(75,0,130); //indigo
  ellipse(centerX,centerY,200,200);

	//VIOLET 
	stroke(148,0,211); //violet stroke
  fill(148,0,211); //violet
  ellipse(centerX,centerY,180,180);
  
	//BACKGROUND BLEND 
	stroke(70,130,255); //clear blue stroke
  fill(70,130,255); //clear blue background 
  ellipse(centerX,centerY,160,160);
}

//DRAW BUTTERFLY FUNCTION 
function drawButterfly(V1X,V1Y,//vertex 1
					B1,B2,B3,B4,B5,B6,//bezier vertex 1
					V2X,V2Y,//vertex 2
					C1,C2,C3,C4,C5,C6,//bezier vertex 2
					colorH){
					
				noStroke();
				fill(colorH); 
					beginShape(); //drawing butterfly with create shape 
						vertex(V1X,V1Y);
						bezierVertex(B1,B2,B3,B4,B5,B6);
						vertex(V2X,V2Y);
						bezierVertex(C1,C2,C3,C4,C5,C6);
					endShape();
}

function keyPressed(){
  if(screenie == 5){
    screenie = 1;
  	}
  else{
    screenie++;
  }
}