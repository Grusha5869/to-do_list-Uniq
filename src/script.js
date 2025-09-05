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
let listArr = JSON.parse(localStorage.getItem('listContent')) || [];

function createElem() {
    const listGroup = document.querySelector('.list-group');
    let elemListWrapper = document.createElement('div');
    elemListWrapper.classList.add("to-do_list__base", "list-group__elem");
    elemListWrapper.dataset.id = Date.now();
    listArr.push({
        id: elemListWrapper.dataset.id,
        text: inputMain.value
    })
    
    localStorage.setItem('listContent', JSON.stringify(listArr))

    let listGroupCheckbox = document.createElement('input');
    listGroupCheckbox.type = 'checkbox';
    listGroupCheckbox.name = 'list-checkbox';
    listGroupCheckbox.classList.add('list-group__elem__checkbox');
    

    let elemListText = document.createElement('p');
    elemListText.classList.add('list-group__elem__text');
    elemListText.textContent = inputMain.value;
    
    //Сборка
    elemListWrapper.appendChild(listGroupCheckbox);
    elemListWrapper.appendChild(elemListText);
    listGroup.appendChild(elemListWrapper);
};

function getElem(i) {
    const listGroup = document.querySelector('.list-group');
    let elemListWrapper = document.createElement('div');
    elemListWrapper.classList.add("to-do_list__base", "list-group__elem");

    let listGroupCheckbox = document.createElement('input');
    listGroupCheckbox.type = 'checkbox';
    listGroupCheckbox.name = 'list-checkbox';
    listGroupCheckbox.classList.add('list-group__elem__checkbox');
    

    let elemListText = document.createElement('p');
    elemListText.classList.add('list-group__elem__text');
    elemListText.textContent = listArr[i].text;
    
    //Сборка
    elemListWrapper.appendChild(listGroupCheckbox);
    elemListWrapper.appendChild(elemListText);
    listGroup.appendChild(elemListWrapper);
}

inputMain.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (inputMain.value.trim() === "") {
            inputMain.style.border = '2px solid red';
        } else {
            inputMain.style.border = 'none';
            createElem()
            inputMain.value = "";
        }
    }
});
inputGroupBtn.addEventListener('click', () => {
    if (inputMain.value.trim() === "") {
        inputMain.style.border = '2px solid red';
    } else {
        inputMain.style.border = 'none';
        createElem()
        inputMain.value = "";
    }
});
/* listGroupCheckbox.addEventListener('change', () => {
    if (listGroupCheckbox.checked) {
        console.log(listGroupCheckbox.parentElement);
        
    }
}) */

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < listArr.length; i++) {
        getElem(i)
    };

})