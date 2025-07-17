document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('lang-switch');
    const themeSwitch = document.getElementById('theme-switch');
    const texts = document.querySelectorAll('[data-es][data-en]');

    function updateLanguage(lang) {
        texts.forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text) el.innerHTML = text;
        });
    }

    // Cambia idioma
    langSwitch.addEventListener('change', () => {
        const lang = langSwitch.checked ? 'en' : 'es';
        updateLanguage(lang);
    });

    // Cambia modo claro/oscuro
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
    });

    // Idioma por defecto: español
    updateLanguage('es');
});
  window.addEventListener('load', ()=>{
    document.getElementById('chat').style.display = 'block';
});
