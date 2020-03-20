class Partical{

    constructor(x, y, hu, firework){

        this.pos = createVector(x, y);
        this.firework = firework;
        this.lifespan = 255;
        this.hu = hu;

        if(this.firework){

            this.vel = createVector(0, random(-12, -5));

        }else{

            this.vel = p5.Vector.random2D();
            this.vel.mult(random(2,25));

        }
        
        this.acc = createVector(0, 0);

    }

    applyForce(force){

        this.acc.add(force);

    }

    update(){

        if(!this.firework){

            this.vel.mult(0.9);
            this.lifespan -= 9;

        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }

    display(){

        colorMode(HSB);

        if(!this.firework){

            strokeWeight(random(1, 3));
            stroke(this.hu, 255, 255, this.lifespan);

        }else{

            strokeWeight(random(1, 4));
            stroke(255);

        }
        point(this.pos.x, this.pos.y);

    }
}