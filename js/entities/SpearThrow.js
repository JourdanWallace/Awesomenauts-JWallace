game.SpearThrow = me.Entity.extend({
    init: function(x, y, settings, facing){
       this._super(me.Entity, 'init',[x, y, {
            //the image
            image: "spear",
            //the width of the image
            width: 48,
            //the height of the image
            height:48,
            spritewidth: "48",
            spriteheight: 48,
            getShape: function(){
                return (new me.Rect(0, 0, 48, 48)).toPolygon();
            }
        }]);
        this.alwaysUpdate = true;
        //how fast the spear goes
        this.body.setVelocity(8, 0);
        this.attack = game.data.ability3*3;
        this.type = "spear";
        //whichever way the player is facing determines which way the spear goes
        this.facing = facing
    },
    
    update: function(delta){
        if(this.facing === "left"){
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        }else{         
            this.body.vel.x += this.body.accel.x * me.timer.tick; 
        }
         
        me.collision.check(this, true, this.collideHandler.bind(this), true);
        
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);   
        return true;
    },
    
     collideHandler: function(response){
         //the creeps and base can both be attacked by the spear
        if(response.b.type==='EnemyBase' || response.b.type==='EnemyCreep'){
            //if attacked, remove the base
           response.b.loseHealth(this.attack);
           me.game.world.removeChild(this);
        }
    }
});



