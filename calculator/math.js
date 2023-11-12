import { roof } from "./roof.js";
import { stappingTotalPrice } from "./stapping.js";
import { svai } from "./vintovieSvai.js";
import { wallHeightPrice } from "./wallHeight.js";

let length = Number(localStorage.getItem('length'));
let width = Number(localStorage.getItem('width'));
const step = 2;
let kolSvai = (length / step + 1) * (width / step + 1);

// винтовая свая
let svaiPrice = { price: 0 };
const vintPricePlusBtn = document.getElementById('vintPricePlus');
vintPricePlusBtn.addEventListener('click', (e) => {
    svaiPrice = svai(vintPricePlusBtn.id, kolSvai);
    update(svaiPrice);
});

// Железобетоная свая
const jelezBtn = document.getElementById('jelezPricePlus');
jelezBtn.addEventListener('click', (e) => {
    svaiPrice = svai(jelezBtn.id, kolSvai);
    update(svaiPrice);
});


// wallHeight used
let wallPrice = { price: 0 };
// при клике на стену 2.5 метра
document.getElementById('smallWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'smallWallBtn');
    update(wallPrice);
})

// при клике на стену 2.8 метра
document.getElementById('bigWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'bigWallBtn');
    update(wallPrice);
});

// крыша
let roofPrice = { price: 0 };
document.getElementById('roofPrice').addEventListener('click', () => {
    roofPrice = roof(length, width);
    update(roofPrice);
})

let stappingPrice = { price: 0 };
document.getElementById('GorizObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("GorizObvDob", length, width, step);
    update(stappingPrice);
});
document.getElementById('vertObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("vertObvDob", length, width, step);
    update(stappingPrice);
});

// Обновляет изменения при клике на добавить)
function update(current) {
    let main = document.getElementById('totalNumber');
    let RESULT = wallPrice.price + svaiPrice.price + roofPrice.price + stappingPrice.price; // ...
    main.innerText = RESULT;

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
                secondElement.innerHTML = current.secondName + ' ' + current.price;
                el.innerHTML = current.name;
                el.id = current.id;
                el.appendChild(secondElement);
                flag = false;
            }
        }
    }

    if (flag) {
        secondElement.innerHTML = current.secondName + ' ' + current.price;
        childElement.innerHTML = current.name;
        childElement.appendChild(secondElement);
        smetaRow.appendChild(childElement);
    }
}

// При переходе на калькулятор подругажет стоимость всех функций у модалок :)
wallHeightPrice(length, width, 'bigWallBtn');
wallHeightPrice(length, width, 'smallWallBtn');
svai(jelezBtn.id, kolSvai);
svai(vintPricePlusBtn.id, kolSvai);
roof(length, width);
stappingTotalPrice("vertObvDob", length, width, step);
stappingTotalPrice("GorizObvDob", length, width, step);