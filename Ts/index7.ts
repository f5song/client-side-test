// กำหนด interface สำหรับ User และ Admin โดยมีฟิลด์ที่แตกต่างกัน
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

// ฟังก์ชันนี้ใช้แสดงข้อมูลของ User
function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

// ฟังก์ชันนี้ใช้แสดงข้อมูลของ Admin
function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

// ข้อมูลตัวอย่างของ Admin
const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

// ข้อมูลตัวอย่างของ User
const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

// ฟังก์ชัน swap ใช้ Generic เพื่อสลับค่าได้ทั้งสองประเภท T1 และ T2
export function swap<T1, T2>(v1: T1, v2: T2): [T2, T1] {
    return [v2, v1]; // คืนค่าเป็นอาเรย์ที่สลับค่า
}

// ฟังก์ชันทดสอบที่ 1
function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);   // แสดงข้อมูล User ที่ถูกสลับมาเป็นตัวที่สอง
    logAdmin(firstAdmin);   // แสดงข้อมูล Admin ที่ถูกสลับมาเป็นตัวแรก
}

// ฟังก์ชันทดสอบที่ 2
function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);  // แสดงข้อมูล Admin ที่ถูกสลับมาเป็นตัวที่สอง
    logUser(firstUser);     // แสดงข้อมูล User ที่ถูกสลับมาเป็นตัวแรก
}

// ฟังก์ชันทดสอบที่ 3
function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);    // แสดงข้อมูล User ที่ถูกสลับมาเป็นตัวที่สอง
    logUser(firstUser);     // แสดงข้อมูล User ที่ถูกสลับมาเป็นตัวแรก
}

// ฟังก์ชันทดสอบที่ 4
function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);   // แสดงข้อมูล Admin ที่ถูกสลับมาเป็นตัวแรก
    logAdmin(secondAdmin);  // แสดงข้อมูล Admin ที่ถูกสลับมาเป็นตัวที่สอง
}

// ฟังก์ชันทดสอบที่ 5
function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);   // แสดงผลค่า String
    console.log(` - Numeric: ${numericValue}`); // แสดงผลค่า Numeric
}

// เรียกใช้ฟังก์ชันทดสอบทั้งหมด
[test1, test2, test3, test4, test5].forEach((test) => test());
