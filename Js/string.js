// ข้อ 1: รวมข้อความสองข้อความเป็นหนึ่ง
const quoteStart = 'Don\'t judge each day by the harvest you reap '; // ข้อความต้นทาง
const quoteEnd = 'but by the seeds that you plant.'; // ข้อความปลายทาง
const finalQuote = quoteStart + quoteEnd; // รวมข้อความต้นทางและปลายทางให้เป็นข้อความเดียว

section.innerHTML = ' '; // ล้างเนื้อหาใน section ก่อนเพิ่มข้อความใหม่
const para1 = document.createElement('p'); // สร้าง <p> ใหม่เพื่อแสดงข้อความ
para1.textContent = finalQuote; // กำหนดข้อความที่จะแสดงใน <p>
section.appendChild(para1); // เพิ่ม <p> ลงใน section

// ข้อ 2: คำนวณความยาวของข้อความและแทนที่ข้อความบางส่วน
const quote2 = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.'; // ข้อความเดิม
const substring2 = 'green eggs and ham'; // ข้อความที่จะถูกแทนที่
const quoteLength = quote2.length; // คำนวณความยาวของข้อความ quote2
const revisedQuote = quote2.replace(substring2, 'pizza and coffee'); // แทนที่ 'green eggs and ham' ด้วย 'pizza and coffee'

const para2_1 = document.createElement('p'); // สร้าง <p> เพื่อแสดงความยาวข้อความ
para2_1.textContent = `The quote is ${quoteLength} characters long.`; // แสดงความยาวของข้อความ
const para2_2 = document.createElement('p'); // สร้าง <p> เพื่อแสดงข้อความที่ถูกแทนที่
para2_2.textContent = revisedQuote; // แสดงข้อความที่ถูกแทนที่
section.appendChild(para2_1); // เพิ่ม <p> แรกใน section
section.appendChild(para2_2); // เพิ่ม <p> ที่สองใน section

// ข้อ 3: เปลี่ยนข้อความเป็นตัวพิมพ์เล็กทั้งหมด แล้วเปลี่ยนตัวอักษรแรกเป็นตัวพิมพ์ใหญ่
const quote3 = 'I dO nOT lIke gREen eGgS anD HAM'; // ข้อความที่มีการใช้ตัวพิมพ์ใหญ่และเล็กไม่สม่ำเสมอ
const fixedQuote = quote3.toLowerCase(); // เปลี่ยนข้อความทั้งหมดเป็นตัวพิมพ์เล็ก
const finalQuote3 = fixedQuote.charAt(0).toUpperCase() + fixedQuote.slice(1); // เปลี่ยนตัวอักษรแรกเป็นตัวพิมพ์ใหญ่

const para3_1 = document.createElement('p'); // สร้าง <p> สำหรับแสดงข้อความที่เปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมด
para3_1.textContent = fixedQuote; // แสดงข้อความที่เป็นตัวพิมพ์เล็กทั้งหมด
const para3_2 = document.createElement('p'); // สร้าง <p> สำหรับแสดงข้อความที่เปลี่ยนตัวอักษรแรกเป็นตัวพิมพ์ใหญ่
para3_2.textContent = finalQuote3; // แสดงข้อความที่มีตัวพิมพ์ใหญ่ที่แรก
section.appendChild(para3_1); // เพิ่ม <p> แรกใน section
section.appendChild(para3_2); // เพิ่ม <p> ที่สองใน section

// ข้อ 4: คำนวณค่าของด้านตรงข้ามของมุมฉากในรูปสามเหลี่ยมโดยใช้ทฤษฎีบทพีทาโกรัส
const theorem = 'Pythagorean theorem'; // ชื่อทฤษฎีบทพีทาโกรัส
const a = 5; // ความยาวด้านที่หนึ่ง
const b = 8; // ความยาวด้านที่สอง
const c = Math.sqrt(a * a + b * b); // คำนวณความยาวของด้านตรงข้ามของมุมฉาก
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`; 
// สร้างข้อความที่อธิบายการคำนวณทฤษฎีบทพีทาโกรัส

const para4 = document.createElement('p'); // สร้าง <p> สำหรับแสดงข้อความการคำนวณ
para4.textContent = myString; // แสดงข้อความการคำนวณ
section.appendChild(para4); // เพิ่ม <p> ลงใน section
