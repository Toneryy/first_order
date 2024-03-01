const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-buttn');
const navBtnImg = document.querySelector('#nav-button-image');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./data/nav-close.svg";
    } else {
        navBtnImg.src = "./data/catalog-mb.png";
    }
}

