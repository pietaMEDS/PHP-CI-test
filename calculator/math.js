import { roof } from "./roof.js";
import { stappingTotalPrice } from "./stapping.js";
import { svai } from "./vintovieSvai.js";
import { wallHeightPrice } from "./wallHeight.js";

let length = Number(localStorage.getItem('length'));
let width = Number(localStorage.getItem('width'));
const step = 2;
let kolSvai = (length / step + 1) * (width / step + 1);



// винтовая свая
let svaiPrice = 0;
const vintPricePlusBtn = document.getElementById('vintPricePlus');
vintPricePlusBtn.addEventListener('click', (e) => {
    svaiPrice = svai(vintPricePlusBtn.id, kolSvai);
    update(e);
});

// Железобетоная свая
const jelezBtn = document.getElementById('jelezPricePlus');
jelezBtn.addEventListener('click', (e) => {
    svaiPrice = svai(jelezBtn.id, kolSvai);
    update(e);
});


// wallHeight used
let wallPrice = 0;
// при клике на стену 2.5 метра
document.getElementById('smallWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'smallWallBtn');
    update();
})

// при клике на стену 2.8 метра
document.getElementById('bigWallBtn').addEventListener('click', () => {
    wallPrice = wallHeightPrice(length, width, 'bigWallBtn');
    update();
});

// крыша
let roofPrice = 0;
document.getElementById('roofPrice').addEventListener('click', () => {
    roofPrice = roof(length, width);
    update();
})

let stappingPrice = 0;
document.getElementById('GorizObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("GorizObvDob", length, width, step);
    update();
});
document.getElementById('vertObvDob').addEventListener('click', () => {
    stappingPrice = stappingTotalPrice("vertObvDob", length, width, step);
    update();
});

// Обновляет изменения при клике на добавить)
function update(e) {
    let main = document.getElementById('totalNumber');
    let RESULT = wallPrice + svaiPrice + roofPrice + stappingPrice; // ...
    main.innerText = RESULT;
}

// При переходе на калькулятор подругажет стоимость всех функций у модалок :)
wallHeightPrice(length, width, 'bigWallBtn');
wallHeightPrice(length, width, 'smallWallBtn');
svai(jelezBtn.id, kolSvai);
svai(vintPricePlusBtn.id, kolSvai);
roof(length, width);
stappingTotalPrice("vertObvDob", length, width, step);
stappingTotalPrice("GorizObvDob", length, width, step);
