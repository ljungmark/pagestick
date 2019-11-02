require('./mocks/matchMedia.mock');

const Pagestick = require('../dist/pagestick').Pagestick;

test('Pagestick is a function', () => {
    expect(Pagestick).toBeInstanceOf(Function);
});

test('Pagestick constructor', () => {
    const ps = new Pagestick();
    expect(ps).toBeInstanceOf(Pagestick);
});
