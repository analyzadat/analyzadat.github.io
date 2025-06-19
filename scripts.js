async function setLang(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    const data = await response.json();

    document.getElementById("subtitle").textContent = data.subtitle;
    document.getElementById("bio").textContent = data.bio;
    document.getElementById("email-button").lastChild.textContent = ' ' + data.button;

    // Update active class
    document.querySelectorAll('.lang-switcher span').forEach(el => el.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
  } catch (error) {
    console.error(`Could not load language "${lang}":`, error);
  }
}

// Load default language
setLang('en');
