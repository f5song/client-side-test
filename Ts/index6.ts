interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

export function filterPersons(
    persons: Person[],
    personType: 'user',
    criteria: Omit<Partial<User>, 'type'>
): User[];
export function filterPersons(
    persons: Person[],
    personType: 'admin',
    criteria: Omit<Partial<Admin>, 'type'>
): Admin[];
export function filterPersons(
    persons: Person[],
    personType: 'user' | 'admin',
    criteria: Omit<Partial<User | Admin>, 'type'>
): (User | Admin)[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            const criteriaKeys = Object.keys(criteria) as (keyof Omit<Partial<User | Admin>, 'type'>)[];
            return criteriaKeys.every((fieldName) => person[fieldName] === criteria[fieldName]);
        }) as (User | Admin)[];
}


export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
