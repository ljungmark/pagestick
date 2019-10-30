# Pagestick
Simple theme switcher for web sites through a data attribute attached to the `html` tag.

## Features
* Can automatically pick dark or light theme based on system settings
    * This feature is disabled when actively choosing a certain theme
    * This feature can be re-enabled if the visitor switches back to `automatic` theme
* Remembers your preferred theme for next visit

## Usage
### HTML
* Setup a default theme attached to the `html` tag in case the visitor has disabled JavaScript.
```html
<html data-theme="light">
    ...
    <button class="js-changeTheme" data-theme="light">Light</button>
    <button class="js-changeTheme" data-theme="dark">Dark</button>
    <button class="js-changeTheme">Automatic</button>
```

### JavaScript
* Initialize the functionality and attach event listeners
```js
const pagestick = new Pagestick();
window.matchMedia('(prefers-color-scheme: dark)').addListener(_ => pagestick.changeTheme());
document.querySelectorAll('.js-changeTheme').forEach(element => element.addEventListener('click', event => {
    const theme = (<HTMLAnchorElement>event.currentTarget).dataset.theme;
    pagestick.changeTheme(theme ? theme : 'automatic');
}));
```
*  In the example above, buttons that has the classes `js-changeTheme` will trigger theme switching on click
    * If there is a `data-theme` attribute on the button, it'll switch to that theme. Eg; `data-theme="theme-name"`
    * If the button lacks a `data-theme` attribute, it'll swtich back to `automatic` theme

### CSS
* Setup your theme colors and attributes in CSS
```css
:root[data-theme="dark"] {
    --color-background: hsl(0, 0%, 0%);
    --color-font: hsl(0, 0%, 100%);
}
:root[data-theme="light"] {
    --color-background: hsl(0, 0%, 100%);
    --color-font: hsl(0, 0%, 0%);
}
```
