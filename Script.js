// ข้อมูลทรัพยากรสำหรับแต่ละระดับการอัปเกรด (เริ่มจากระดับที่ 0)
const upgradeCosts = [
    [1500, 15, 0, 0], [3800, 40, 0, 0], [7000, 70, 0, 0], [9700, 95, 0, 0], [0, 0, 45, 0], [0, 0, 50, 0],
    [0, 0, 60, 0], [0, 0, 70, 0], [6500, 65, 40, 0],[8000, 80, 50, 0], [10000, 95, 60, 0], [11000, 110, 70, 0], [13000, 130, 85, 0],
    [15000, 160, 100, 0], [22000, 220, 40, 0], [23000, 230, 40, 0], [25000, 250, 45, 0], [26000, 260, 45, 0],
    [28000, 280, 45, 0], [30000, 300, 55, 0], [32000, 320, 55, 0], [35000, 340, 55, 0], [38000, 360, 55, 0],
    [43000, 430, 75, 0], [45000, 460, 80, 0], [48000, 500, 85, 0], [50000, 530, 85, 10], [52000, 560, 90, 10],
    [54000, 590, 95, 10], [56000, 620, 100, 10], [59000, 670, 110, 15], [61000, 700, 115, 15],[63000, 730, 120, 15], [65000, 760, 125, 15],
    [68000, 810, 135, 20], [70000, 840, 140, 20], [72000, 870, 145, 20], [74000, 900, 150, 20], [77000, 950, 160, 25],
    [80000, 990, 165, 25], [83000, 1030, 170, 25], [86000, 1070, 180, 25]
];

// ฟังก์ชันในการคำนวณทรัพยากร
function calculateResources() {
    const startLevel = parseInt(document.getElementById('start_level').value);
    const endLevel = parseInt(document.getElementById('end_level').value);

    // ตรวจสอบความถูกต้องของระดับที่เริ่มต้นและสิ้นสุด
    if (isNaN(startLevel) || isNaN(endLevel) || startLevel < 0 || endLevel > 40 || startLevel >= endLevel) {
        document.getElementById('result').innerHTML = "กรุณากรอกระดับเริ่มต้นและระดับสิ้นสุดที่ถูกต้อง (0 ≤ Start Level < End Level ≤ 40)";
        return;
    }

    // ตัวแปรในการเก็บรวมทรัพยากรทั้งหมด
    let totalResources = [0, 0, 0, 0];  // [Hardened Alloy, Polishing Solution, Design Plans, Lunar amber]

    // คำนวณทรัพยากรที่ต้องการ
    for (let i = startLevel; i < endLevel; i++) {
        totalResources[0] += upgradeCosts[i][0];  // Hardened Alloy
        totalResources[1] += upgradeCosts[i][1];  // Polishing Solution
        totalResources[2] += upgradeCosts[i][2];  // Design Plans
        totalResources[3] += upgradeCosts[i][3];  // Lunar amber
    }

    // แสดงผลลัพธ์
    document.getElementById('result').innerHTML = `
        <p>Resources required from ${startLevel} to ${endLevel}:</p>
        <ul>
            <li>Hardened Alloy: ${totalResources[0]}</li>
            <li>Polishing Solution: ${totalResources[1]}</li>
            <li>Design Plans: ${totalResources[2]}</li>
            <li>Lunar amber: ${totalResources[3]}</li>
        </ul>
    `;
}
