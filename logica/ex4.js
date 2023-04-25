function showSigns() {
  const signsArea = document.querySelectorAll('.horoscope-sign-wrapper a ');
  signsArea.forEach(signs => {
    signs.addEventListener('click', e => {
      e.preventDefault();
      const nameSign = signs.querySelector('.sign-name');
      const name = nameSign.textContent;
      alert(`O signo selecionado foi:${name}`);
    });
  });
}

showSigns();
