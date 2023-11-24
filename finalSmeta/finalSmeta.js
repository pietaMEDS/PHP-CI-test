//Нулевое перекрытие
let length = Number(localStorage.getItem('length'));
let width = Number(localStorage.getItem('width'));


let sipPan = length * width / (2.5 * 1.25);
let obrezki = 0.1;
let itogSip = sipPan + sipPan * obrezki;
let sipNaNulev = itogSip * 4600; // поменять на итоговую с бд(какие-то сипы)

let pilmatLng = itogSip * 2 * (2.5 + 1.25 / 2) * 2.8;
let V = pilmatLng * 0.04 * (0.224 - 0.024);
let obrezkiTwo = 0.15;
let itogV = V + V * obrezkiTwo;
let pilomatNaNulev = itogV * 24725; // поменять на итоговую с бд(пиломат каменной сушки)
let resultNulev = sipNaNulev + pilomatNaNulev;


//Потолок первого этажа
let obrezkiRoof = 0.1;
let itogSipRoof = sipPan + sipPan * obrezkiRoof;
let sipPanRoof = itogSipRoof * 4140; // Поменять на D35
let pilmatRoofLng = itogSipRoof * (2.5 + 1.25 / 2) * 2;
let VRoof = pilmatRoofLng * 0.04 * (0.174 - 0.024);
let obrezkiRoofTwo = 0.15;
let itogVRoof = VRoof + VRoof * obrezkiRoofTwo;
let pilomatRoofItog = itogVRoof * 24725 //Поменять на D42
let fullRoof = sipPanRoof + pilomatRoofItog;

//Обвязка крыльца
let lengthVerDosk = 3 * 2 * 3;
let lengthGorDosk = (3 / 2 + 1)* 2 * 3;
let valueObv = 0.33;
let itogObv = valueObv * 24725; //d42
// let valuePil = (((2+3)*2/0.6*2+2.5*4+2/0.6*3*4)) * 0.15 * 0.05; ХУЙ ПАЙМИ КАК ЭТО СЧИТАЕТСЯ
// console.log(valuePil);





let matObjArr = [
    nullevPerekrit = {
    id: 5,
    majorType: 'Нулевое перекрытие',
    minorType: 'Нулевое перекрытие',
    total: Math.round(resultNulev) + ' руб.',
    firstMat: 'СИП панели на нулевое перекрытие',
    firstMatPrice: Math.round(sipNaNulev) + ' руб.',
    secondMat: 'Пиломатериал на нулевое перекрытие',
        secondMatPrice: Math.round(pilomatNaNulev) + ' руб.',
    thirdMat: 'СИП панели',
    thirdMatPrice: Math.round(itogSip) + ' шт.'
    },

    roofObj = {
        id: 6,
        majorType: 'Потолок первого этажа',
        minorType: 'Потолок первого этажа',
        total: Math.round(fullRoof) + ' руб.'
    }
];


for(let i = 0; i < 13; i++){
    if(i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12){
        let  grid = document.querySelector(".gridContainer");
        let pusto = document.createElement("div");
        grid.appendChild(pusto);
    }
    let newElementContainer = document.createElement("div");
    newElementContainer.classList.add("elementContainer");

    let spanMajorType = document.createElement("p");
    spanMajorType.classList.add("majorType");
    spanMajorType.textContent = matObjArr[i].majorType;

    let spanMinorType = document.createElement("span");
    spanMinorType.classList.add("minorType");
    spanMinorType.textContent = matObjArr[i].minorType;

    let priceNBtnContainer = document.createElement("div");
    priceNBtnContainer.classList.add("priceNBtn");

    let spanMajorPrice = document.createElement("span");
    spanMajorPrice.classList.add("majorPrice");
    spanMajorPrice.textContent = matObjArr[i].total;

    let buttonOpener = document.createElement("button");
    buttonOpener.classList.add("opener");
    buttonOpener.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>';

    let pMinorMaterials = document.createElement("p");
    pMinorMaterials.classList.add('minorMaterials');
    pMinorMaterials.textContent = matObjArr[i].firstMat;

    let spanMinorMatPrice = document.createElement('span');
    spanMinorMatPrice.classList.add('minorMatPrice');
    spanMinorMatPrice.textContent = matObjArr[i].firstMatPrice;

    let pMinorMaterialsTwo = document.createElement("p");
    pMinorMaterialsTwo.classList.add('minorMaterials');
    pMinorMaterialsTwo.textContent = matObjArr[i].secondMat;

    let spanMinorMatPriceTwo = document.createElement('span');
    spanMinorMatPriceTwo.classList.add('minorMatPrice');
    spanMinorMatPriceTwo.textContent = matObjArr[i].secondMatPrice;

    let pMinorMaterialsThree = document.createElement("p");
    pMinorMaterialsThree.classList.add('minorMaterials');
    pMinorMaterialsThree.textContent = matObjArr[i].thirdMat;

    let spanMinorMatPriceThree = document.createElement('span');
    spanMinorMatPriceThree.classList.add('minorMatPrice');
    spanMinorMatPriceThree.textContent = matObjArr[i].thirdMatPrice;

    priceNBtnContainer.appendChild(spanMinorType);
    priceNBtnContainer.appendChild(buttonOpener);
    priceNBtnContainer.appendChild(spanMajorPrice);

    newElementContainer.appendChild(spanMajorType);
    newElementContainer.appendChild(priceNBtnContainer);
    newElementContainer.appendChild(pMinorMaterials);
    newElementContainer.appendChild(pMinorMaterialsTwo);
    newElementContainer.appendChild(pMinorMaterialsThree);

    pMinorMaterials.appendChild(spanMinorMatPrice);
    pMinorMaterialsTwo.appendChild(spanMinorMatPriceTwo);
    pMinorMaterialsThree.appendChild(spanMinorMatPriceThree);

    let gridContainer = document.querySelector(".gridContainer");

    // Добавляем новый элемент в родительский элемент
    gridContainer.appendChild(newElementContainer);

    buttonOpener.addEventListener('click', () =>
    newElementContainer.classList.add("activeContainer"));

    buttonOpener.addEventListener('click', () =>
    pMinorMaterials.classList.add('activeText'));

    buttonOpener.addEventListener('click', () =>
    pMinorMaterialsTwo.classList.add('activeText'));

    buttonOpener.addEventListener('click', () =>
    pMinorMaterialsThree.classList.add('activeText'));
}

