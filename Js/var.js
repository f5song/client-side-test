// Add your code here
const myName1 = 'Paul';
const myAge1 = 30; // กำหนดค่าอายุเป็นตัวเลข (ตัวอย่าง)

// Don't edit the code below here!
section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName1;
const para2 = document.createElement('p');
para2.textContent = myAge1;
section.appendChild(para1);
section.appendChild(para2);


// Add your code here
let myName2 = 'Paul';

// Don't edit the code below here!
section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName2;
section.appendChild(para);


// Add your code here
let myName3 = 'Default'; // เปลี่ยนเป็น let เพื่อให้ปรับค่าได้
myName3 = 'Chris';

let myAge3 = 42; // ใช้ let เพราะสามารถอัพเดตค่าหรือคำนวณต่อได้

// Don't edit the code below here!
section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName3;
para2.textContent = `In 20 years, I will be ${myAge3 + 20}`;
section.appendChild(para1);
section.appendChild(para2);
