// بيانات الصور للمشاهير
const celebrityData = {
  img1: { name: "شونق", team: "باور", followers: "20.4M" },
  img2: { name: "سعيد", team: "TU", followers: "229K" },
  img3: { name: "للي", team: "فالكونز", followers: "1.73M" },
  img4: { name: "مجرم قيمز", team: "باور", followers: "10.5M" },
  img5: { name: "يزيد", team: "بيكس", followers: "200K" },
  img6: { name: "المكسيكي", team: "فالكونز", followers: "2.93M" },
  img7: { name: "طرباخ", team: "بيكس", followers: "2.06M" },
  img8: { name: "عبدالرحمن الشهري", team: "بيكس", followers: "330K" },
  img9: { name: "توبز", team: "TU", followers: "8.73M" },
  img10: { name: "معاذ", team: "TU", followers: "1.66M" },
  img11: { name: "هنودي", team: "TU", followers: "3.69M" },
  img12: { name: "رايد", team: "فالكونز", followers: "2.64M" },
  img13: { name: "عادل", team: "فالكونز", followers: "1.79M" },
  img14: { name: "بودي", team: "بيكس", followers: "1.26M" },
  img15: { name: "خلودي 25", team: "باور", followers: "3.65M" },
  img16: { name: "جلوري", team: "باور", followers: "3.1M" },
  img17: { name: "ابراهيم العمري", team: "باور", followers: "4.21M" },
  img18: { name: "فواز", team: "فالكونز", followers: "1.15M" },
  img19: { name: "ابو عبير", team: "فالكونز", followers: "2.14M" },
  img20: { name: "راكان/ريان", team: "باور", followers: "4.38M" },
  img21: { name: "ياسر مخ", team: "TU", followers: "1.85M" },
  img22: { name: "ابو دخيل", team: "بيكس", followers: "106K" },
  img23: { name: "صالح ابلز", team: "فالكونز", followers: "9.58M" },
  img24: { name: "محمد اودين", team: "فالكونز", followers: "1.32M" },
  img25: { name: "بندريتا", team: "فالكونز", followers: "19.7M" },
  img26: { name: "ابو عمر", team: "فالكونز", followers: "2.6M" },
  img27: { name: "دربحه", team: "فالكونز", followers: "3.81M" },
  img28: { name: "دجومي٩٩٩", team: "فالكونز", followers: "7.95M" },
  img29: { name: "عزيز", team: "فالكونز", followers: "3.14M" },
  img30: { name: "ابو عابد", team: "باور", followers: "1.25M" },
  // ... أضف حتى img30
};

// بيانات الصور للدول
const countryData = {
  immg1: { war: "آسيا", country: "اليابان", population: "123M" },
  immg2: { war: "أفريقيا", country: "مصر", population: "110M" },
  immg3: { war: "آسيا", country: "المملكة العربية السعودية", population: "36M" },
  immg4: { war: "آسيا", country: "الكويت", population: "4.5M" },
  immg5: { war: "آسيا", country: "الصين", population: "1.4B" },
  immg6: { war: "آسيا", country: "الإمارات العربية المتحدة", population: "10M" },
  immg7: { war: "أوروبا", country: "فرنسا", population: "68M" },
  immg8: { war: "أوروبا.", country: "ألمانيا", population: "84M" },
  immg9: { war: "أوروبا", country: "إيطاليا", population: "60M" },
  immg10: { war: "أوروبا", country: "إسبانيا", population: "47M" },
  immg11: { war: "أفريقيا", country: "الجزائر", population: "45M" },
  immg12: { war: "أفريقيا", country: "المغرب", population: "37M" },
  immg13: { war: "آسيا", country: "قطر", population: "3M" },
  immg14: { war: "آسيا", country: "البحرين", population: "1.7M" },
  immg15: { war: "أمريكا الشمالية", country: "الولايات المتحدة الأمريكية", population: "335M" },
  immg16: { war: "أمريكا الشمالية", country: "كندا", population: "40M" },
  immg17: { war: "أمريكا الشمالية", country: "المكسيك", population: "130M" },
  immg18: { war: " أمريكا الجنوبية", country: "البرازيل", population: "215M" },
  immg19: { war: "آأمريكا الجنوبية", country: "الأرجنتين", population: "46M" },
  immg20: { war: "آسيا وأوروبا", country: "روسيا", population: "145M" },
  immg21: { war: "أوروبا", country: "أوكرانيا", population: "36M" },
  immg22: { war: "آسيا وأوروبا", country: "تركيا", population: "86M" },
  immg23: { war: "آسيا", country: "عُمان", population: "4.6M" },
  immg24: { war: "آسيا", country: "اليمن", population: "30M" },
  immg25: { war: "آسيا", country: "كوريا الجنوبية", population: "52M" },
  immg26: { war: "آسيا", country: "كوريا الشمالية", population: "26M" },
  immg27: { war: "آسيا", country: "الأردن", population: "11M" },
  immg28: { war: "آسيا", country: "فلسطين", population: "5.5M" },
  immg29: { war: "آسيا", country: "الهند", population: "1.43B" },
  immg30: { war: "آسيا", country: "باكستان", population: "243M" },
  // ... أضف حتى immg30
};

