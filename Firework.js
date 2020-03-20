class Firework{

    constructor(){

        this.hu = random(255)
        this.firework = new Partical(random(width), height, this.hu, true);
        this.exploded = false;
        this.particals = [];

    }

    update(){

        if(!this.exploded){

            this.firework.update();
            this.firework.applyForce(gravity);
        
            if(this.firework.vel.y >= 0){

                this.exploded = true;
                this.explode();

            }

        }

        for(var i = 0; i < this.particals.length; i++){

            this.particals[i].applyForce(gravity);
            this.particals[i].update();

        }

    }

    explode(){

        for(var i = 0; i < 100; i++){

            var p = new Partical(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particals.push(p);

        }

    }

    display(){

        if(!this.exploded){

            this.firework.display();

        }
        
        for(var i = 0; i < this.particals.length; i++){

            this.particals[i].display();

        }
    }
}