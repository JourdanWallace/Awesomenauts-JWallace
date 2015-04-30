game.LoadProfile = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('load-screen')), -10); // TODO
                //the buttons are visible until clicked
                document.getElementById("input").style.visibility = "visible";
                document.getElementById("load").style.visibility = "visible";
                //unbind all the keys after the player leaves the buy screen 
                me.input.unbindKey(me.input.KEY.B);
                me.input.unbindKey(me.input.KEY.Q);
                me.input.unbindKey(me.input.KEY.E);
                me.input.unbindKey(me.input.KEY.W);
                me.input.unbindKey(me.input.KEY.A);
                
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        //the text color and font
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font("Broadway", 26, "red");
                    },
                    
                    draw: function(renderer){
                        //put in your username and password
                        this.font.draw(renderer.getContext(), "ENTER YOUR USERNAME AND PASSWORD", this.pos.x, this.pos.y);       
                    }
                
                }))); 
                     
                
        },
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            //hide the buttons affter the player clicks them
             document.getElementById("input").style.visibility = "hidden";
             document.getElementById("load").style.visibility = "hidden";   
	}
}); 