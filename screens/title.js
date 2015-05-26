game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     **/
    onResetEvent: function() {
        me.game.world.addChild(new me.sprite(0, 0, me.loader.getImage('title-screen')),
        me.input.bindKey(me.input.KEY.ENTER, "start");
//        me.game.world.addChild(titleImage, 1)
    },
    /**	
     *  action to perform when leaving this screen (state change)
     **/
    onDestroyEvent: function() {

    }
});
