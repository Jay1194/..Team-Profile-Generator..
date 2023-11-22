const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Jayden', 9, 't.thomastaylort@gmail.com', 'jay1194@github.com');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual('Engineer');
});