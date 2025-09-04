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



const inputMain = document.querySelector('.input-group__user-input');
const inputGroupBtn = document.querySelector('.input-group__btn');


function createElem() {
    const listGroup = document.querySelector('.list-group');
    let elemListWrapper = document.createElement('div');
    elemListWrapper.classList.add("to-do_list__base", "list-group__elem");
    let listGroupCheckbox = document.createElement('input');
    listGroupCheckbox.type = 'checkbox';
    listGroupCheckbox.name = 'list-checkbox';
    listGroupCheckbox.classList.add('list-group__elem__checkbox');
    let elemListText = document.createElement('p');
    elemListText.classList.add('list-group__elem__text');

    //Сборка
    elemListWrapper.appendChild(listGroupCheckbox);
    elemListWrapper.appendChild(elemListText);
    listGroup.appendChild(elemListWrapper);
}

inputMain.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        createElem()
    }
})