const logo = document.getElementById('logoSvg');
const aboutSection = document.getElementsByClassName('about')[0];

aboutSection.style.bottom = logo.clientHeight / 2 + 5 +'px';

window.addEventListener('resize', () => {
  aboutSection.style.bottom = logo.clientHeight / 2 + 5 +'px';
})
  console.log(logo.clientHeight);