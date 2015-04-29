game.MiniMap = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
            image: "minimap",
            width: 630, 
            height: 230,
            spritewidth: 630,  
            spriteheight: 230,
            getShape: function(){
                return (new me.Rect(0, 0, 630, 230)).toPolygon();
            }
        }]);
        this.floating = true;
    
    }
});