game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     **/
    onResetEvent: function() {
        me.game.world.addChild(new me.sprite(0, 0, me.loader.getImage('title-screen')),
                me.input.bindKey(me.input.KEY.ENTER, "start"),
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function() {
                        this._super(me.Renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.height]);
                        this.font = new me.Font("Arial", 46, "white");
                    },
                    draw: function(renderer) {
                        this.font.draw(renderer.getContext(), "Jurassic Park", 540, 130);
                          this.font.draw(renderer.getContext(), "Press Enter TO Play", 250, 530);
                    }
                }))),
                this.handler = me.event.subcribe(me.event.KEYDOWN, function(action, keyCode, edge) {
                    if (action === "start") {
                        me.state.change(me.state.PLAY);
                    }
                }
                ));
    },
    onDestoryEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
    }
});