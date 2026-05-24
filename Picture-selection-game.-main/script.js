// =====================================
// Guess Arena - Professional JS
// =====================================

// =====================================
// الإعدادات
// =====================================

const CONFIG = {
  TIMER:  Infinity,
  IMAGE_PATH: "images/",
  IMAGE_FORMAT: "jpg",
  FOLLOWERS_REFRESH: 300000
};

// =====================================
// بيانات المشاهير
// =====================================

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
  img31: { name: "عبدالعزيز دلحي", team: "انسباير", followers: "220K" },
  img32: { name: "هاج لفت", team: "انسباير", followers: " 34K." },
    img33: { name: "احمد تيستو ", team: "انسباير", followers: "19.3K" },
      img34: { name: "عيسئ", team: "انسباير", followers: "25.9K" },
        img35: { name: "فوزاني", team: "انسباير", followers: "22.5K " },
  img36: { name: "محمد آل مسعود ", team: "انسباير", followers: "83.9K" }
};

// =====================================
// بيانات الدول
// =====================================

const countryData = {

  // آسيا

  immg1: {
    continent: "آسيا",
    country: "اليابان",
    population: "123M"
  },

  immg3: {
    continent: "آسيا",
    country: "المملكة العربية السعودية",
    population: "36M"
  },

  immg4: {
    continent: "آسيا",
    country: "الكويت",
    population: "4.5M"
  },

  immg5: {
    continent: "آسيا",
    country: "الصين",
    population: "1.4B"
  },

  immg6: {
    continent: "آسيا",
    country: "الإمارات العربية المتحدة",
    population: "10M"
  },

  immg13: {
    continent: "آسيا",
    country: "قطر",
    population: "3M"
  },

  immg14: {
    continent: "آسيا",
    country: "البحرين",
    population: "1.7M"
  },

  immg23: {
    continent: "آسيا",
    country: "عُمان",
    population: "4.6M"
  },

  immg24: {
    continent: "آسيا",
    country: "اليمن",
    population: "30M"
  },

  immg25: {
    continent: "آسيا",
    country: "كوريا الجنوبية",
    population: "52M"
  },

  immg26: {
    continent: "آسيا",
    country: "كوريا الشمالية",
    population: "26M"
  },

  immg27: {
    continent: "آسيا",
    country: "الأردن",
    population: "11M"
  },

  immg28: {
    continent: "آسيا",
    country: "فلسطين",
    population: "5.5M"
  },

  immg29: {
    continent: "آسيا",
    country: "الهند",
    population: "1.43B"
  },

  immg30: {
    continent: "آسيا",
    country: "باكستان",
    population: "243M"
  },

  // آسيا وأوروبا

  immg20: {
    continent: "آسيا وأوروبا",
    country: "روسيا",
    population: "145M"
  },

  immg22: {
    continent: "آسيا وأوروبا",
    country: "تركيا",
    population: "86M"
  },

  // أفريقيا

  immg2: {
    continent: "أفريقيا",
    country: "مصر",
    population: "110M"
  },

  immg11: {
    continent: "أفريقيا",
    country: "الجزائر",
    population: "45M"
  },

  immg12: {
    continent: "أفريقيا",
    country: "المغرب",
    population: "37M"
  },

  // أوروبا

  immg7: {
    continent: "أوروبا",
    country: "فرنسا",
    population: "68M"
  },

  immg8: {
    continent: "أوروبا",
    country: "ألمانيا",
    population: "84M"
  },

  immg9: {
    continent: "أوروبا",
    country: "إيطاليا",
    population: "60M"
  },

  immg10: {
    continent: "أوروبا",
    country: "إسبانيا",
    population: "47M"
  },

  immg21: {
    continent: "أوروبا",
    country: "أوكرانيا",
    population: "36M"
  },

  // أمريكا الشمالية

  immg15: {
    continent: "أمريكا الشمالية",
    country: "الولايات المتحدة الأمريكية",
    population: "335M"
  },

  immg16: {
    continent: "أمريكا الشمالية",
    country: "كندا",
    population: "40M"
  },

  immg17: {
    continent: "أمريكا الشمالية",
    country: "المكسيك",
    population: "130M"
  },

  // أمريكا الجنوبية

  immg18: {
    continent: "أمريكا الجنوبية",
    country: "البرازيل",
    population: "215M"
  },

  immg19: {
    continent: "أمريكا الجنوبية",
    country: "الأرجنتين",
    population: "46M"
  }

};

