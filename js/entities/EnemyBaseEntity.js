game.EnemyBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //what the image is
                image: "tower",
                //how wide the image will be
                width: 100,
                //how tall the image will be
                height: 100,
                spritewidth: "100",
                spriteheight: "100",
                getShape: function() {
                    return (new me.Rect(0, 0, 100, 70)).toPolygon();
                }
            }]);
        //tells the code that the tower isn't broken yet
        this.broken = false;
        //the towers health
        this.health = 10;
        //always update the health
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        //tells  that this is the code for the enemy base
        this.type = "EnemyBaseEntity";
        //the castle doesn't move
        this.renderable.addAnimation("idle", [0]);
        //once the castle is broken, then the picture goes to the next   
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    
    update: function(delta) {
        //the tower is broken, the health is zero
        if (this.health <=0) {
            this.broken = true;
            //you win if you destroy the other teams base 
            game.data.win = true;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollision: function(){

    },

    loseHealth: function(){
      this.health--;  
    }

});


