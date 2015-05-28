game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     **/
    onResetEvent: function() {
        me.game.world.addChild(new me.sprite(0, 0, me.loader.getImage('title-screen')),
                me.input.bindKey(me.input.KEY.ENTER, "start"),
                this.handler = me.event.subcribe(me.event.KEYDOWN, function(action, keyCode, edge) {
                    if (action === "start") {
                        me.state.change(me.state.PLAY);
                    }
                }
                ));
    },
    onDestoryEvent: function() {
        
    }
});