// =====================================
// العناصر
// =====================================

const loginScreen = document.getElementById("loginScreen");
const modeScreen = document.getElementById("modeScreen");
const gameScreen = document.getElementById("gameScreen");

const playerNameInput = document.getElementById("playerName");

const enterBtn = document.getElementById("enterBtn");

const grid = document.getElementById("grid");

const previewImage = document.getElementById("previewImage");

const infoContent = document.getElementById("infoContent");

const playerText = document.getElementById("playerText");

const timerText = document.getElementById("timer");

const selectBtn = document.getElementById("selectBtn");

const exitBtn = document.getElementById("exitBtn");

// =====================================
// متغيرات
// =====================================

let currentMode = "";

let isSelecting = false;

let timer = CONFIG.TIMER;

let timerInterval = null;

let selectedCell = null;

// =====================================
// دخول اللعبة
// =====================================

enterBtn.addEventListener("click", enterGame);

playerNameInput.addEventListener("keydown", function(e) {

  if (e.key === "Enter") {
    enterGame();
  }

});

function enterGame() {

  const name = playerNameInput.value.trim();

  if (name.length < 2) {

    showNotification("اكتب اسم صحيح");

    return;

  }

  playerText.textContent = name;

  loginScreen.classList.add("hidden");

  modeScreen.classList.remove("hidden");

}

// =====================================
// اختيار المود
// =====================================

document.querySelectorAll(".mode-card").forEach(function(card) {

  if (card.classList.contains("disabled")) return;

  card.addEventListener("click", function() {

    currentMode = card.dataset.mode;

    modeScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    startGame();

  });

});

// =====================================
// بدء اللعبة
// =====================================

function startGame() {

  loadImages();

  startTimer();

  loadFollowers();

}

// =====================================
// التايمر
// =====================================

function startTimer() {

  clearInterval(timerInterval);

  timer = CONFIG.TIMER;

  timerText.style.color = "white";

  timerText.textContent = timer;

  timerInterval = setInterval(function() {

    timer--;

    timerText.textContent = timer;

    if (timer <= 10) {
      timerText.style.color = "red";
    }

    if (timer <= 0) {

      clearInterval(timerInterval);

      endGame();

    }

  }, 1000);

}

// =====================================
// نهاية اللعبة
// =====================================

function endGame() {

  showNotification("انتهى الوقت");

  grid.style.pointerEvents = "none";

}

// =====================================
// تحميل الصور
// =====================================

function loadImages() {

  grid.innerHTML = "";

  for (let i = 1; i <= 36; i++) {

    const id =
      currentMode === "celebrities"
      ? "img" + i
      : "immg" + i;

    const cell = document.createElement("div");

    cell.className = "cell";

    const img = document.createElement("img");

    img.src =
      CONFIG.IMAGE_PATH +
      id +
      "." +
      CONFIG.IMAGE_FORMAT;

    img.alt = id;

    img.loading = "lazy";

    img.draggable = false;

    // صورة خربانة

    img.onerror = function() {

      this.src =
        "https://placehold.co/300x300?text=No+Image";

      this.classList.add("error-image");

    };

    cell.appendChild(img);

    // ضغط يسار

    cell.addEventListener("click", function() {

      if (isSelecting) {

        selectImage(id, img.src, cell);

        return;

      }

      toggleMark(cell);

    });

    // ضغط يمين

    cell.addEventListener("contextmenu", function(e) {

      e.preventDefault();

      toggleMark(cell);

    });

    // Hover

    cell.addEventListener("mouseenter", function() {

      updateInfo(id);

    });

    grid.appendChild(cell);

  }

}

