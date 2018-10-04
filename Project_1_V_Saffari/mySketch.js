//PEACEFUL=ADJECTIVE
  //IDEAS: 
    //background:forest, ocean, and water
    //background: butterflies and birds flying around
    //background: flowers and nature
    //character meditating/in sitting meditation position 
    //action: taking deep breaths in and out
    //action: character moves to do a yoga pose
    //action: character listening to music and music notes flow out of head

function setup() {
	createCanvas(800,800);
	background(167,216,255);//clear blue background
}

function draw() {

//DRAW TREE: CALLING TO FUNCTION
drawTree(100,300,30,90,color(107,62,36),2,//tree branch
         55,300,175,300,115,225,color(34,145,107),2, //triangle 1
         55,225,115,150,175,225,color(34,145,107),2, //triangle 2
         55,150,115,75,175,150,color(34,145,107),2); //triangle 3
	
	
//DRAW SUN:CALLING TO FUNCTION 
	drawSun(600,80,100,100,color(232,243,109),2);
}

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
    

function drawSun(sunX,sunY,sunW,sunH,color,thickness){
   stroke(color);
   strokeWeight(thickness);
   fill(color);
   ellipse(sunX,sunY,sunW,sunH);
 }
 