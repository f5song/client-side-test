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
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

// ฟังก์ชันตรวจสอบว่าเป็น Admin หรือไม่
export const isAdmin = (person: Person): person is Admin => person.type === 'admin';

// ฟังก์ชันตรวจสอบว่าเป็น User หรือไม่
export const isUser = (person: Person): person is User => person.type === 'user';

// ฟังก์ชันที่ใช้แสดงข้อมูลของแต่ละบุคคล
export function logPerson(person: Person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        // ถ้าเป็น Admin แสดงบทบาทของ Admin
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        // ถ้าเป็น User แสดงอาชีพของ User
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

// ฟังก์ชันกรอง User ที่ตรงตาม criteria ที่ให้มา (ที่ไม่รวม 'type')
export function filterUsers(persons: Person[], criteria: Partial<Omit<User, 'type'>>): User[] {
    return persons.filter(isUser).filter((user) => {
        // สร้างรายการของ keys ใน criteria ที่จะใช้ในการกรองข้อมูล
        const criteriaKeys = Object.keys(criteria) as (keyof Omit<User, 'type'>)[];

        return criteriaKeys.every((fieldName) => {
            // กรองโดยการเปรียบเทียบค่าของแต่ละฟิลด์
            return user[fieldName] === criteria[fieldName];
        });
    });
}

console.log('Users of age 23:');

// เรียกใช้ filterUsers เพื่อตรวจสอบ Users ที่มีอายุ 23
filterUsers(
    persons,
    {
        age: 23    // กรองโดยใช้เกณฑ์อายุ 23 ปี
    }
).forEach(logPerson); // แสดงผลข้อมูลที่ตรงกับเงื่อนไข