// =====================================
// اختيار صورة
// =====================================

selectBtn.addEventListener("click", function() {

  isSelecting = true;

  showNotification("اختر صورة");

});

function selectImage(id, imageSrc, cell) {

  previewImage.src = imageSrc;

  updateInfo(id);

  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }

  selectedCell = cell;

  selectedCell.classList.add("selected");

  isSelecting = false;

}

// =====================================
// تحديد
// =====================================

function toggleMark(cell) {

  cell.classList.toggle("marked");

}

// =====================================
// تحديث المعلومات
// =====================================

function updateInfo(id) {

  // مشاهير

  if (currentMode === "celebrities") {

    const data = celebrityData[id];

    if (!data) {

      infoContent.innerHTML =
        "<p>لا توجد معلومات</p>";

      return;

    }

    infoContent.innerHTML = `
      <p>👤 الاسم: ${data.name}</p>
      <p>🏆 الفريق: ${data.team}</p>
      <p>📈 المتابعين: ${data.followers}</p>
      <p>▶ القناة: ${data.youtube}</p>
    `;

  }

  // دول

  else {

    const data = countryData[id];

    if (!data) {

      infoContent.innerHTML =
        "<p>لا توجد معلومات</p>";

      return;

    }

    infoContent.innerHTML = `
      <p>🌍 القارة: ${data.continent}</p>
      <p>🏳 الدولة: ${data.country}</p>
      <p>👥 السكان: ${data.population}</p>
    `;

  }

}

// =====================================
// API KEY
// =====================================

const API_KEY = "PUT_YOUR_API_KEY_HERE";

// =====================================
// تحديث المتابعين
// =====================================

async function loadFollowers() {

  if (currentMode !== "celebrities") return;

  if (API_KEY === "PUT_YOUR_API_KEY_HERE") return;

  for (const id in celebrityData) {

    const celeb = celebrityData[id];

    try {

      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/channels" +
        "?part=statistics" +
        "&forHandle=" +
        celeb.youtube.replace("@", "") +
        "&key=" +
        API_KEY
      );

      const data = await response.json();

      if (
        data.items &&
        data.items[0] &&
        data.items[0].statistics
      ) {

        const subscribers =
          data.items[0].statistics.subscriberCount;

        celeb.followers =
          formatFollowers(subscribers);

      }

    } catch (error) {

      console.error(error);

    }

  }

}

// =====================================
// تنسيق الأرقام
// =====================================

function formatFollowers(number) {

  number = Number(number);

  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }

  return number;

}

// =====================================
// إشعار
// =====================================

function showNotification(message) {

  const notification =
    document.createElement("div");

  notification.className = "notification";

  notification.innerText = message;

  document.body.appendChild(notification);

  setTimeout(function() {
    notification.classList.add("show");
  }, 100);

  setTimeout(function() {

    notification.classList.remove("show");

    setTimeout(function() {
      notification.remove();
    }, 300);

  }, 2500);

}

// =====================================
// خروج
// =====================================

exitBtn.addEventListener("click", function() {

  clearInterval(timerInterval);

  location.reload();

});

// =====================================
// منع السحب
// =====================================

document.addEventListener("dragstart", function(e) {

  e.preventDefault();

});

// =====================================
// منع كلك يمين
// =====================================

document.addEventListener("contextmenu", function(e) {

  if (!e.target.closest(".cell")) {
    e.preventDefault();
  }

});

// =====================================
// تحديث المتابعين
// =====================================

setInterval(function() {

  loadFollowers();

}, CONFIG.FOLLOWERS_REFRESH);