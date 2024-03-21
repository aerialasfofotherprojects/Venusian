const venus = Vars.content.planet("venusian-venus");

//venus configs
//blocks and items unlocked in tech tree when first playing the planet
venus.unlockedOnLand.add("core-ember");

Events.on(ClientLoadEvent, e => {
    const dialog = new BaseDialog("Warning! W.I.P. Mod!");
    dialog.cont.add("This mod is in [red]W.I.P.[]! Do you [yellow]wish[] to continue?")
    dialog.cont.button("Yes", () => {
        dialog.hide();
    }).row();
    dialog.cont.button("No", () => Core.app.exit()).row();
    dialog.show();
});