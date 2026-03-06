const tg = window.Telegram.WebApp;
tg.ready();

const projectData = {
    'darvishcrm' : {
        title: "Darvish CRM",
        icon: "fa-hospital-user",
        subtitle: "Nevrologiya klinikasi uchun CRM",
        desc: "Klinika boshqaruvini to'liq avtomatlashtiruvchi tizim. Bemorlar tarixi, to'lovlar tahlili va shifokorlar qabuli nazorati.",
        link: "https://t.me/muhib_dev"
    },
    'mdcrmbot' : {
        title: "MD CRM",
        icon: "fa-store",
        subtitle: "Do'konlar savdo tizimi",
        desc: "Shtrix-kod skanerlash, ombor qoldig'i nazorati va real-vaqtdagi savdo statistikalarini taqdim etuvchi aqlli tizim.",
        link: "https://t.me/mdcrm_bot"
    },
    'hasan': {
        title: "Hasan Al Muqriy",
        icon: "fa-kaaba",
        subtitle: "Ma'rifiy platforma",
        desc: "Hasanxon Yaxyo Abdulmajidning audio va video darsliklari jamlangan, qulay qidiruv tizimiga ega platforma.",
        link: "https://t.me/hasanalmuqriy_bot"
    },
    'darvishbot': {
        title: "Gavhar Darvish",
        icon: "fa-brain",
        subtitle: "Psixologik yordam boti",
        desc: "Murakkab psixologik testlar va darsliklarni o'z ichiga olgan, foydalanuvchi uchun maxsus paginatsiyaga ega bot.",
        link: "https://t.me/gavhardarvish_bot"
    },
    'abcd': {
        title: "ABCD Test",
        icon: "fa-square-poll-vertical",
        subtitle: "Smart Attestation",
        desc: "Ta'lim muassasalari uchun mo'ljallangan, minglab foydalanuvchilar natijasini soniyalarda hisoblovchi tizim.",
        link: "https://t.me/ABCD_att_Testbot"
    },
    'chemistry_rasulov': {
        title: "Kimyo Rash Bot",
        icon: "fa-flask-vial",
        subtitle: "RMS o'quv markazi uchun",
        desc: "Rash modeli asosida testlarni tekshirish, referral tizim va majburiy obuna funksiyalari bilan jihozlangan.",
        link: "https://t.me/KimyoRash_bot"
    },
    'kenjayevschool': {
        title: "Kenjayev School",
        icon: "fa-school",
        subtitle: "Ta'limni raqamlashtirish",
        desc: "O'quv markazi faoliyatini avtomatlashtirish va o'quvchilar bilimini Rash modeli yordamida baholash tizimi.",
        link: "https://t.me/kenjayevschool_bot"
    },
    'sarvarrahmonqulov': {
        title: "Sarvar Rahmonqulov",
        icon: "fa-microscope",
        subtitle: "Biologiya o'quv platformasi",
        desc: "Pullik va bepul video materiallar, murakkab paginatsiya va biologiya fanidan maxsus o'quv qo'llanmalar jamlanmasi.",
        link: "https://t.me/sarvarbiologiyabot"
    },
    'vanillbot': {
        title: "Le Vanille",
        icon: "fa-cake-candles",
        subtitle: "Shirinlik do'koni uchun platforma",
        desc: "Turli xil shirinliklar sotuvi bilan shug'ullanuvchi brend uchun platforma. Mijoz qismi: Mahsulotlar ro'yxati, kategoriyasi, narxlari, savat. Admin qismi: Kun/hafta/oy/yillik hisobot, kategoriya va mahsulotlar bo'yicha filtrlar, yetkazuvchilar hisobotlari, buyurtma qabul ma'lumotlari",
        link: "https://t.me/vanilluzbot"
    }
};

function render() {
    const list = document.getElementById('project-list');
    if (!list) return;
    
    list.innerHTML = ''; // Tozalash
    
    Object.keys(projectData).forEach(id => {
        const p = projectData[id];
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openProject(id);
        
        card.innerHTML = `
            <div class="p-icon"><i class="fas ${p.icon}"></i></div>
            <div class="p-info">
                <h4>${p.title}</h4>
                <p>${p.subtitle}</p>
            </div>
            <i class="fas fa-chevron-right" style="color:#d1d1d6; font-size:14px;"></i>
        `;
        list.appendChild(card);
    });
}

