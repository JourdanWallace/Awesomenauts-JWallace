game.GameTimerManager = Object.extend({
    init: function(x, y, settings){
        this.now = new Date().getTime();
        this.lastCreep = new Date().getTime();
        //the game is not paused
        this.paused = false;
        //always update to see if paused
        this.alwaysUpdate = true;
    },
    update: function(){
        this.now = new Date().getTime();       
        this.goldTimerCheck();
        this.creepTimerCheck();     
        
        return true;
    },
    goldTimerCheck: function(){
        //after every 20 seconds, give the player one new piece of gold 
        if(Math.round(this.now/1000)%20 ===0 && (this.now - this.lastCreep >= 1000)){
            game.data.gold += (game.data.exp1+1);
            console.log("Current gold: " + game.data.gold);
        }
    },
    playerRespawnCheck: function(){
        //if the player dies remove him from the game
        if(game.data.player.dead){
            me.game.world.removeChild(game.data.player);
            //respawn the player
            me.state.current().resetPlayer(10, 0);
        }
    },
    creepTimerCheck: function(){   
        //send a new creep after every 10 seconds
        if(Math.round(this.now/1000)%10 ===0 && (this.now - this.lastCreep >= 1000)){
            this.lastCreep = this.now;
            var creepe = me.pool.pull("EnemyCreep", 2000, 0, {});
            //add the creep
            me.game.world.addChild(creepe, 5);
        }
    }
});


