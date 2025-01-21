// กำหนด interface สำหรับ User
interface User {
    type: 'user';           // ประเภทของข้อมูลเป็น 'user'
    name: string;           // ชื่อของ User
    age: number;            // อายุของ User
    occupation: string;     // อาชีพของ User
}

// กำหนด interface สำหรับ Admin
interface Admin {
    type: 'admin';          // ประเภทของข้อมูลเป็น 'admin'
    name: string;           // ชื่อของ Admin
    age: number;            // อายุของ Admin
    role: string;           // บทบาทของ Admin
}

// สร้าง PowerUser โดยการใช้ Omit เพื่อลบ 'type' จาก User และ Admin และเพิ่ม 'type' เป็น 'powerUser'
type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & { type: 'powerUser' };

// กำหนดประเภท Person ซึ่งสามารถเป็นได้ทั้ง User, Admin หรือ PowerUser
export type Person = User | Admin | PowerUser;

// สร้างตัวอย่างข้อมูลของ Person
export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];

// Type Guard สำหรับตรวจสอบว่าเป็น Admin
function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

// Type Guard สำหรับตรวจสอบว่าเป็น User
function isUser(person: Person): person is User {
    return person.type === 'user';
}

// Type Guard สำหรับตรวจสอบว่าเป็น PowerUser
function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

// ฟังก์ชัน logPerson สำหรับแสดงข้อมูลของ Person
export function logPerson(person: Person) {
    let additionalInformation: string = '';  // ตัวแปรสำหรับเก็บข้อมูลเพิ่มเติม เช่น role หรือ occupation

    // ตรวจสอบว่าคนนี้เป็น Admin หรือไม่
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    // ตรวจสอบว่าคนนี้เป็น User หรือไม่
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    // ตรวจสอบว่าคนนี้เป็น PowerUser หรือไม่
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }

    // แสดงข้อมูลของ Person
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

// แสดงข้อมูล Admins
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

// แสดงข้อมูล Users
console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

// แสดงข้อมูล Power users
console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);
