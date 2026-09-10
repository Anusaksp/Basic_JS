document.write("<h1>oreo</h1>");


let name = "anusak";
document.write(name)
function massage(){
    alert("สวัสดี")
}

function pluse(x){
    //alert(x)
    document.getElementById('showX').innerText = x;
    return x;
}

function updateName(firstname) {
    document.getElementById('displayName').innerText = firstname;
}

function nameChar(nameChar){
    alert(nameChar.value)
}

function getInput(yourword) {
    // คำสั่ง prompt() จะเด้งหน้าต่างขึ้นมา และเก็บค่าที่พิมพ์ไว้ในตัวแปร userInput
    let userInput = prompt("Please enter your words");

    // เช็คว่าผู้ใช้ไม่ได้กด Cancel (กด Cancel ค่าจะเป็น null)
    if (userInput !== null) {
        let count = userInput.length;
        document.getElementById("showText").innerText = `ข้อความ: ${userInput} (มี ${count} ตัวอักษร)`;
        alert(`ข้อความ: ${userInput} (มี ${count} ตัวอักษร)`)
    }
}

// 1. เตรียมข้อมูลทั้งแบบข้อความเต็มและแบบเซ็นเซอร์
const fullText = "099-999-9999";
const censoredText = "***-***-****";
    
// 2. สร้างตัวแปรเก็บสถานะ (ค่าเริ่มต้นคือไม่ได้เซ็นเซอร์ จึงตั้งเป็น false)
let isCensored = false;

// 3. สร้างฟังก์ชันเพื่อจัดการ Logic
function toggleCensor() {
    // สลับสถานะ (ถ้าเป็น false จะเปลี่ยนเป็น true / ถ้าเป็น true จะเปลี่ยนเป็น false)
    isCensored = !isCensored; 
        
    // เช็กสถานะปัจจุบันแล้วนำข้อความไปอัปเดตใน HTML
    if (isCensored) {
        document.getElementById('ph').innerText = censoredText;
    } else {
        document.getElementById('ph').innerText = fullText;
    }
}