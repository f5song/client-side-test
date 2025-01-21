// กำหนด interface สำหรับ User และ Admin ที่มีคุณสมบัติที่แตกต่างกัน
interface User {
    type: 'user';           // กำหนด type เป็น 'user'
    name: string;           // ชื่อของ User
    age: number;            // อายุของ User
    occupation: string;     // อาชีพของ User
}

interface Admin {
    type: 'admin';          // กำหนด type เป็น 'admin'
    name: string;           // ชื่อของ Admin
    age: number;            // อายุของ Admin
    role: string;           // ตำแหน่งหรือบทบาทของ Admin
}

// สร้างประเภท Person ที่รวมทั้ง User และ Admin
export type Person = User | Admin;

// ข้อมูลตัวอย่างของ Person ที่มีทั้ง User และ Admin
export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

// ฟังก์ชันนี้ใช้แสดงข้อมูลของ Person
export function logPerson(person: Person) {
    // ถ้าเป็น Admin แสดงบทบาทของ Admin, ถ้าเป็น User แสดงอาชีพของ User
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

// Overload: กรอง Person ที่เป็น User โดยไม่รวมฟิลด์ type และรับ criteria ที่เป็น partial ของ User
export function filterPersons(
    persons: Person[],
    personType: 'user',
    criteria: Omit<Partial<User>, 'type'>
): User[];

// Overload: กรอง Person ที่เป็น Admin โดยไม่รวมฟิลด์ type และรับ criteria ที่เป็น partial ของ Admin
export function filterPersons(
    persons: Person[],
    personType: 'admin',
    criteria: Omit<Partial<Admin>, 'type'>
): Admin[];

// ฟังก์ชันหลักสำหรับกรองข้อมูล User หรือ Admin
export function filterPersons(
    persons: Person[],
    personType: 'user' | 'admin', // ระบุประเภทของ Person ที่ต้องการกรอง (User หรือ Admin)
    criteria: Omit<Partial<User | Admin>, 'type'> // กรองข้อมูลที่ไม่รวมฟิลด์ 'type'
): (User | Admin)[] {
    // กรองข้อมูลตามประเภท personType (เป็น User หรือ Admin)
    return persons
        .filter((person) => person.type === personType) // กรองตามประเภท
        .filter((person) => {
            // รับคีย์จาก criteria แล้วเปรียบเทียบกับข้อมูลของ Person
            const criteriaKeys = Object.keys(criteria) as (keyof Omit<Partial<User | Admin>, 'type'>)[];
            // ตรวจสอบว่าแต่ละฟิลด์ใน criteria ตรงกับข้อมูลของ person หรือไม่
            return criteriaKeys.every((fieldName) => person[fieldName] === criteria[fieldName]);
        }) as (User | Admin)[]; // แคสต์เป็น (User | Admin)[] เพื่อให้สามารถใช้ข้อมูลได้อย่างถูกต้อง
}

// เรียกใช้ filterPersons เพื่อกรอง User ที่มีอายุ 23 ปี
export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
// เรียกใช้ filterPersons เพื่อกรอง Admin ที่มีอายุ 23 ปี
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
// แสดงผลข้อมูลของ User ที่มีอายุ 23 ปี
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
// แสดงผลข้อมูลของ Admin ที่มีอายุ 23 ปี
adminsOfAge23.forEach(logPerson);
