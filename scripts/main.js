require('blocks');
require('units');
require('planets');
require('items');

Events.on(ClientLoadEvent, e => {
    const dialog = new BaseDialog("This mod is in W.I.P. Do you wish to continue?");
    dialog.cont.button("Yes", () => dialog.hide());
    dialog.cont.button("No", () => Core.app.exit());
});