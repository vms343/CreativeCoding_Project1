//PEACEFUL=ADJECTIVE
  //IDEAS: 
    //background:forest, ocean, and water (sine wave for water) 
    //background: butterflies and birds flying around
    //background: flowers and nature
    //character meditating/in sitting meditation position 
    //action: taking deep breaths in and out
    //action: character moves to do a yoga pose
    //action: character listening to music and music notes flow out of head

//WAVE VARIABLES
var xspace = 4; //space between each x value
var w; //width of wave

var theta = 500.0; //angle starts at 0
var amplitude = 70.0; //height of wave 
var period = 200.0; //how long until wave repeats again
var ix; //increment x
var yvalues; //array of y (height) values for every x value



function setup() {
	//MAIN SETUP 
	createCanvas(800,800);
	background(167,216,255);//clear blue background
	
	//WAVE SETUP 
	w = width; //width of wave 
	ix = (TWO_PI /period) * xspace; //increment x by TWO_PI/period 
	yvalues = new Array(floor(w+5/xspace));//each y value produces new Array 
	
}

function draw() {

//DRAW TREE: CALLING TO FUNCTION
drawTree(100,300,30,90,color(107,62,36),2,//tree branch
         55,300,175,300,115,225,color(34,145,107),2, //triangle 1
         55,225,115,150,175,225,color(34,145,107),2, //triangle 2
         55,150,115,75,175,150,color(34,145,107),2); //triangle 3
	
	
//DRAW SUN:CALLING TO FUNCTION 
	drawSun(600,80,100,100,color(232,243,109),2);
	
//DRAW WAVE:CALLING TO FUNCTION 
	makeWave();
//DRAW WAVE BUBBLES:CALLING TO FUNCTION 
	bubbleWave();

//DRAW YOGI:CALLING TO FUNCTION 
	drawYogi(400,300,100,100,color(255,227,197),2, //yogi head
					 380,290,20,26,color(163,255,155),2, //eye1
					 420,290,20,26,color(163,255,155),2, //eye2
					 380,295,10,10,color(60),2, //pupil1
					 420,295,10,10,color(60),2);//pupil2

//DRAW FLOWER:CALLING TO FUNCTION 
	drawFlower(600,500,30,30,color(230,109,234),2, //center of flower
					color(255,250,170),600,450,30,30);

	//FIX HEART: MAKE IT MOVE TO BODY OF PERSON 

//DRAW HEART:CALLING TO FUNCTION
	drawHeart(color(255),
						50,15,//vertex1
						50,-5,90,5,50,40, //bezier1
						50,15, //vertex2
						50,-5,10,5,50,40); //bezier2
						
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

//SUN FUNCTION 
function drawSun(sunX,sunY,sunW,sunH,color,thickness){
   stroke(color);
   strokeWeight(thickness);
   fill(color);
   ellipse(sunX,sunY,sunW,sunH);
 }

//FLOWER FUNCTION: (MAKE INTO ARRAY) 
function drawFlower(flowerX,flowerY,flowerW,flowerH,colorF,thickness, //center of flower
										colorC,centerX,centerY,centerW,centerH){ //loop of 5 petals


		//for loop of 5 petals around center of flower
	
			for(var i = 0; i < 5; i++){
				noStroke();
				strokeWeight(thickness);
				fill(colorF);
				ellipse(flowerX,flowerY,flowerW,flowerH); //y moves 50 to the left for each petal
				rotate(radians(72));
			}

		
		//center of flower 
			noStroke();
			strokeWeight(thickness);
			fill(colorC);
			ellipse(centerX,centerY,centerW,centerH);

	
	}

//WATER WAVE FUNCTION 1
function makeWave(){
	//increment theta by 0.01 to make it slow paced 
	theta += 0.01;
	var x = theta;
	//calculates a y value for each x value in sine function
	for(var i = 0; i < yvalues.length; i++){ 
		yvalues[i] = sin(x)*amplitude/1.5; //y values array for integer 
		x+=ix; //x plus or equal to increment of x
	}
}

//??QUESTION!! HOW DO I MAKE IT STOP AFTER THE BOTTOM COMPLETELY FILLS UP 

//WATER WAVE FUNCTION 2 
function bubbleWave(){
	noStroke();
	fill(3,24,248); //blue color of ocean 
	
	//loop bubbles of waves at each (x,y) location 
	for (var x = 0; x < yvalues.length; x++){
		ellipse(x*xspace, height/1.3+yvalues[x],10,10); //draws circle at each (x,y) location 
	}
}

//?? HOW DO I CREATE A NEW PAGE---SET THIS PAGE AS BACKGROUND? SO I CAN DO MOUSEPRESSED AND CREATE NEW IMAGE ON TOP

//YOGI IN LANDSCAPE MEDITATING 

function drawYogi(yogiX,yogiY,yogiW,yogiH,colorH,thickness, //yogi head
									eye1X,eye1Y,eye1W,eye1H,colorE1,thickness, //yogi eye1 
									eye2X,eye2Y,eye2W,eye2H,colorE2,thickness, //yogi eye2
									pupil1X,pupil1Y,pupil1W,pupil1H,colorP1,thickness,//yogi pupil1
									pupil2X,pupil2Y,pupil2W,pupil2H,colorP2,thickness){ //yogi pupil2
	
	//yogi head 
	 stroke(colorH);
   strokeWeight(thickness);
   fill(colorH);
   ellipse(yogiX,yogiY,yogiW,yogiH);

	//eye1
		stroke(colorE1);
		strokeWeight(thickness);
		fill(colorE1);
		ellipse(eye1X,eye1Y,eye1W,eye1H,colorE1,thickness);
	
	//eye2
		stroke(colorE2);
		strokeWeight(thickness);
		fill(colorE2);
		ellipse(eye2X,eye2Y,eye2W,eye2H,colorE2,thickness);
	
	//pupil1
		stroke(colorP1);
		strokeWeight(thickness);
		fill(colorP1);
		ellipse(pupil1X,pupil1Y,pupil1W,pupil1H,colorP1,thickness); 
	
	//pupil2
		stroke(colorP2);
		strokeWeight(thickness);
		fill(colorP2);
		ellipse(pupil2X,pupil2Y,pupil2W,pupil2H,colorP2,thickness);
	
	//HAIR
	
	//BODY
	
	//ADD MEDITATION POSITION
	
	//WHEN YOU CLICK THE YOGI'S EYES CLOSE
	
}

	//HEART (BREATHING): MAKE INTO CLASS OF HEART (DRAW HEART + FUNCTIONALITY OF BREATHING) 

	function drawHeart (colorH, //color of heart
											vHX,vHY, //vertex
											hx1,hy1,hx2,hy2,hx3,hx4, //bezier1
											vH2X,vH2Y, //vertex2
											h2x1,h2y1,h2x2,h2y2,h2x3,h2x4){ //bezier2
		noStroke();
		fill(random(colorH),random(colorH),random(colorH)); //random colors of the heart 
		beginShape(); //drawing heart
			vertex(vHX,vHY); //(50,15);
			bezierVertex(hx1,hy1,hx2,hy2,hx3,hx4); //curve (50,-5,90,5,50,40);
			vertex(vH2X,vH2Y); //(50,15);
			bezierVertex(h2x1,h2y1,h2x2,h2y2,h2x3,h2x4) //curve (50,-5,10,5,50,40);
		endShape();
	}


//??HOW DO YOU ORGANIZE YOUR CODE SO EACH TIME YOU CLICK "P" IT GOES TO NEXT PAGE