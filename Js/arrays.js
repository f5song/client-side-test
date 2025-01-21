// ข้อ 1: สร้าง array และแสดงผล
// Add your code here
const myArray1 = [1, 2, 3, 4, 5]; // สร้าง array ที่เก็บตัวเลข

// Don't edit the code below here!
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray1}`; // แสดงผล array
section.appendChild(para1);

// ข้อ 2: แปลง string เป็น array และทำงานกับ array
// Add your code here
let myString2 = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray2 = myString2.split('+'); // แปลง string ที่มี '+' คั่นกลางเป็น array
let arrayLength = myArray2.length; // หาความยาวของ array
let lastItem = myArray2[myArray2.length - 1]; // ดึงข้อมูลตัวสุดท้ายใน array

// Don't edit the code below here!
section.innerHTML = ' ';
let para2_1 = document.createElement('p');
para2_1.textContent = `Array: ${myArray2}`; // แสดงผล array
let para2_2 = document.createElement('p');
para2_2.textContent = `The length of the array is ${arrayLength}.`; // แสดงผลความยาวของ array
let para2_3 = document.createElement('p');
para2_3.textContent = `The last item in the array is "${lastItem}".`; // แสดงข้อมูลตัวสุดท้าย
section.appendChild(para2_1);
section.appendChild(para2_2);
section.appendChild(para2_3);

// ข้อ 3: แปลง array เป็น string
let myArray3 = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];
let myString3 = myArray3.join(', '); // แปลง array เป็น string โดยใช้ ',' คั่นกลาง

// Don't edit the code below here!
section.innerHTML = ' ';
let para3_1 = document.createElement('p');
para3_1.textContent = myString3; // แสดงผล string ที่แปลงจาก array
section.appendChild(para3_1);

// ข้อ 4: กรอง array ให้เหลือเฉพาะที่ขึ้นต้นด้วย 'E'
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];
const eBirds = birds.filter(bird => bird.startsWith('E')); // ใช้ filter เพื่อเลือกเฉพาะคำที่ขึ้นต้นด้วย 'E'

// Don't edit the code below here!
section.innerHTML = ' ';
const para4_1 = document.createElement('p');
para4_1.textContent = eBirds; // แสดงผล array ที่กรองแล้ว
section.appendChild(para4_1);
