const pages = [
    `<div class="card">
        <h2>🦸‍♂️ ¿Quién es Cyber Cuy?</h2>
        <p><b>Cyber Cuy</b> es el <b>guardián vigilante del mundo digital</b>.  
        Es valiente, inteligente y protector, siempre listo para actuar.</p>
        <p>Es el <b>centinela silencioso del ciberespacio</b>.</p>
        <img src="img/cyber-cuy_2.png" alt="Cyber-Cuy">
    </div>`,

    `<div class="card">
        <h3>🎮 ¿De qué trata esta aventura?</h3>
        <p>Acompañarás a Cyber Cuy en su misión de defender a los usuarios de Internet.</p>
        <img src="img/cyber-cuy_2.png" alt="Cyber-Cuy">
    </div>`,

    `<div class="card">
        <h3>📚 ¿Qué aprenderás?</h3>
        <ul>
            <li>Proteger tus cuentas y dispositivos.</li>
            <li>Identificar estafas y phishing.</li>
            <li>Ser ético y responsable en Internet.</li>
            <li>Cuidar tu identidad y huella digital.</li>
        </ul>
        <img src="img/cyber-cuy_2.png" alt="Cyber-Cuy">
    </div>`,

    `<div class="card">
        <h3>🕹 Misiones del Juego</h3>
        <ul>
            <li><b>Misión 1:</b> Introducción a la ciberseguridad.</li>
            <li><b>Misión 2:</b> Peligros y amenazas del mundo digital.</li>
            <li><b>Misión 3:</b> Cómo protegerte como un héroe del ciberespacio.</li>
        </ul>
        <img src="img/cyber-cuy_2.png" alt="Cyber-Cuy">
    </div>`
];

let currentPage = 0;
const contentDiv = document.getElementById('page-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');
const progressBar = document.getElementById('progress-bar');

const btnM1 = document.getElementById('btn-m1');
const btnM2 = document.getElementById('btn-m2');
const btnM3 = document.getElementById('btn-m3');

function showPage(index) {
    contentDiv.innerHTML = pages[index];
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
    pageIndicator.textContent = `${index + 1} de ${pages.length}`;
    progressBar.style.width = `${((index + 1) / pages.length) * 100}%`;

    // Activar Misión 1 al finalizar
    if(index === pages.length - 1) {
        btnM1.classList.remove('btn-disabled');
        btnM1.href = "modulo1.html";

        // Mostrar mensaje con botón solo una vez
        if (!document.getElementById("unlock-msg")) {
            const message = document.createElement('div');
            message.id = "unlock-msg";
            message.className = "unlock-message";
            message.innerHTML = `
                ✅ ¡Ya puedes iniciar la Misión 1!<br>
                <a href="modulo1.html" class="boton" style="margin-top:10px; display:inline-block;">
                    🚀 Ir a Misión 1
                </a>
            `;
            contentDiv.appendChild(message);
        }
    }
}

prevBtn.addEventListener('click', () => {
    if(currentPage > 0) { currentPage--; showPage(currentPage); }
});

nextBtn.addEventListener('click', () => {
    if(currentPage < pages.length - 1) { currentPage++; showPage(currentPage); }
});

// Bloquear Misión 2 y 3
btnM2.addEventListener('click', (e) => e.preventDefault());
btnM3.addEventListener('click', (e) => e.preventDefault());

// Inicializar
showPage(currentPage);
