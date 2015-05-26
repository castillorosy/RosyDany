game.LoadProfile = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     **/
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("new-screen")), -10); // TODO
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("load").style.visibilty = "visible";


        me.input.unbindKey(me.input.KEY.B);
        me.input.unbindKey(me.input.KEY.Q);
        me.input.unbindKey(me.input.KEY.E);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.A);
//                subcribe to some events
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, "init", [10, 10, 300, 50]);
                this.font = new me.Font("Arial", 26, "white");
            },
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "enter your username and password", this.pos.x, this.pos.y);

//                     this is the continue page 
            }

        })));
    },
    /**	
     *  action to perform when leaving this screen (state change)
     **/
    onDestroyEvent: function() {
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("load").style.visibilty = "visible";
    }
});
