const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Jayden', 77, "jsddjd@gmail.com", 9);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual('Manager');
});

