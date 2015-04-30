game.MiniMap = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
            //the image
            image: "minimap",
            //the width of the image
            width: 630, 
            //the height of the image
            height: 230,
            spritewidth: 630,  
            spriteheight: 230,
            getShape: function(){
                return (new me.Rect(0, 0, 630, 230)).toPolygon();
            }
        }]);
        //the image is floating 
        this.floating = true;
    
    }
});