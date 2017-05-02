


var drawClock = function() {
background(64, 211, 222);
fill(51, 28, 1);
rect(0,269,417,162);
fill(0, 0, 0);
rect(73,178,270,90);
fill(201, 128, 128);
rect(91,186,229,73);
};



var drawScene = function() {
background(64, 211, 222);
fill(97, 99, 43);
rect(-9,237,486,191);
//bed
fill(51, 28, 1);
rect(381,207,10,108);
rect(197,207,10,108);
noStroke();
rect(207,253,174,21);
fill(255, 0, 0);
rect(207,233,174,20);
fill(255, 0, 0);
arc(341, 239, 114, 27, -179, -90);
fill(255, 255, 255);
rotate(40);
rect(405,-99,20,50,90);
rotate(-40);
fill(84, 64, 14);
rect(70,184,90,90);
fill(0, 0, 0);
rect(87,162,54,23);
fill(255, 0, 0);
rect(95,164,39,19);

var btn1 = {
    x: 199,
    y: 208,
    width: 190,
    height: 103
};

var drawButton = function(btn) {
    textSize(19);
    textAlign(LEFT, TOP);
};


mouseClicked = function() {
    if (mouseX >= btn1.x && mouseX <= (btn1.x+btn1.width) &&
        mouseY >= btn1.y && mouseY <= (btn1.y+btn1.height))     {
        println("It's a bed...");    
    }
};


drawButton(btn1);

var btn2 = {
    x: 85,
    y: 159,
    width: 57,
    height: 26
};

var drawButton = function(btn) {
    textSize(19);
    textAlign(LEFT, TOP);
};


mouseClicked = function() {
    if (mouseX >= btn2.x && mouseX <= (btn2.x+btn2.width) &&
        mouseY >= btn2.y && mouseY <= (btn2.y+btn2.height))     {
        drawClock();
    }
};


drawButton(btn2);





};






var drawStart = function() {
background(52, 73, 94);
textSize(29);
text("A simple point and click game",11,90);

var btn1 = {
    x: 116,
    y: 143,
    width: 150,
    height: 50
};

var drawButton = function(btn) {

    fill(0, 234, 255);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text("        Start", btn.x+10, btn.y+btn.height/4);
};


mouseClicked = function() {
    if (mouseX >= btn1.x && mouseX <= (btn1.x+btn1.width) &&
        mouseY >= btn1.y && mouseY <= (btn1.y+btn1.height))     {
         drawScene();

    }
};


drawButton(btn1);



};

drawStart();

