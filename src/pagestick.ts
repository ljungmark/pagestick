interface PagestickInterface {
    identifyPerferredColorScheme(): void;
    currentTheme(): string;
    changeTheme(theme?: string): void;
}

class Pagestick implements PagestickInterface {
    private preferredColorScheme: string;
    private preferredDarkTheme: string = 'dark';
    private preferredLightTheme: string = 'light';
    private theme: string;

    constructor() {
        const theme = localStorage.getItem('theme');
        this.theme = theme ? theme : 'automatic';

        this.identifyPerferredColorScheme();
        this.changeTheme();
    }

    public identifyPerferredColorScheme(): void {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.preferredColorScheme = 'dark';
        } else {
            this.preferredColorScheme = 'light';
        }
    }

    public currentTheme(): string {
        return this.theme;
    }

    public changeTheme(theme?: string): void {
        if (theme && ((theme === 'system' && this.theme === 'automatic') || theme === 'automatic' && this.theme !== 'automatic')) {
            this.identifyPerferredColorScheme();
            this.theme = 'automatic';
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
            localStorage.setItem('theme', this.theme);
        } else if (theme && theme !== 'automatic' && theme !== 'system') {
            this.theme = theme;
            document.querySelector('html').dataset.theme = this.theme;
            localStorage.setItem('theme', this.theme);
        } else if (!theme && this.theme !== 'automatic') {
            document.querySelector('html').dataset.theme = this.theme;
        } else if (!theme && this.theme === 'automatic') {
            this.identifyPerferredColorScheme();
            document.querySelector('html').dataset.theme = this.preferredColorScheme === 'dark' ? this.preferredDarkTheme : this.preferredLightTheme;
        }

        return;
    }
}

export { Pagestick };
