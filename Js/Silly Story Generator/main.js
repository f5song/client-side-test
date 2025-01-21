// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customName'); // ช่องใส่ชื่อที่ผู้ใช้กรอก
const randomize = document.getElementById('randomize'); // ปุ่มสร้างเรื่องราว
const story = document.getElementById('story'); // แสดงผลเรื่องราว

// ฟังก์ชันสุ่มค่าใน array
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS
const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText; // สร้างสำเนาใหม่ของข้อความต้นแบบเพื่อปรับเปลี่ยน
  const xItem = randomValueFromArray(insertX); // สุ่มค่าใน insertX
  const yItem = randomValueFromArray(insertY); // สุ่มค่าใน insertY
  const zItem = randomValueFromArray(insertZ); // สุ่มค่าใน insertZ

  // แทนที่ :insertx:, :inserty:, และ :insertz: ด้วยข้อความสุ่ม
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // แทนที่ 'Bob' ด้วยชื่อผู้ใช้ที่กรอก หากมีค่า
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // หากเลือก UK ให้แปลงค่าอุณหภูมิและน้ำหนัก
  if (document.getElementById('uk').checked) {
    const weight = `${Math.round(300 / 14)} stone`; // แปลง 300 pounds เป็น stone
    const temperature = `${Math.round((94 - 32) * (5 / 9))} centigrade`; // แปลง 94°F เป็น °C

    // แทนที่ข้อความใน newStory
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // แสดงผลเรื่องราวในหน้าเว็บ
  story.textContent = newStory;
}
