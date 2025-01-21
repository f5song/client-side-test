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
export type ApiResponse<T> = 
    | { status: 'success'; data: T }      // กรณีการตอบกลับสำเร็จ
    | { status: 'error'; error: string };  // กรณีการตอบกลับที่มีข้อผิดพลาด

// ฟังก์ชันที่จำลองการขอข้อมูลผู้ดูแลระบบ (admins)
export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
    // ส่งข้อมูลผู้ดูแลระบบ (admins) กลับไปยัง callback
    callback({
        status: 'success',
        data: admins
    });
}

// ฟังก์ชันที่จำลองการขอข้อมูลผู้ใช้ (users)
export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
    // ส่งข้อมูลผู้ใช้ (users) กลับไปยัง callback
    callback({
        status: 'success',
        data: users
    });
}

// ฟังก์ชันที่จำลองการขอเวลาเซิร์ฟเวอร์ปัจจุบัน
export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
    // ส่งเวลาปัจจุบัน (Timestamp) กลับไปยัง callback
    callback({
        status: 'success',
        data: Date.now()
    });
}

// ฟังก์ชันที่จำลองการขอความยาวคิวของเครื่องชงกาแฟ
export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
    // ส่งข้อผิดพลาดเกี่ยวกับค่าตัวเลขที่เกินขีดจำกัด
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}

// ฟังก์ชันที่ใช้แสดงข้อมูลของ Person
function logPerson(person: Person) {
    // ตรวจสอบประเภทของ Person และแสดงข้อมูลให้ตรงกับประเภท
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

// ฟังก์ชันหลักที่เริ่มทำงานแอป
function startTheApp(callback: (error: Error | null) => void) {
    // เรียกข้อมูลผู้ดูแลระบบ
    requestAdmins((adminsResponse) => {
        console.log('Admins:');
        // ตรวจสอบสถานะของการตอบกลับจาก API
        if (adminsResponse.status === 'success') {
            // ถ้าสำเร็จ แสดงข้อมูลของผู้ดูแลระบบ
            adminsResponse.data.forEach(logPerson);
        } else {
            // ถ้ามีข้อผิดพลาด ให้ส่งข้อผิดพลาดกลับไปยัง callback
            return callback(new Error(adminsResponse.error));
        }

        console.log();

        // เรียกข้อมูลผู้ใช้
        requestUsers((usersResponse) => {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                // ถ้าสำเร็จ แสดงข้อมูลของผู้ใช้
                usersResponse.data.forEach(logPerson);
            } else {
                // ถ้ามีข้อผิดพลาด ให้ส่งข้อผิดพลาดกลับไปยัง callback
                return callback(new Error(usersResponse.error));
            }

            console.log();

            // เรียกเวลาของเซิร์ฟเวอร์
            requestCurrentServerTime((serverTimeResponse) => {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    // ถ้าสำเร็จ แสดงเวลาของเซิร์ฟเวอร์
                    console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                } else {
                    // ถ้ามีข้อผิดพลาด ให้ส่งข้อผิดพลาดกลับไปยัง callback
                    return callback(new Error(serverTimeResponse.error));
                }

                console.log();

                // เรียกความยาวคิวของเครื่องชงกาแฟ
                requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        // ถ้าสำเร็จ แสดงความยาวคิว
                        console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                    } else {
                        // ถ้ามีข้อผิดพลาด ให้ส่งข้อผิดพลาดกลับไปยัง callback
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }

                    // เมื่อทุกอย่างเสร็จสิ้น ให้เรียก callback และส่งค่า null เพื่อบ่งบอกว่าไม่มีข้อผิดพลาด
                    callback(null);
                });
            });
        });
    });
}

// เรียกใช้ฟังก์ชัน startTheApp เพื่อเริ่มทำงานแอป
startTheApp((e: Error | null) => {
    console.log();
    if (e) {
        // ถ้ามีข้อผิดพลาด แสดงข้อความข้อผิดพลาด
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
    } else {
        // ถ้าไม่มีข้อผิดพลาด แสดงข้อความ Success
        console.log('Success!');
    }
});
