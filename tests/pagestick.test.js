window.matchMedia = jest.fn().mockImplementation(query => {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
});

const Pagestick = require('../dist/pagestick').Pagestick;

test('Pagestick is a function', () => {
    expect(Pagestick).toBeInstanceOf(Function);
});

test('Pagestick constructor', () => {
    const ps = new Pagestick();
    expect(ps).toBeInstanceOf(Pagestick);
});
