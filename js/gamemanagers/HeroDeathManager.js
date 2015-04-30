game.HeroDeathManager = Object.extend({
    init: function(x, y, settings){
        this.alwaysUpdate = true; 
    },
    update: function(){  
        //if the player dies, remove him from the game
        if(game.data.player.dead){
            me.game.world.removeChild(game.data.player);
            me.game.world.removeChild(game.data.miniPlayer);
            //respawn the player at these coordinates
            me.state.current().resetPlayer(10, 0);
        }  
        //return the player
        return true;
    }
});

