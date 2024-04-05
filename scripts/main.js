Events.on(ClientLoadEvent, e => {
    const dialog = new BaseDialog("Warning! W.I.P. Mod!");
    dialog.cont.add("This mod is in [red]W.I.P[]! Do you [yellow]wish[] to continue?").row();
    dialog.cont.add("Also this is a [blue]demo[] version so feel free to press yes and try it out!").row();
    dialog.cont.button("Yes", () => dialog.hide());
    dialog.cont.button("No", () => Core.app.exit());
    dialog.show();
});