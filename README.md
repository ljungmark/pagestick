# Pagestick
Simple theme switcher for web sites through a data attribute attached to the `html` tag.

## Features
* Can automatically pick dark or light theme based on system settings
  * This feature is disabled when actively choosing a certain theme
  * This feature can be re-enabled if the visitor switches back to `automatic`
* Remembers your preferred theme for next visit

## Usage
* Initialize the functionality and attach event listeners. Below is an example that would listen to buttons that has the classes `js-changeTheme` in combination with a `data-theme="theme-name"` data attribute.
```js
const pagestick = new Pagestick();
window.matchMedia('(prefers-color-scheme: dark)').addListener(_ => pagestick.changeTheme());
document.querySelectorAll('.js-changeTheme').forEach(element => element.addEventListener('click', event => {
    const theme = (<HTMLAnchorElement>event.currentTarget).dataset.theme;
    pagestick.changeTheme(theme ? theme : 'automatic');
}));
```

## Good practice
I recommend that you have a default theme attached to the `html` tag, in case the visitor has disabled JavaScript.
