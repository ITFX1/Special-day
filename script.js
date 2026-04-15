function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "DAMGI") {
        historyStack = []; // 🔥 RESET HISTORY
        birthdayStep = 0;
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Wrong password...";
    }
}


/* ================= NAVIGATION ================= */
let birthdayStep = 0;
function showSection(section) {

    stopMusic(); // 🔥 STOP MUSIC EVERY TIME YOU CHANGE PAGE

    let sections = ["home", "story", "birthday", "chapterPage"];

    sections.forEach(sec => {
        let el = document.getElementById(sec);
        if (el) el.style.display = "none";
    });

    document.getElementById(section).style.display = "flex";
}

/* ================= CHAPTER DATA ================= */
let chapters = [ /* 🔥 KEEP ALL YOUR DATA EXACTLY AS IT IS */ 
{
title: "🎬 Chapter 1: The First Time I Saw You ❤️✨",
text: `Hari igihe ubuzima butangira bucece… 🤍 nta rusaku, nta muntu ubimenye, ariko bukagenda bwubaka inkuru idasanzwe 🌙✨
Ni uko byatangiye kuri njye… igihe nakubonaga bwa mbere 👀❤️
Hari muri S2 📚 ku kigo cya GS Kiraro Protestant 🏫. Wari uje mushya, uvuye ku kigo cya ES Sumba 🔄. Kuva ku munsi wa mbere, wari utandukanye n’abandi bose ✨. Si uko wivugaga cyane 🤍, ahubwo wari ufite ituze ryihariye ryakurangaga 🌿.
Nibwo natangiye kugushakaho amakuru 🔍… nshaka kumenya uwo uri we, aho uturuka, n’ibikuranga 💭. Kandi uko nagendaga mbimenya, niko nagendaga mbona ko uri umuntu udasanzwe ✨❤️.
Wari umukobwa witonda cyane 🤍… ufite isuku idasanzwe ✨, ubona ko witaho mu buryo burenze uko abandi babigenzaga 🌸. Wari smart 📚… buri gihe wambaye neza 👗, wambaye uniform isa neza nk’iyatewe ipasi neza 🧺✨, ibintu byose bikuranga byari byuzuye ituze n’ubwiza bworoheje ariko bufite agaciro 💎.
Amaso yawe yari afite ubwiza bwihariye 👀✨… atuje 🤍, ariko afite ubusobanuro bwinshi 💭. Nari nkubona ugendana na Lucie 👭, inshuti yawe, ariko n’iyo mwabaga muri kumwe, hari ikintu kuri wowe cyantandukaniraga n’abandi bose ✨.
Sinari nzi neza icyo ari cyo… ariko nari nzi neza ko hari ikintu cyantangiye gukurura umutima wanjye 💓 bucece 🤍.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893735/img1_gc7cje.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775897248/song1_wxtwek.mp3"

},

{
title: "🎬 Chapter 2: The Silent Connection 🤍📖✨",
text: `Nubwo twahuriraga ku kigo buri munsi… 🏫👀 ntabwo twavuganaga 🤐
Si uko tutabishakaga… ahubwo amasoni yari igice cyacu twembi 😊🤍. Njye nkiri umuntu utari usanzwe uvugana n’abakobwa 😅, nawe ufite ituze n’isoni byari bikuranga 🌸. Twabaga turi hafi… ariko kure mu magambo 💭💔.
Ariko ubuzima bugira uburyo bwabwo bwo guhuza abantu 🌙✨.
Umunsi umwe, nabonye ifoto yawe kuri Facebook 📱👀. Wari uherutse gufungura account yawe… kandi ako kanya nahise menya ko ari wowe ❤️. Ifoto yawe wari wambaye jipo y’igitengi 👗, wambaye agapira k’amaboko maremare gafite ijosi 🤍, ufite n’agakapu gato muntoki 🎒✨. Byari byoroshye… ariko byari byiza cyane 💎❤️.
Nta gutekereza kabiri… nahise ngusaba friendship 🤝📩. Kandi igihe wabinyemereye, ni bwo inkuru yacu yatangiye mu buryo butari bwitezwe 🌙✨.
Twatangiye kuganira… 💬 mu magambo asanzwe ya buri munsi. “Hi 👋”, “amakuru 😊”, n’ibindi byo kumenyana 🤍. Nta muntu wari uzi aho byaganaga… ariko buhoro buhoro, twatangiye kumenyana mu buryo bwimbitse 💭❤️.
Igihe cyageze turi muri S3 📚✨… maze ibintu bitangira guhinduka buhoro buhoro 🔄. By’umwihariko mu gihe cya COVID-19 🦠🌍, igihe isi yari ihagaze gato ⏸️, ariko ibiganiro byacu byo byari biri gukura 📈❤️. Ni bwo bwa mbere romantic vibes zatangiye kugaragara hagati yacu 💓✨.
Ariko n’iyo twari tumaze kwegerana mu mutima 💖… ku kigo byari bikiri bya bindi 🤐🏫. Amasoni 😅, kurebana gusa 👀, guca hafi y’undi utavuze 🚶🏾‍♂️🚶🏾‍♀️… ariko umutima wo wari waramaze gutangira kuvuga 💗.
Ndacyibuka neza… igihe cyose nakubonaga 👀❤️, n’iyo tutavugaga 🤍, hari ikintu cyahindukaga muri njye 💫. Umutima wanjye warihutaga gutera 💓💓… numva ntakimeze nk’uko cyari gisanzwe 🌙.
Ni bwo natangiye kumva ko ibyo nari mfite… atari ibisanzwe ❤️‍🔥.
Ko hari ikintu cyari kiri gukura… 🌱💖 kandi cyari gikomeye kurusha uko nari narigeze kubitekereza 😶‍🌫️✨.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893734/img2_durf24.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893856/song2_wh5kqa.mp3"
},

{
title: "Chapter 3: The promises",
text: `🎬 Chapter 3: When We Finally Said It ❤️✨📖
Hari igihe umutima uba waramaze gufata umwanzuro… 💭❤️ nubwo amagambo ataravuga 🤐🌙
Kuri twe, urukundo rwari rwaratangiye kera… 🤍 mu buryo butuje 🌿, mu biganiro bya buri munsi 💬, mu buryo bwo kumenyana buhoro buhoro 👀✨. Icyari gisigaye, kwari ukubyemera no kubivuga 🫶❤️.
Kandi uwo mwanya warageze 🌙✨.
Ni wowe wabimbwiye mbere… 💌 nubwo mbere yaho naguhatiraga kubyemera ukabyanga 😅🤍, wenda ugerageza guhisha uko wiyumvaga 💭. Ariko igihe cyarageze umutima wawe uravuga 💓, umbwira ukuri ✨.
Njye… sinahise mbigusubiza ako kanya 🤐💭. Si uko ntabyumvaga… ahubwo ni uko nari narifatiye icyemezo cyanjye 🧠✨. Nari naribwiye ko nzakunda umukobwa ari uko ngeze igihe cyo gushaka 🕰️🤍.
Ariko wowe… waje uhindura ibyo natekerezaga byose 🔄❤️.
Ijoro ryose naryaga nkabura amahoro 🌙😔, nkibaza 💭, nitekerezaho 😶‍🌫️, nitekereza kuri wowe ❤️… kugeza ubwo nanjye nemeye ukuri ✨.
Ko ibyo nari mfite kuri wowe… atari ibintu byo gutinza cyangwa guhisha 🤍💔.
Ni bwo urukundo rwacu rwatangiye mu buryo bweruye ❤️‍🔥✨.
Byari byiza… 💖 birenze uko nabisobanura ✍️. Twari dufite ibyishimo byoroshye 😊 ariko byuzuye 💞.
Twasezeranye ibintu byinshi… 🤝 tutazibagirana, kutazigera duhemukirana 💍🤍. Twavugaga ejo hazaza twuzuye icyizere 🌅✨—wowe ukaba mama w’abana banjye 👩‍👧‍👦❤️, nanjye nkaba papa w’abana bawe 👨‍👧‍👦💙.
Nubwo byari amagambo asa n’ayo mu bwana 😅💭… kuri njye yari yuzuyemo ukuri ❤️✨.
Kandi muri icyo gihe cyose… numvaga mfite umuntu wihariye 💖, umuntu wanjye by’ukuri 🤍✨.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893726/img3_rgrsoj.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893824/song3_dycghp.mp3"
},

{
title: "Chapter 4: Distance & change",
text: `🎬 Chapter 4: The Distance I Never Explained 💔🌙📖
Ariko ubuzima ntibuhora bugenda uko tubwifuza… 🌪️🤍
Hari igihe ibintu bihinduka buhoro buhoro… 🔄 nta nubwo ubimenya neza 💭.
Ni ko byatangiye kuri njye… 😔
Igihe twari tugeze muri Advanced Level 📚✨, twari dutangiye guhura n’ubuzima busaba byinshi kurushaho 💼💔. Iyo twajyaga mu biruhuko 🏠, wanyandikiraga 📩… nanjye nkagusubiza 💬, ariko si uko byahoze 🤍. Ibiganiro byacu byatangiye kugabanuka 📉, romantic vibes zitangira kuzima buhoro buhoro 💔✨.
Si uko naguhinduye… 😔 si uko nakunze undi ❌❤️.
Ahubwo ni uko ubuzima bwanjye bwari bumeze mu buryo utari ubona neza 👤🌫️.
Hari igihe nabaga nta telephone mfite 📵. Kugira ngo nkwandikire 📩, byasabaga gutira iya mama 🤲📱… kandi hari igihe nabaga ntayibonye 😔.
Ariko hari n’ibirenze ibyo 💔…
Hari ibintu nari ntwaye njyenyine 🤍🧠… inshingano z’ubuzima ziremereye ku mutima w’umuntu ukiri muto 🌧️. Mama yari arwaye 🤍🩹, afite ubumuga… papa atari hafi 🚶‍♂️❌. Byageze aho ubuzima bunshyiraho inshingano zo kuba njyewe nita ku rugo 🏠💔, njyenyine.
Mu gihe abandi batekerezaga urukundo… ❤️🌙 njye narimo ngerageza kubaho 💪😔 no kubaka ejo hazaza 🌅, ntari nzi neza aho bizangeza.
Ariko ikibazo si ibyo nakoze… ❌
Ikibazo ni uko ntabigusobanuriye 🤍💭.
Wowe wabonaga gusa ko ndi kure… 😔 ko ntakiguha umwanya 📉, ko wenda hari abandi naguhisemoho 💔❓.
Kandi uko byagendaga bityo… 🔄 ni ko wagiye ucika intege 💔📉.
Ntabwo nagushinja ❌🤍. Oya.
Wari ufite uburenganzira bwo kumva ko utitaweho 😔. Wari ukwiye kubona umuntu uguha umwanya ⏳❤️, ugaragaza ko agukunda mu buryo bwumvikana 💬💖.
Ariko ukuri ni uku… 🌙
Mu gihe watekerezaga ko ngenda nkwibagirwa… 💭💔
Njye narimo ngerageza kubaho 😔💪, nkomeza umutima ❤️‍🩹, ngerageza kubaka ubuzima nari nzi ko umunsi umwe nashakaga gusangiza nawe 🌅🤍.
Ariko icyo gihe… sinabikoze neza 💔.
Kandi nzi neza ko ibyo byakubabaje 😔🌧️.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893729/img4_dxty6w.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775897336/song4_uvp5jl.mp3"
},

{
title: "Chapter 5: What I never said",
text: `🎬 Chapter 5: The Last Words That Stayed 💔🌙📖
Hari amagambo amwe atajya asibangana… 🕰️💭 n’iyo imyaka yagenda, n’iyo ibintu bihinduka 🔄🤍.
Njye mfite amagambo yawe nkiri kumva kugeza n’uyu munsi 🎧💔.
Byari ku itariki ya 3/9/2022 📅 saa 10:10 z’umugoroba 🌙⏰… ubwo wanyandikiraga kuri Facebook 📱. Ntabwo byari amagambo menshi… 💬 ariko byari bihagije 🤍.
“Byee… I love u.” 💔💌
Ayo ni yo magambo ya nyuma ya romantic nigeze kwakira kuri wowe 🌙❤️.
Nyuma yaho, ibintu byahindutse buhoro buhoro 🔄💔… ibiganiro byacu bitangira gukonja ❄️💬, amagambo agabanuka 📉, n’aho byari bisanzwe bigenda biba nko kuvugana kw’abantu basanzwe 🤍😔.
Ndetse n’igihe uheruka kunyandikira… 📩 ku itariki ya 1/1/2026 🎆, unyifuriza umwaka mushya muhire 🎊🤍, umbwira ko utajya wibagirwa abantu… byari byiza kubyumva 😊💔.
Ariko nanone… byari bitandukanye 🌙.
Byari nk’aho turi abantu babiri bigeze kugira inkuru imwe 📖❤️, ariko ubu bayisoma batandukanye 📖💔.
Njye ndacyayibuka… 😔🤍
ndacyayibika… 💭💔
kandi n’iyo nkubura mu magambo… uri mu mutima 💖🌙.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893734/img5_heblct.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893836/song5_fgdpzh.mp3"
},

{
title: "Chapter 6: The truth about me",
text: `🎬 Chapter 6: What I Never Showed You 🤍💭📖
Hari ibintu byinshi utigeze ubona… 👀💔 si uko nabishakaga kuguhisha ❌🤍, ahubwo ni uko nari ntabizi gusobanura 💭😔.
Ushobora kuba warabonaga ko ndi kure… 🚶‍♂️🌫️ ko ntakwitayeho 💔, ko wenda nagize abandi ❓… ariko ukuri ni uko nta na rimwe byigeze biba byo ❌❤️.
Nari mfite ibintu byinshi ku mutima… 💭🧠 regret yo kutaguha umwanya 😔, kwibaza niba narakubabaje kuruta uko nabyumvaga 💔, no kumva ko wenda natakaje umuntu nari mfite agaciro gakomeye mu buzima bwanjye 🤍🌙.
N’uyu munsi, iyo mbonye status yawe kuri WhatsApp 📱💭… ndahagarara nkayireba 👀. Si ukubera ko nshaka kumenya gusa uko umeze… ahubwo ni uko hari igice cyanjye kigihari kuri wowe ❤️‍🩹.
Hari igihe umutima wanjye ujya kure cyane 🌙💭… nkibaza uko byari kugenda iyo nza kugukorera ibyo wari ukwiye kubona icyo gihe 🤍✨.
Ariko nanone, nkihangana 💪😔… nkibuka ko ibyo nakoze byose byari bifite impamvu 🧠💭, nubwo bitabashije gusobanuka uko byari bikwiye.
Kandi mu mutima wanjye ❤️🌙, sinigeze nica isezerano naguhaye 🤝🤍. Nta wundi muntu wigeze aza gusimbura uwo mwanya ❌💔.
Kuko kuri njye… byari wowe ❤️✨.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893726/img6_uxbjnl.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893858/song6_nfjpus.mp3"
},

{
title: "Chapter 7: If there’s still us",
text: `🎬 Chapter 7: If There’s Still Something Left 🌙❤️📖
Nzi neza ko ubuzima bushobora kuba bwarahinduye byinshi 🔄💭.
Birashoboka ko wowe wamaze gukomeza 🚶‍♀️✨… ko hari abandi baguhaye umwanya 🤍, baguha ibyo wifuzaga icyo gihe 💖. Kandi niba ari byo, sinabiguhakana ❌🤍… kuko wari ubikwiye 🌙✨.
Nta na rimwe nakwifuriza ikindi kitari ibyiza 🌹🤍.
Ariko nanone… hari ikintu ntashobora guceceka 💭❤️.
Niba hari n’agace gato kagisigaye ✨, nubwo kaba ari gake gute 🤏🤍… kagifite ibyo twigeze gusangira 💭❤️, ndifuza ko wabona uwo ndi kuba we uyu munsi 🌱✨.
Si wa wundi wabuze amagambo yo gusobanura… 😔❌
Si wa wundi wahungaga ibyo yumvaga… 🌫️💔
Ahubwo ni umuntu wize 📚✨, wakosoye aho yagombaga gukosora 🔄🤍, kandi witeguye kubaha agaciro ibyo yabonye ko ari byo by’ukuri ❤️🌙.
Si ukuguhatira ❌🤍… ni ukwifuza gusa ko ubona impinduka 🌱✨.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893724/img7_larxvm.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893830/song7_t2mcqa.mp3"
},

{
title: "Chapter 8: DAMGI ❤️",
text: `🎬 Chapter 8: DAMGI ❤️🌙✨📖
Hari ibintu bimwe ubuzima butapfukirana… 🌫️💭 n’iyo igihe cyagenda ⏳🤍.
DAMGI ❤️✨
Si izina gusa… ni inkuru 📖💔.
AMG hagati ya DI… nk’ikintu cyari kiri hagati y’umutima wanjye 💓✨.
N’indi detail itangaje… 💭😶 twavukiye ku itariki imwe 📅. 14/6 ❤️. Wowe 2005 👤, njye 2004 👤. Nk’aho hari ikintu cyaduhuje kitari gisanzwe 🌙✨.
Sinzi niba ari coincidence… 🤍 cyangwa niba hari ibisobanuro birenze ibyo tubasha gusobanura 💭🌌.
Ariko icyo nzi neza… ❤️ ni uko ibyo twagize bitari bisanzwe kuri njye 🌙✨.
Kandi n’uyu munsi… bifite agaciro 💎🤍.`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893733/img8_a9z3rc.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893856/song8_pobaeq.mp3"
},

{
title: "Finally ❤️",
text: `🎬 FINAL: No Matter What Happens Next ❤️🌙📖
Uyu munsi sindi hano ngo nguhindure icyemezo cyawe… 🤍❌
Sindi hano ngo nkwereke ko nari umwere… 💭😔
Ahubwo ndi hano ngo nkubwire ukuri kwanjye 🌙✨.
Ko nigeze gukunda… ❤️ kandi nkakunda by’ukuri 💔✨.
Ko nigeze kugira umuntu… 🤍 kandi uwo muntu akaba yari wowe 🌙❤️.
Niba ubuzima bwaragutwaye ahandi… 🚶‍♀️🌍 nzabyubaha 🤍.
Niba hari uwaguhaye ibyo ntabashije kuguha icyo gihe… 💭❤️ nzamwifuriza kugukomeza neza 🌙✨.
Ariko niba hari n’akanya gato uzafata ugasoma ibi byose… 📖💭
Wibuke ko hari umuntu wigeze kukureba… 👀❤️
akabona byinshi kurenza uko wabitekerezaga 🌙✨.
Kandi n’uyu munsi… 🤍 akiri umuntu ushima ko mu buzima bwe… 💭🌙
Yigeze kugira wowe ❤️✨
— DAMGI ❤️`,
bg: "https://res.cloudinary.com/dn0250gby/image/upload/v1775893720/img9_mtetkc.jpg",
song: "https://res.cloudinary.com/dn0250gby/video/upload/v1775893844/song9_hf7fjm.mp3"
}

];

/* ================= TYPEWRITER (FIXED) ================= */
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

            setTimeout(typing, speed); // 🔥 FIX CRITICAL
        }
    }

    typing();
}

/* ================= OPEN CHAPTER ================= */
function openChapter(index) {

    let c = chapters[index];

    document.getElementById("chapterTitle").innerText = c.title;

    // show first (IMPORTANT FIX)
    showSection("chapterPage");

    setTimeout(() => {
        typeWriter(c.text);
    }, 100);

    // background
    let page = document.getElementById("chapterPage");
    page.style.backgroundImage = "url('" + c.bg + "')";

    // music
    let music = document.getElementById("music");
    music.src = c.song;
    music.play().catch(()=>{});
}

/* ================= BACK ================= */
function backToList() {

    let music = document.getElementById("music");
    music.pause();

    document.getElementById("chapterText").innerHTML = "";

    showSection("story");
}
function startBirthday() {

    birthdayStep = 1;

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-content">
        <h1>🎁 Hey you ❤️</h1>
        <p>I have something special for you...</p>
        <button onclick="startWatching()">Continue ❤️</button>
        <button onclick="goHome()">⬅ Back</button>
    </div>
    `;

    showSection("birthday");
}
function nextBirthdayStep() {

    let birthday = document.getElementById("birthday");

    // STEP 2
    if (birthdayStep === 1) {

        birthdayStep = 2;

        birthday.innerHTML = `
        <div class="birthday-content">

            <h1>🎬 Welcome...</h1>

            <p>This is not just a page... it's your story ❤️</p>

            <button onclick="nextBirthdayStep()">Start Watching ▶</button>

        </div>
        `;
    }

    // STEP 3 (FINAL EXPERIENCE)
    else if (birthdayStep === 2) {

        birthdayStep = 3;

        birthday.innerHTML = `
        <div class="birthday-final">

            <h1>🎉 Happy Birthday ❤️</h1>

            <div class="slider">
                <img id="slideImg" src="https://res.cloudinary.com/dn0250gby/image/upload/v1776098712/pic2_xqmhyq.jpg">
            </div>

            <p id="birthdayText"></p>

            <button onclick="playFinalMessage()">💌 Open Final Message</button>
            <button onclick="showSection('home')">⬅ Back</button>

        </div>
        `;

        startSlider(); // 🔥 image animation

        let music = document.getElementById("music");
        music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776197883/Benson_Boone_-_Beautiful_Things___Piano_Cover_by_Pianella_Piano_256k_acywfr.mp3";
        music.play().catch(()=>{});

    // 🎬 TYPEWRITER MESSAGE
    let message = `
You are one of the most beautiful things  
that ever happened in my life ❤️  

No matter what changed...  
you will always have a special place in my heart 🤍  

Enjoy your day... you deserve everything ✨
    `;

    typeWriterEffect(message, "birthdayText", 40);

}
}

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
function startBirthdayMusic() {
    let music = document.getElementById("music");
    music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776197883/Benson_Boone_-_Beautiful_Things___Piano_Cover_by_Pianella_Piano_256k_acywfr.mp3";
    music.play().catch(()=>{});
}
function playFinalMessage() {

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

    // 🎵 FINAL MUSIC (song ya DAMGI cyangwa iyindi)
    let music = document.getElementById("music");
    music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776099666/June_14_%EF%B8%8F_cjcutn.mp3";
    music.play().catch(()=>{});
}
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

    setInterval(() => {
        img.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % images.length;
            img.src = images[i];
            img.style.opacity = 1;
        }, 400);

    }, 3000);
}
function stopMusic() {
    let music = document.getElementById("music");
    music.pause();
    music.currentTime = 0;
}
function goHome() {
    stopMusic();
    showSection("home");
}
function startWatching() {

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-full">

        <div class="slider">
            <img id="slideImg" src="https://res.cloudinary.com/dn0250gby/image/upload/v1776098712/pic2_xqmhyq.jpg">
        </div>

        <div class="controls">
            <button onclick="openFinal()">💌 Open Final Message</button>
            <button onclick="goHome()">⬅ Back</button>
        </div>

    </div>
    `;

    // 🔥 START SUNO MUSIC HERE
    let music = document.getElementById("music");
    music.src = "https://res.cloudinary.com/dn0250gby/video/upload/v1776099666/June_14_%EF%B8%8F_cjcutn.mp3";
    music.play().catch(()=>{});

    startSlider();
}
function openFinal() {

    stopMusic(); // 🔥 stop slider music

    let birthday = document.getElementById("birthday");

    birthday.innerHTML = `
    <div class="birthday-final">

        <h1>🎉 Happy Birthday ❤️</h1>

        <p id="birthdayText"></p>

        <button onclick="goHome()">⬅ Back</button>

    </div>
    `;

    let message = `
You are one of the most beautiful things ❤️  

No matter what changed...  
you will always stay in my heart 🤍  

Happy Birthday ✨
    `;

    typeWriterEffect(message, "birthdayText", 40);

    // 🎵 INSTRUMENTAL
    let music = document.getElementById("music");
    music.src = "YOUR_INSTRUMENTAL.mp3";
    music.play().catch(()=>{});
}