const playerNameInput = document.getElementById("playerName");
const enterGameBtn = document.getElementById("enterGameBtn");
const nameScreen = document.getElementById("nameScreen");
const gameSelection = document.getElementById("gameSelection");
const gameBoard = document.getElementById("gameBoard");
const selectImageBtn = document.getElementById("selectImageBtn");
const selectedBox = document.getElementById("selectedBox").querySelector("img");
const grid = document.getElementById("grid");
const gameTitle = document.getElementById("gameTitle");
const exitBtn = document.getElementById("exitBtn");

let currentGame = "";
let playerName = "";
let selectionMode = false;

enterGameBtn.onclick = () => {
  playerName = playerNameInput.value.trim();
  if (playerName) {
    nameScreen.classList.add("hidden");
    gameSelection.classList.remove("hidden");
  }
};

document.getElementById("modeCelebrities").onclick = () => startGame("celebrities");
document.getElementById("modeCountry").onclick = () => startGame("country");

function startGame(mode) {
  currentGame = mode;
  gameSelection.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  gameTitle.textContent = mode === "celebrities" ? "المشاهير" : "الدول";
  loadImages();
}

function loadImages() {
  grid.innerHTML = "";
  for (let i = 1; i <= 30; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const img = document.createElement("img");
    const imgId = currentGame === "celebrities" ? `img${i}` : `immg${i}`;
    img.src = `images/${imgId}.jpg`;
    img.alt = imgId;
    img.dataset.id = imgId;

    let clickCount = 0;

    cell.addEventListener("click", () => {
      if (selectionMode) {
        selectedBox.src = img.src;
        selectionMode = false;
        selectImageBtn.classList.add("hidden");
        updateInfoBox(imgId);
      } else {
        clickCount++;
        if (clickCount === 2) {
          cell.classList.toggle("red-overlay");
          clickCount = 0;
        }
      }
    });

    // عند تمرير الماوس على الصور في وضع الصيانة (اختياري لكل الصور)
    cell.addEventListener("mouseenter", () => {
      updateInfoBox(imgId);
    });

    cell.appendChild(img);
    grid.appendChild(cell);
  }
}

selectImageBtn.onclick = () => {
  selectionMode = true;
};

exitBtn.onclick = () => {
  sendExitLog();
  location.reload();
};

// إرسال اسم المستخدم ونوع اللعبة عند الخروج
function sendExitLog() {
  fetch("https://your-webhook-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: playerName,
      game: currentGame,
      action: "exit"
    })
  });
}

// تحديث معلومات الصورة في المربع الجانبي
function updateInfoBox(id) {
  const infoBox = document.getElementById("infoBox");
  if (!infoBox) return;

  let content = "";

  if (currentGame === "celebrities" && celebrityData[id]) {
    const { name, team, followers } = celebrityData[id];
    content = `
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>الفريق:</strong> ${team}</p>
      <p><strong>المتابعين:</strong> ${followers}</p>
    `;
  } else if (currentGame === "country" && countryData[id]) {
    const { war, country, population } = countryData[id];
    content = `
      <p><strong>اسم الغارة:</strong> ${war}</p>
      <p><strong>الدولة:</strong> ${country}</p>
      <p><strong>عدد السكان:</strong> ${population}</p>
    `;
  } else {
    content = `<p>لا توجد معلومات</p>`;
  }

  infoBox.innerHTML = content;
}
// تعطيل فحص أدوات المطور بشكل بسيط
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    e.preventDefault();
    alert("هذه الخاصية معطلة");
  }
});
document.addEventListener("contextmenu", e => e.preventDefault());