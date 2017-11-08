/* global fin */
document.addEventListener('DOMContentLoaded', function() {
    const thisWin = fin.desktop.Window.getCurrent();
    const thisApp = fin.desktop.Application.getCurrent();
    thisWin.getState(state => {
        thisWin.restore();
    });
    function minimizeWindow() {
        thisWin.getState(state => {
            if (state !== 'minimized') {
                thisWin.minimize();
            } else {
                thisWin.removeEventListener('close-requested', minimizeWindow, () => {
                    thisApp.close();
                });
            }
        });
    }
    thisWin.addEventListener('close-requested', minimizeWindow);
});
