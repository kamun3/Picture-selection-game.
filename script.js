// رابط الـWebhook مشفر base64 (غيره على حسب حاجتك)
const webhookUrlEncoded = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM4NDE4ODM2MDMyNjc3OTAvR3ZIYXlURzJ3VXFreFpRTXNCeDM4dXpzLUlZXzlSQ1lXbGlTQ1FGV2tlTmFRQ2JpdlBkWlpCSUlNdFQxanRlQVprdFA=";
const webhookUrl = atob(webhookUrlEncoded);

const modes = {
  celebrities: { name: "علبة المشاهير", prefix: "img", count: 30 },
  country: { name: "علبة الدولة", prefix: "immg", count: 30 }
};

let playerName = "";
let currentMode = null;
let selectedImage = null;
let imageSelectedLocked = false;

const nameScreen = document.getElementById("nameScreen");
const playerNameInput = document.getElementById("playerName");
const enterGameBtn = document.getElementById("enterGameBtn");

const gameSelection = document.getElementById("gameSelection");
const modeCelebrities = document.getElementById("modeCelebrities");
const modeCountry = document.getElementById("modeCountry");

const gameBoard = document.getElementById("gameBoard");
const gameTitle = document.getElementById("gameTitle");
const grid = document.getElementById("grid");
const selectedBox = document.getElementById("selectedBox").querySelector("img");
const selectImageBtn = document.getElementById("selectImageBtn");
const exitBtn = document.getElementById("exitBtn");

// دخول اللاعب
enterGameBtn.addEventListener("click", () => {
  const name = playerNameInput.value.trim();
  if (!name) return alert("يرجى إدخال الاسم للمتابعة");
  playerName = name;
  hide(nameScreen);
  show(gameSelection);
});

// اختيار نوع اللعبة
modeCelebrities.addEventListener("click", () => startGame("celebrities"));
modeCountry.addEventListener("click", () => startGame("country"));

function startGame(modeKey) {
  currentMode = modes[modeKey];
  if (!currentMode) return;

  hide(gameSelection);
  show(gameBoard);

  gameTitle.textContent = currentMode.name;
  selectedBox.src = "";
  selectedBox.style.display = "none";

  selectImageBtn.style.display = "inline-block";
  imageSelectedLocked = false;

  generateGridImages(currentMode.prefix, currentMode.count);
}

// توليد شبكة الصور
function generateGridImages(prefix, count) {
  grid.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.imgName = `${prefix}${i}`;

    const img = document.createElement("img");
    img.src = `images/${prefix}${i}.jpg`;
    img.alt = `${prefix}${i}`;
    cell.appendChild(img);

    // نقرتين على الصورة للتبديل بين اللون الأحمر أو إزالته (بعد اختيار الصورة بالزر)
    cell.addEventListener("dblclick", () => {
      if (!imageSelectedLocked) return;
      cell.classList.toggle("red-overlay");
    });

    // عند الضغط مرة واحدة فقط، نختار الصورة ليتم اختيارها لاحقاً عبر الزر
    cell.addEventListener("click", () => {
      if (imageSelectedLocked) return; // منع التغيير بعد التأكيد
      [...grid.children].forEach(c => c.classList.remove("selected-red"));
      cell.classList.add("selected-red");
    });

    grid.appendChild(cell);
  }
}

// زر اختيار الصورة
selectImageBtn.addEventListener("click", () => {
  if (imageSelectedLocked) return;

  const selectedCell = [...grid.children].find(cell => cell.classList.contains("selected-red"));
  if (!selectedCell) return alert("يرجى اختيار صورة بالنقر عليها مرة واحدة");

  selectedBox.src = selectedCell.querySelector("img").src;
  selectedBox.style.display = "block";

  selectImageBtn.style.display = "none";
  imageSelectedLocked = true;
});

// زر الخروج من اللعبة
exitBtn.addEventListener("click", () => {
  if (playerName && currentMode) {
    sendWebhookLog(`اللاعب: ${playerName} خرج من لعبة ${currentMode.name}`);
  }
  hide(gameBoard);
  show(gameSelection);

  selectedBox.src = "";
  selectedBox.style.display = "none";
  imageSelectedLocked = false;

  // إزالة التحديد واللون الأحمر
  [...grid.children].forEach(cell => {
    cell.classList.remove("selected-red");
    cell.classList.remove("red-overlay");
  });

  selectImageBtn.style.display = "inline-block";
});

// إرسال رسالة للويبهوك
function sendWebhookLog(message) {
  fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message }),
  }).catch(() => {});
}

function show(el) {
  el.classList.remove("hidden");
}
function hide(el) {
  el.classList.add("hidden");
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
