var Pagestick = /** @class */ (function () {
    function Pagestick() {
        this.preferredDarkTheme = 'dark';
        this.preferredLightTheme = 'light';
        var theme = localStorage.getItem('theme');
        this.theme = theme ? theme : 'automatic';
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
    };
    Pagestick.prototype.currentTheme = function () {
        return this.theme;
    };
    Pagestick.prototype.changeTheme = function (theme) {
        if (theme && ((theme === 'system' && this.theme === 'automatic') || theme === 'automatic' && this.theme !== 'automatic')) {
            this.identifyPerferredColorScheme();
            this.theme = 'automatic';
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', this.theme);
        }
        else if (theme && theme !== 'automatic' && theme !== 'system') {
            this.theme = theme;
            document.querySelector('html').dataset.theme = this.theme;
            localStorage.setItem('theme', this.theme);
        }
        else if (!theme && this.theme !== 'automatic') {
            document.querySelector('html').dataset.theme = this.theme;
        }
        else if (!theme && this.theme === 'automatic') {
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
        }
        return;
    };
    return Pagestick;
}());
export { Pagestick };
//# sourceMappingURL=pagestick.js.map