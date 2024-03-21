const venus = Vars.content.planet("venusian-venus");

function loadContent() { //running this func when yes is pressed
    
    //venus configs
    venus.ruleSetter = r => {
        //for rules, check
        //https://github.com/Anuken/Mindustry/core/src/mindustry/game/Rules.java
        r.waveTeam = Team.crux
        r.placeRangeCheck = false
        r.showSpawns = true
        r.fog = true
        r.staticFog = true
        r.lighting = false
        r.coreDestroyClear = true
    }
    //planet default attributes
    venus.defaultAttributes.set(Attributes.heat, 0.8);
    //blocks and items unlocked in tech tree when first playing the planet
    venus.unlockedOnLand.add("core-ember");
}

Events.on(ClientLoadEvent, e => {
    const dialog = new BaseDialog("This mod is in W.I.P. Do you wish to continue?");
    dialog.cont.button("Yes", () => {
        dialog.hide();
        loadContent();
    });
    dialog.cont.button("No", () => Core.app.exit());
    dialog.show();
});