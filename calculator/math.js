import {roof} from "./roof.js";
import {stappingTotalPrice} from "./stapping.js";
import {afasf} from "./toaliets.js";
import {svai} from "./vintovieSvai.js";
import {wallHeightPrice} from "./wallHeight.js";


let response;

$.ajax({
    url: 'ajax.php',
    method: 'GET',
    success: function (data) {
        response = JSON.parse(data);
    }
});

let itogBtn = document.getElementById('itogBtn');
itogBtn.disabled = true;

let length = Number(localStorage.getItem('length'));
let width = Number(localStorage.getItem('width'));
const step = 2;
let kolSvai = (length / step + 1) * (width / step + 1);

// винтовая свая
let svaiPrice = {price: 0};
const vintPricePlusBtn = document.getElementById('vintPricePlus');
vintPricePlusBtn.addEventListener('click', () => {
    svaiPrice = svai(vintPricePlusBtn.id, kolSvai, vintSvai, vintSvaiDostavka, montajVint);
    update(svaiPrice);
    saveSelectedElements();
    document.getElementById('Svai_JB').style.display = "none";
    document.getElementById('Svai_Vint').style.display = "block";
    localStorage.setItem('svaiPrice', JSON.stringify(svaiPrice));
});

// Железобетоная свая
const jelezBtn = document.getElementById('jelezPricePlus');
jelezBtn.addEventListener('click', () => {
    svaiPrice = svai(jelezBtn.id, kolSvai, jelezobeton, jelezSvaiDostavka, montajJelez);
    update(svaiPrice);
    saveSelectedElements();
    document.getElementById('Svai_Vint').style.display = "none";
    document.getElementById('Svai_JB').style.display = "block";
    localStorage.setItem('svaiPrice', JSON.stringify(svaiPrice));
});

// wallHeight used
let wallPrice = {price: 0};
// при клике на стену 2.5 метра
document.getElementById('smallWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'smallWallBtn', sushkaKamennaya, sip1);
    update(wallPrice);
    saveSelectedElements();
    document.getElementById('img_floor1').style.display = "none";
    document.getElementById('img_floor1_ready').style.display = "block";
    localStorage.setItem('wallPrice', JSON.stringify(wallPrice));
})

// при клике на стену 2.8 метра
document.getElementById('bigWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'bigWallBtn', sushkaKamennaya, sip2);
    update(wallPrice);
    saveSelectedElements();
    document.getElementById('img_floor1').style.display = "none";
    document.getElementById('img_floor1_ready').style.display = "block";
    localStorage.setItem('wallPrice', JSON.stringify(wallPrice));
});

// крыша
let roofPrice = {price: 0};
document.getElementById('roofPrice').addEventListener('click', () => {
    roofPrice = roof(length, width, sushkaKamennaya, krovlyaCherepica);
    update(roofPrice);
    saveSelectedElements();
    document.getElementById('img_roof').style.display = 'none';
    document.getElementById('img_roof_ready').style.display = 'block';
    localStorage.setItem('roofPrice', JSON.stringify(roofPrice));
})

let stappingPrice = {price: 0};
document.getElementById('GorizObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("GorizObvDob", length, width, step, sushkaKamennaya);
    update(stappingPrice);
    saveSelectedElements();
    localStorage.setItem('stappingPrice', JSON.stringify(stappingPrice));
});
document.getElementById('vertObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("vertObvDob", length, width, step, sushkaKamennaya);
    update(stappingPrice);
    saveSelectedElements();
    localStorage.setItem('stappingPrice', JSON.stringify(stappingPrice));
});

