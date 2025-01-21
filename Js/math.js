// ข้อ 1: ตรวจสอบค่าของตัวเลขและตรวจสอบว่าเป็นเลขคู่หรือเลขคี่
let finalResult1 = 48; // กำหนดค่าตัวแปรเป็น 48
let evenOddResult1 = finalResult1 % 2; // ตรวจสอบว่าเลขเป็นคู่หรือคี่โดยการหาค่าเศษจากการหารด้วย 2

section.innerHTML = ' '; // ล้างเนื้อหาใน section ก่อนเพิ่มข้อมูลใหม่
const para1_1 = document.createElement('p'); // สร้าง <p> เพื่อแสดงผลข้อความ
const finalResultCheck1 = finalResult1 === 48 ? `Yes, well done!` : `No, it is ${finalResult1}`; 
// เช็คว่าค่าของ finalResult1 เท่ากับ 48 หรือไม่
para1_1.textContent = `Is the finalResult 48? ${finalResultCheck1}`; // เพิ่มข้อความเกี่ยวกับผลลัพธ์การตรวจสอบ

const para2_1 = document.createElement('p'); // สร้าง <p> อีกตัวเพื่อแสดงข้อความเลขคู่/คี่
const evenOddResultCheck1 = evenOddResult1 === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
// ตรวจสอบว่าค่า finalResult1 เป็นเลขคู่ (เศษ 0) หรือคี่
para2_1.textContent = evenOddResultCheck1; // เพิ่มข้อความเกี่ยวกับเลขคู่/คี่

section.appendChild(para1_1); // เพิ่ม <p> ตัวแรกใน section
section.appendChild(para2_1); // เพิ่ม <p> ตัวที่สองใน section




// ข้อ 2: การคำนวณตัวเลขและตรวจสอบชนิดของผลลัพธ์
let result = 7 + 13 / 9 + 7; // คำนวณผลลัพธ์เริ่มต้น
let result2 = 100 / 2 * 6; // คำนวณผลลัพธ์ที่สอง
let finalResult2 = result + result2; // รวมผลลัพธ์ทั้งสองเป็นผลสุดท้าย
let finalNumber = typeof finalResult2 === 'number'; // ตรวจสอบว่าผลลัพธ์สุดท้ายเป็นชนิด number หรือไม่

const para1_2 = document.createElement('p'); // สร้าง <p> สำหรับแสดงผลลัพธ์สุดท้าย
para1_2.textContent = `Your finalResult is ${finalResult2}`; // แสดงค่าของ finalResult2

const para2_2 = document.createElement('p'); // สร้าง <p> อีกตัวเพื่อแสดงผลลัพธ์ชนิดข้อมูล
const finalNumberCheck = finalNumber ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
// ตรวจสอบว่า finalResult2 เป็นชนิด number
para2_2.textContent = finalNumberCheck; // เพิ่มข้อความผลการตรวจสอบชนิดข้อมูล

section.appendChild(para1_2); // เพิ่ม <p> ตัวแรกใน section
section.appendChild(para2_2); // เพิ่ม <p> ตัวที่สองใน section



// ข้อ 3: เปรียบเทียบค่าต่างๆ และตรวจสอบเงื่อนไข
const eleWeight = 1000; // น้ำหนักช้างในหน่วยกิโลกรัม
const mouseWeight = 2; // น้ำหนักหนูในหน่วยกิโลกรัม
const ostrichHeight = 2; // ความสูงของนกกระจอกเทศในหน่วยเมตร
const duckHeight = 0.3; // ความสูงของเป็ดในหน่วยเมตร
const pwd1 = 'stromboli'; // รหัสผ่านที่ 1
const pwd2 = 'stROmBoLi'; // รหัสผ่านที่ 2

let weightComparison = eleWeight < mouseWeight; // เปรียบเทียบน้ำหนักระหว่างช้างและหนู
let heightComparison = ostrichHeight > duckHeight; // เปรียบเทียบความสูงระหว่างนกกระจอกเทศและเป็ด
let pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase(); // เปรียบเทียบรหัสผ่านโดยไม่สนใจตัวพิมพ์เล็ก/ใหญ่

const para1_3 = document.createElement('p'); // สร้าง <p> สำหรับแสดงผลลัพธ์การเปรียบเทียบน้ำหนัก
const para2_3 = document.createElement('p'); // สร้าง <p> สำหรับแสดงผลลัพธ์การเปรียบเทียบความสูง
const para3_3 = document.createElement('p'); // สร้าง <p> สำหรับแสดงผลลัพธ์การเปรียบเทียบรหัสผ่าน

const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
// ข้อความผลลัพธ์เปรียบเทียบน้ำหนัก
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
// ข้อความผลลัพธ์เปรียบเทียบความสูง
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';
// ข้อความผลลัพธ์การตรวจสอบรหัสผ่าน

para1_3.textContent = weightTest; // เพิ่มข้อความเปรียบเทียบน้ำหนักใน <p>
para2_3.textContent = heightTest; // เพิ่มข้อความเปรียบเทียบความสูงใน <p>
para3_3.textContent = pwdTest; // เพิ่มข้อความตรวจสอบรหัสผ่านใน <p>

section.appendChild(para1_3); // เพิ่ม <p> ตัวแรกใน section
section.appendChild(para2_3); // เพิ่ม <p> ตัวที่สองใน section
section.appendChild(para3_3); // เพิ่ม <p> ตัวที่สามใน section
