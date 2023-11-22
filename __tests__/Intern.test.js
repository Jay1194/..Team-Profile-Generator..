const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Jayden', 9, 't.thomastaylort@gmail.com', 'Havard University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual('Intern');
});