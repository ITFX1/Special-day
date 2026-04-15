/* ================= PASSWORD ================= */
function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "DAMGI") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Wrong password...";
    }
}

/* ================= NAVIGATION ================= */
function showSection(section) {

    let sections = ["home", "story", "birthday", "chapterPage"];

    sections.forEach(sec => {
        let el = document.getElementById(sec);
        if (el) el.style.display = "none";
    });

    let active = document.getElementById(section);
    if (active) active.style.display = "flex";
}

/* ================= MUSIC CONTROL ================= */
function stopMusic() {
    let music = document.getElementById("music");
    if (music) {
        music.pause();
        music.currentTime = 0;
    }
}

/* ================= CHAPTER DATA ================= */
let chapters = [
/* ⚠️ KEEP YOUR FULL CHAPTER DATA HERE (nta gihinduka) */
];

/* ================= TYPEWRITER ================= */
function typeWriter(text) {

    let i = 0;
    let speed = 5;

    let box = document.getElementById("chapterText");
    box.innerHTML = "";

    function typing() {
        if (i < text.length) {
            box.innerHTML += text.charAt(i);
            box.scrollTop = box.scrollHeight;
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

/* ================= OPEN CHAPTER ================= */
function openChapter(index) {

    let c = chapters[index];

    document.getElementById("chapterTitle").innerText = c.title;

    showSection("chapterPage");

    setTimeout(() => {
        typeWriter(c.text);
    }, 100);

    let page = document.getElementById("chapterPage");
    page.style.backgroundImage = "url('" + c.bg + "')";

    let music = document.getElementById("music");
    music.src = c.song;
    music.play().catch(()=>{});
}

/* ================= BACK TO LIST ================= */
function backToList() {

    stopMusic();

    document.getElementById("chapterText").innerHTML = "";

    showSection("story");
}

/* ================= TYPEWRITER EFFECT (GENERAL) ================= */
function typeWriterEffect(text, elementId, speed = 30) {

    let i = 0;
    let el = document.getElementById(elementId);
    el.innerHTML = "";

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

/* ================= SLIDER ================= */
function startSlider() {

    let images = [
        "https://res.cloudinary.com/dn0250gby/image/upload/v1776098712/pic2_xqmhyq.jpg",
        "https://res.cloudinary.com/dn0250gby/image/upload/v1776098703/pic3_fwl8sp.jpg",
        "https://res.cloudinary.com/dn0250gby/image/upload/v1776098702/pic5_auafnm.jpg",
        "https://res.cloudinary.com/dn0250gby/image/upload/v1776098707/pic7_zvjiyd.jpg",
        "https://res.cloudinary.com/dn0250gby/image/upload/v1776098714/pic8_eytlw9.jpg"
    ];

    let i = 0;
    let img = document.getElementById("slideImg");

    if (!img) return; // 🔥 safety fix

    setInterval(() => {

        img.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % images.length;
            img.src = images[i];
            img.style.opacity = 1;
        }, 600);

    }, 3500);
}

/* ================= GO HOME ================= */
function goHome() {
    stopMusic();
    showSection("home");
}

/* ================= BIRTHDAY SYSTEM ================= */

/* STEP 1 */
function startBirthday() {

    stopMusic();

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-content">
        <h1>🎁 Hey you ❤️</h1>
        <p>I have something special for you...</p>

        <button onclick="goToStartWatching()">Continue ❤️</button>
        <button onclick="goHome()">⬅ Back</button>
    </div>
    `;

    showSection("birthday");
}

/* STEP 2 */
function goToStartWatching() {

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-content">
        <h1>🎬 Welcome...</h1>
        <p>This is your story ❤️</p>

        <button onclick="startWatching()">Start Watching ▶</button>
    </div>
    `;
}

/* STEP 3 (FULL SCREEN EXPERIENCE) */
function startWatching() {

    stopMusic();

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-full">

        <img id="slideImg" src="https://res.cloudinary.com/dn0250gby/image/upload/v1776098712/pic2_xqmhyq.jpg">

        <div class="controls">
            <button onclick="openFinalMessage()">💌 Open Final Message</button>
            <button onclick="goHome()">⬅ Back</button>
        </div>

    </div>
    `;

    startSlider();

    let music = document.getElementById("music");
    music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776099666/June_14_%EF%B8%8F_cjcutn.mp3";
    music.play().catch(()=>{});
}

/* STEP 4 FINAL MESSAGE */
function openFinalMessage() {

    stopMusic();

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="final-message-page">

        <div class="message-box">
            <h1>🎉 Happy Birthday ❤️</h1>
            <p id="birthdayText"></p>

            <button onclick="goHome()">⬅ Back</button>
        </div>

    </div>
    `;

    let message = `
Today is not just your birthday... 🎂  
it's a reminder of how special you are ❤️  

Through every memory... every moment...  
you have been something I can never replace 🤍  

No matter where life takes us...  
you will always be part of my story 🌙  

Happy Birthday ❤️✨
    `;

    typeWriterEffect(message, "birthdayText", 40);

    let music = document.getElementById("music");
    music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776099666/June_14_%EF%B8%8F_cjcutn.mp3";
    music.play().catch(()=>{});
  }
