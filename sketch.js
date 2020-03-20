var fireworks = [];
var gravity;

function setup(){

    colorMode(RGB);
    createCanvas(400, 300);
    gravity = createVector(0, 0.2);
    background(0);

}

function draw(){

    colorMode(RGB);
    background(0, 22);
    if(random(1) < 0.01){

        fireworks.push(new Firework());

    }
    for(var i = 0; i < fireworks.length; i++){

        fireworks[i].update();
        fireworks[i].display();

    }

}