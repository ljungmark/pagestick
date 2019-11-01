interface PagestickInterface {
    identifyPerferredColorScheme(): void;
    changeTheme(theme?: string): void;
}

class Pagestick implements PagestickInterface {
    private preferredColorScheme: string;
    private preferredDarkTheme: string = 'dark';
    private preferredLightTheme: string = 'light';
    private theme: string = 'automatic';

    constructor() {
        this.identifyPerferredColorScheme();
        this.changeTheme();
    }

    public identifyPerferredColorScheme(): void {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.preferredColorScheme = 'dark';
        } else {
            this.preferredColorScheme = 'light';
        }

        const theme = localStorage.getItem('theme');
        this.theme = theme ? theme : 'automatic';
    }

    public changeTheme(theme?: string): void {
        if (!theme && this.theme !== 'automatic') {
            document.querySelector('html').dataset.theme = this.theme;
        } else if (!theme && this.theme === 'automatic') {
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', 'automatic');
        } else if (theme && theme !== 'automatic') {
            this.theme = theme;
            document.querySelector('html').dataset.theme = theme;
            localStorage.setItem('theme', theme);
        } else if (theme && theme === 'automatic') {
            this.theme = theme;
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', theme);
        }

        return;
    }
}

export { Pagestick };