// Обновляет изменения при клике на добавить)
function update(current) {
    let main = document.getElementById('totalNumber');
    let RESULT = wallPrice.price + svaiPrice.price + roofPrice.price + stappingPrice.price;
    main.innerText = RESULT;

    if (current.id) {
        let smetaRow = document.querySelector('.matherials_row');
        let childElement = document.createElement('div');
        childElement.classList.add(current.styleName);
        childElement.id = current.id;

        let secondElement = document.createElement('div');
        secondElement.classList.add(current.styleSecondName);

        let children = smetaRow.children;
        let flag = true;
        for (let i = 0; i < children.length; i++) {
            let child = smetaRow.children[i];
            if (child.parentElement === smetaRow) {
                if (child.id === current.id) {
                    flag = false;
                } else if ((child.classList.contains(current.styleName))) {
                    let el = document.getElementById(child.id);
                    secondElement.innerHTML = current.secondName + ' ' + current.price + ' руб.';
                    el.innerHTML = current.majorType;
                    el.id = current.id;
                    el.appendChild(secondElement);
                    flag = false;
                }
            }
        }

        if (flag) {
            secondElement.innerHTML = current.secondName + ' ' + current.price + ' руб.';
            childElement.innerHTML = current.majorType;
            childElement.appendChild(secondElement);
            smetaRow.appendChild(childElement);
        }



        if (smetaRow.children.length === 4)
            itogBtn.disabled = false;

        saveSelectedElements();
    }
}

function saveSelectedElements() {
    const selectedElements = {
        wallPrice: wallPrice,
        svaiPrice: svaiPrice,
        roofPrice: roofPrice,
        stappingPrice: stappingPrice,
        timestamp: Date.now() + 0.1 * 60 * 1000 // 5 секунд хранится значение localstorage (значение писать мимисекундах)
    };
    localStorage.setItem('selectedElements', JSON.stringify(selectedElements));
}

afasf();

// Функция для проверки временной метки в localStorage при загрузке страницы
function checkLocalStorageTimestamp() {
    const selectedElementsString = localStorage.getItem('selectedElements');
    if (selectedElementsString) {
        const selectedElements = JSON.parse(selectedElementsString);
        const timestamp = selectedElements.timestamp;

        if (timestamp && Date.now() < timestamp) {
            wallPrice = selectedElements.wallPrice || {price: 0};
            svaiPrice = selectedElements.svaiPrice || {price: 0};
            roofPrice = selectedElements.roofPrice || {price: 0};
            stappingPrice = selectedElements.stappingPrice || {price: 0};

            // Обновляем состояние на странице
            update(wallPrice);
            update(svaiPrice);
            update(roofPrice);
            update(stappingPrice);
        } else {
            // Если время хранения истекло, сбрасываем данные
            localStorage.removeItem('selectedElements');
        }
    }
}

// При загрузке страницы, проверяем временную метку и обновляем состояние
window.addEventListener('load', () => {
    checkLocalStorageTimestamp();
});

// При переходе на калькулятор подругажет стоимость всех функций у модалок :)

// СВАИ
let vintSvai;
let vintSvaiDostavka;
let montajVint;

let jelezSvaiDostavka;
let jelezobeton;
let montajJelez;

// КРЫША
let sushkaKamennaya;
let krovlyaCherepica;

// СТЕНЫ
let sip1;
let sip2;
let sushka;
setTimeout(() => {
    // СВАИ
    vintSvai = response.variable1;
    vintSvaiDostavka = response.variable3;
    montajVint = response.variable2;
    svai(vintPricePlusBtn.id, kolSvai, vintSvai, vintSvaiDostavka, montajVint);

    jelezobeton = response.variable4;
    jelezSvaiDostavka = response.variable6;
    montajJelez = response.variable5;
    svai(jelezBtn.id, kolSvai, jelezobeton, jelezSvaiDostavka, montajJelez);

    sushkaKamennaya = response.variable11;
    krovlyaCherepica = response.variable13;
    roof(length, width, sushkaKamennaya, krovlyaCherepica)

    sip1 = response.variable7;
    sip2 = response.variable8;
    wallHeightPrice(length, width, 'bigWallBtn', sushkaKamennaya, sip2);
    wallHeightPrice(length, width, 'smallWallBtn', sushkaKamennaya, sip1);

    stappingTotalPrice("vertObvDob", length, width, step, sushkaKamennaya);
    stappingTotalPrice("GorizObvDob", length, width, step, sushkaKamennaya);

}, 1000);