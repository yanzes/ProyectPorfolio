document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('lang-switch');
    const texts = document.querySelectorAll('[data-es][data-en]');

    function updateLanguage(lang) {
        texts.forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text) el.innerHTML = text;
        });
    }

    switcher.addEventListener('change', (e) => {
        const lang = e.target.checked ? 'en' : 'es';
        updateLanguage(lang);
    });

    // Idioma por defecto: español
    updateLanguage('es');
})
el.innerHTML = el.dataset[lang];

const langSwitch = document.getElementById('lang-switch');
  const themeSwitch = document.getElementById('theme-switch');

  // Cambia idioma
  langSwitch.addEventListener('change', () => {
    const lang = langSwitch.checked ? 'en' : 'es';
    document.querySelectorAll('[data-en], [data-es]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
  });

  // Cambia modo claro/oscuro
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
  });
