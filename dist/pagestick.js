"use strict";
exports.__esModule = true;
var Pagestick = /** @class */ (function () {
    function Pagestick() {
        this.preferredDarkTheme = 'dark';
        this.preferredLightTheme = 'light';
        this.theme = 'automatic';
        this.identifyPerferredColorScheme();
        this.changeTheme();
    }
    Pagestick.prototype.identifyPerferredColorScheme = function () {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.preferredColorScheme = 'dark';
        }
        else {
            this.preferredColorScheme = 'light';
        }
        var theme = localStorage.getItem('theme');
        this.theme = theme ? theme : 'automatic';
    };
    Pagestick.prototype.changeTheme = function (theme) {
        if (!theme && this.theme !== 'automatic') {
            document.querySelector('html').dataset.theme = this.theme;
        }
        else if (!theme && this.theme === 'automatic') {
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', 'automatic');
        }
        else if (theme && theme !== 'automatic') {
            this.theme = theme;
            document.querySelector('html').dataset.theme = theme;
            localStorage.setItem('theme', theme);
        }
        else if (theme && theme === 'automatic') {
            this.theme = theme;
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', theme);
        }
        return;
    };
    return Pagestick;
}());
exports.Pagestick = Pagestick;
