const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Jayden Taylor', 9, 't.thomastaylort@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});