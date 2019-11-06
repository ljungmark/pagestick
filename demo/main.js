import { Pagestick } from "../dist/pagestick.js";

var pagestick = new Pagestick();
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (_) { return pagestick.changeTheme(); });
document.querySelectorAll('.js-changeTheme').forEach(function (element) {
        return element.addEventListener('click', function (event) {
        var theme = event.currentTarget.dataset.theme;
        pagestick.changeTheme(theme ? theme : 'automatic');
    });
});