function openProject(id) {
    const p = projectData[id];
    const content = document.getElementById('sheet-content');
    const overlay = document.getElementById('overlay');
    const sheet = document.getElementById('sheet');

    // Desc matnini parse qilish
    function formatDesc(desc) {
        if (desc.includes('Mijoz qismi:') || desc.includes('Admin qismi:')) {
            const parts = desc.split(/(?=Mijoz qismi:|Admin qismi:)/g);
            let html = '';
            parts.forEach(part => {
                part = part.trim();
                if (!part) return;

                if (part.startsWith('Mijoz qismi:') || part.startsWith('Admin qismi:')) {
                    const colonIdx = part.indexOf(':');
                    const label = part.substring(0, colonIdx);
                    const items = part.substring(colonIdx + 1).trim()
                        .split(',')
                        .map(i => i.trim())
                        .filter(Boolean);

                    const color = part.startsWith('Mijoz') ? '#0071e3' : '#34c759';
                    const icon  = part.startsWith('Mijoz') ? 'fa-user' : 'fa-user-shield';

                    html += `
                        <div style="background:white; border-radius:18px; padding:16px 18px; margin-bottom:12px; text-align:left;">
                            <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                                <div style="width:28px;height:28px;background:${color}15;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                                    <i class="fas ${icon}" style="color:${color};font-size:13px;"></i>
                                </div>
                                <span style="font-weight:700; font-size:13px; color:${color}; text-transform:uppercase; letter-spacing:0.5px;">${label}</span>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:6px;">
                                ${items.map(item => `
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0;"></div>
                                        <span style="font-size:14px; color:#3a3a3c;">${item}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    html += `<p style="color:#86868b; line-height:1.6; font-size:15px; text-align:center; margin-bottom:12px; padding:0 5px;">${part}</p>`;
                }
            });
            return html;
        }
        return `<p style="color:#86868b; line-height:1.6; font-size:16px; text-align:center; margin-bottom:25px; padding:0 10px;">${desc}</p>`;
    }

    content.innerHTML = `
        <div style="text-align:center; margin-bottom:20px;">
            <div style="width:70px; height:70px; background:#f0f7ff; border-radius:20px; display:flex; align-items:center; justify-content:center; margin:0 auto 15px;">
                <i class="fas ${p.icon}" style="font-size:30px; color:#0071e3;"></i>
            </div>
            <h2 style="font-size:26px; font-weight:700; color:#1d1d1f; margin-bottom:5px;">${p.title}</h2>
            <p style="color:#0071e3; font-weight:600; font-size:14px; text-transform:uppercase; letter-spacing:1px;">${p.subtitle}</p>
        </div>
        <div style="margin-bottom:20px;">${formatDesc(p.desc)}</div>
        <a href="${p.link}" target="_blank" style="display:block; background:#1d1d1f; color:white; text-align:center; padding:18px; border-radius:22px; text-decoration:none; font-weight:600; transition:0.3s;"
           onclick="tg.HapticFeedback.impactOccurred('light')">
           Loyihani ko'rish <i class="fas fa-external-link-alt" style="margin-left:8px; font-size:13px;"></i>
        </a>
    `;

    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
        sheet.style.bottom = '0';
    }, 10);

    tg.HapticFeedback.impactOccurred('medium');
}

function closeProject() {
    const overlay = document.getElementById('overlay');
    const sheet = document.getElementById('sheet');
    
    overlay.style.opacity = '0';
    sheet.style.bottom = '-100%';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

function closeProject() {
    const overlay = document.getElementById('overlay');
    const sheet = document.getElementById('sheet');
    
    // Yopilishda ham vibratsiya beramiz
    tg.HapticFeedback.notificationOccurred('success'); 

    overlay.style.opacity = '0';
    sheet.style.bottom = '-100%';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

// Sahifa yuklanganda render qilish
document.addEventListener('DOMContentLoaded', render);
