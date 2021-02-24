'use strict'
const searchElem = document.querySelector('.search');
const currentSelectElem = document.querySelector('.select__current');
const selectInputElem = document.querySelector('#selectInput');
const searchInputElem = document.querySelector('#searchInput');
const selectItem = document.querySelectorAll('.select__item');
const btnClearSelect = document.querySelector('.select__btn-close');
const btnSearchClose = document.querySelector('.search__btn-close');
const selectElem = document.querySelector('.select');
const currentPlaceholder = 'Your country';
const popUp = document.querySelector('.pop-up');
const btnsSubmitForm = document.querySelectorAll('.pop-up-btn');

function checkActiveSelectElem(e, input) {
    const target = e.target;
    const activePlaceholder = ' Example, Russia';
    
    if (target.id === input.id && input.placeholder === currentPlaceholder) {
        input.placeholder = activePlaceholder;
    } else if (target.id === input.id) {
        currentSelectElem.classList.add('select__is-active');
        selectElem.classList.add('select__active-on');
        selectElem.classList.remove('select__is-selected');
    } else {
        currentSelectElem.classList.remove('select__is-active');
        selectElem.classList.remove('select__active-on');
    }
}

function clearSelected(input) {
    input.placeholder = currentPlaceholder;
    selectElem.classList.remove('select__is-selected');
    selectItem.forEach(item => {
        item.classList.remove('select__item--active')
    });
}

function selectChoose(e) {
    const target = e.target;
    let itemText = target.innerText;
    for(let selected of selectItem) {
        selected === target ? selected.classList.add('select__item--active') : selected.classList.remove('select__item--active');
    }
    selectInputElem.placeholder = itemText;
    selectElem.classList.add('select__is-selected');
}

currentSelectElem.addEventListener('click', e => {
    e.preventDefault();
    checkActiveSelectElem(e, selectInputElem);
});

selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
});

window.addEventListener('click', (e) => {
    checkActiveSelectElem(e, selectInputElem);
    searchElem.classList.remove('search__is-active');
});

btnClearSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    clearSelected(selectInputElem);
});

btnSearchClose.addEventListener('click', (e) => {
    e.preventDefault();
    searchInputElem.value = '';
})

searchInputElem.addEventListener('click', (e) => {
    const target = e.target;
    e.stopPropagation();
    if (target.id === searchInputElem.id) {
        searchElem.classList.add('search__is-active');
    }
});

btnsSubmitForm.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(btn);
        e.preventDefault();
        popUp.classList.add('pop-up__hidden');
    });
});