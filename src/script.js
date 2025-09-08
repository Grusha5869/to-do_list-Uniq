const headBtn = document.querySelector('.to-do_list__head__wrapper__info__btn');
const infoBlock = document.querySelector('.to-do_list__info');
const infoBtn = document.querySelector('.to-do_list__info__wrapper__sleep__btn');

function checkClass(elem, elemClass) {
    elem.classList.toggle(elemClass)
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
    listGroupCheckbox.addEventListener('change', () => {
        if (listGroupCheckbox.checked) {
            elemListWrapper.remove()
            let elemListWrapperId = listGroupCheckbox.parentElement.dataset.id
            removeElem(elemListWrapperId)
        }
    });
    

    let elemListText = document.createElement('p');
    elemListText.classList.add('list-group__elem__text');
    elemListText.textContent = inputMain.value;
    
    //Сборка
    elemListWrapper.appendChild(listGroupCheckbox);
    elemListWrapper.appendChild(elemListText);
    listGroup.appendChild(elemListWrapper);

    editingList(elemListWrapper, elemListText)
};

function getElem(i) {
    const listGroup = document.querySelector('.list-group');
    let elemListWrapper = document.createElement('div');
    elemListWrapper.classList.add("to-do_list__base", "list-group__elem");
    elemListWrapper.dataset.id = listArr[i].id

    let listGroupCheckbox = document.createElement('input');
    listGroupCheckbox.type = 'checkbox';
    listGroupCheckbox.name = 'list-checkbox';
    listGroupCheckbox.classList.add('list-group__elem__checkbox');
    listGroupCheckbox.addEventListener('change', () => {
        if (listGroupCheckbox.checked) {
            elemListWrapper.remove()
            let elemListWrapperId = listGroupCheckbox.parentElement.dataset.id
            removeElem(elemListWrapperId)
        }
    });

    let elemListText = document.createElement('p');
    elemListText.classList.add('list-group__elem__text');
    elemListText.textContent = listArr[i].text;
    
    //Сборка
    elemListWrapper.appendChild(listGroupCheckbox);
    elemListWrapper.appendChild(elemListText);
    listGroup.appendChild(elemListWrapper);

    editingList(elemListWrapper, elemListText)
}
function removeElem(dataId) {
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].id === dataId) {
            listArr.splice(i, 1);
            localStorage.setItem('listContent', JSON.stringify(listArr));
        }
    } 
}
function editingList(elemListWrapper, elemListText) {
    
    elemListWrapper.addEventListener('dblclick', () => {
        let editElem = document.createElement('div');
        editElem.classList.add('list-group__edit-elem');
        let editElemTextarea = document.createElement('textarea');
        editElemTextarea.name = 'list-textarea';
        editElemTextarea.classList.add('to-do_list__base', 'list-group__edit-elem__textarea');
        
        //сборка
        editElem.appendChild(editElemTextarea);
        elemListWrapper.replaceWith(editElem);

        editElemTextarea.focus();
        editElemTextarea.select();
        editElemTextarea.addEventListener('blur', () => {
            if (editElemTextarea.value.trim() === "") {
                editElem.replaceWith(elemListWrapper)
            } else {
                editElem.replaceWith(elemListWrapper)
                elemListText.textContent = editElemTextarea.value
            }

            let elemListWrapperId = elemListWrapper.dataset.id;
            for (let i = 0; i < listArr.length; i++) {
                if (listArr[i].id === elemListWrapperId) {
                    listArr[i].text = editElemTextarea.value;
                }   
            }

            localStorage.setItem('listContent', JSON.stringify(listArr));
        });
        
        
    })
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


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < listArr.length; i++) {
        getElem(i)
    };
    
}) 
