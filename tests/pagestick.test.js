require('./mocks/matchMedia.mock');

const Pagestick = require('../dist/pagestick').Pagestick;

test('Pagestick is a function', () => {
    expect(Pagestick).toBeInstanceOf(Function);
});

test('Pagestick constructor', () => {
    const ps = new Pagestick();
    expect(ps).toBeInstanceOf(Pagestick);
});

test('Themes', () => {
    const ps = new Pagestick();
    expect(ps.theme).toBe('automatic');
    expect(ps.preferredColorScheme).toBe('light');
    ps.changeTheme('dark');
    expect(ps.theme).toBe('dark');
    ps.changeTheme('light');
    expect(ps.theme).toBe('light');
});
