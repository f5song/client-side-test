// สร้าง interface สำหรับ User และ Admin
interface User {
    type: 'user';         // ประเภทที่ใช้แยกประเภท User
    name: string;         // ชื่อผู้ใช้
    age: number;          // อายุผู้ใช้
    occupation: string;   // อาชีพของผู้ใช้
}

interface Admin {
    type: 'admin';        // ประเภทที่ใช้แยกประเภท Admin
    name: string;         // ชื่อผู้ดูแลระบบ
    age: number;          // อายุผู้ดูแลระบบ
    role: string;         // บทบาทของผู้ดูแลระบบ
}

// สร้างประเภท Person ที่สามารถเป็นได้ทั้ง User หรือ Admin
type Person = User | Admin;

// ข้อมูลของผู้ใช้ (User)
const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

// ข้อมูลของผู้ดูแลระบบ (Admin)
const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

// ใช้ Generic เพื่อสร้าง ApiResponse ที่สามารถรับข้อมูลประเภทใดก็ได้
export type ApiResponse<T> = (
    {
        status: 'success';
        data: T; // ข้อมูลที่สำเร็จ
    } |
    {
        status: 'error';
        error: string; // ข้อผิดพลาดถ้ามี
    }
);

// ฟังก์ชัน promisify ทำการแปลงฟังก์ชันที่ใช้ callback ให้เป็นฟังก์ชันที่ใช้ Promise
export function promisify<T>(func: (callback: (response: ApiResponse<T>) => void) => void): () => Promise<T> {
    return () => {
        return new Promise<T>((resolve, reject) => {
            func((response: ApiResponse<T>) => {
                if (response.status === 'success') {
                    resolve(response.data);  // ถ้าสำเร็จ ให้ resolve ค่า data
                } else {
                    reject(new Error(response.error));  // ถ้ามีข้อผิดพลาด ให้ reject ด้วยข้อความ error
                }
            });
        });
    };
}

// สร้าง API ที่ใช้ promisify เพื่อแปลงฟังก์ชัน callback ให้เป็นฟังก์ชันที่ใช้ Promise
const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.' // ส่งข้อผิดพลาด
        });
    }
};

// ใช้ promisify เพื่อแปลงฟังก์ชันของ API ให้สามารถใช้ Promises
export const api = {
    requestAdmins: promisify(oldApi.requestAdmins),
    requestUsers: promisify(oldApi.requestUsers),
    requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
    requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
};

// ฟังก์ชันที่ใช้แสดงข้อมูลของ Person
function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

// ฟังก์ชันหลักที่เริ่มทำงานแอป โดยใช้ async/await เพื่อทำงานกับ Promises
async function startTheApp() {
    console.log('Admins:');
    // ใช้ await เพื่อรอผลลัพธ์จาก requestAdmins ที่ถูกแปลงเป็น Promise
    (await api.requestAdmins()).forEach(logPerson); // แสดงข้อมูลผู้ดูแลระบบ
    console.log();

    console.log('Users:');
    // ใช้ await เพื่อรอผลลัพธ์จาก requestUsers ที่ถูกแปลงเป็น Promise
    (await api.requestUsers()).forEach(logPerson); // แสดงข้อมูลผู้ใช้
    console.log();

    console.log('Server time:');
    // ใช้ await เพื่อรอผลลัพธ์จาก requestCurrentServerTime ที่ถูกแปลงเป็น Promise
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    // ใช้ await เพื่อรอผลลัพธ์จาก requestCoffeeMachineQueueLength ที่ถูกแปลงเป็น Promise
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

// เรียกใช้ฟังก์ชัน startTheApp โดยใช้ .then และ .catch เพื่อจัดการผลลัพธ์หรือข้อผิดพลาด
startTheApp().then(
    () => {
        console.log('Success!'); // แสดง Success ถ้าทุกอย่างทำงานได้สำเร็จ
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`); // แสดงข้อความข้อผิดพลาด
    }
);
