let currentPage = window.location.href;
function getAllAdDivs() {
  let intervalId = setInterval(() => {
    const adAreas = document.querySelectorAll('.ad-area');
    if (adAreas.length === 0) {
      console.log('Não existem divs ad-area na página');
    } else {
      console.log('Divs com a classe "ad-area":');
      adAreas.forEach(adArea => console.log(adArea));
    }
    clearInterval(intervalId);
  }, 2000);
}

getAllAdDivs();
setInterval(() => {
  if (window.location.href !== currentPage) {
    currentPage = window.location.href;
    getAllAdDivs();
  }
}, 3000);
