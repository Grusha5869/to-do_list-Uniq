const headBtn = document.querySelector('.to-do_list__head__wrapper__info__btn');
const infoBlock = document.querySelector('.to-do_list__info');
const infoBtn = document.querySelector('.to-do_list__info__wrapper__sleep__btn');

function checkClass(elem, elemClass) {
    elem.classList.toggle(`${elemClass}`)
};

headBtn.addEventListener('click', () => {
    checkClass(infoBlock, "sleep")
});
infoBtn.addEventListener('click', () => {
    checkClass(infoBlock, "sleep")
})