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
let lengthGorDosk = (3 / 2 + 1) * 2 * 3;
//let lengthVerDosk = 3 * 2 * 3;
//let lengthGorDosk = (3 / 2 + 1)* 2 * 3;
let valueObv = 0.33;
let itogObv = valueObv * 24725; //d42
let valuePil = (((2 + 3) * 2 / 0.6 * 2 + 2.8 * 3 * 4 + 2 / 0.6 * 3 * 4)) * 0.15 * 0.05;
//let pilmatCost = valuePil * 24725; //D42
let krepejKril = 2 * 3 * 500;
let krovlKril = 2 * 3 * 2070 //D46
let rabotaKril = 3 * 2 * 3600 //D48
let fullKril = itogObv + valuePil + krepejKril + krovlKril + rabotaKril;


let j = 2;
let matObjArr = [
    nullevPerekrit = {
        majorType: 'Нулевое перекрытие',
        minorType: 'Нулевое перекрытие',
        price: Math.round(resultNulev) + ' руб.',
        firstMat: 'СИП панели на нулевое перекрытие',
        firstMatPrice: Math.round(sipNaNulev) + ' руб.',
        secondMat: 'Пиломатериал на нулевое перекрытие',
        secondMatPrice: Math.round(pilomatNaNulev) + ' руб.',
        thirdMat: 'СИП панели',
        thirdMatPrice: Math.round(itogSip) + ' шт.'
    },

    roofObj = {
        majorType: 'Потолок первого этажа',
        minorType: 'Потолок первого этажа',
        price: Math.round(fullRoof) + ' руб.',
        firstMat: 'СИП панели на потолок 1-го этажа',
        firstMatPrice: Math.round(sipPanRoof) + ' руб.',
        secondMat: 'Пиломатериал на потолок 1-го этажа',
        secondMatPrice: Math.round(pilomatRoofItog) + ' руб.',
        thirdMat: 'СИП панели',
        thirdMatPrice: Math.round(itogSipRoof) + ' шт.'
    },


    krilcoObj = {
        majorType: 'Обвязка крыльца',
        minorType: 'Обвязка крыльца',
        total: Math.round(fullKril) + ' руб.',
        firstMat: 'Работа крыльцо',
        firstMatPrice: Math.round(rabotaKril) + ' руб.',
        secondMat: 'Кровля крыльца',
        secondMatPrice: Math.round(krovlKril) + ' руб.',
        thirdMat: 'Стоимость обвязки и Крепеж крыльца',
        thirdMatPrice: Math.round(itogObv) + Math.round(krepejKril) + ' руб.'
    }
];

let svai = JSON.parse(localStorage.getItem('svaiPrice'));
if (svai !== null) {
    matObjArr[j] = typeSvai = {
        majorType: svai.majorType,
        minorType: svai.minorType,
        price: svai.price,
        firstMat: svai.firstMat,
        firstMatPrice: svai.firstMatPrice,
        secondMat: svai.secondMat,
        secondMatPrice: svai.secondMatPrice,
        thirdMat: svai.thirdMat,
        thirdMatPrice: svai.thirdMatPrice,
    }
    j++;
}

let wall = JSON.parse(localStorage.getItem('wallPrice'));
if (wall !== null) {
    matObjArr[j] = typeWall = {
        majorType: wall.majorType,
        minorType: wall.minorType,
        price: wall.price,
        firstMat: wall.firstMat,
        firstMatPrice: wall.firstMatPrice,
        secondMat: wall.secondMat,
        secondMatPrice: wall.secondMatPrice,
    }
    j++;
}

for (let i = 0; i < 13; i++) {
    if (i > 7) {
        let grid = document.querySelector(".gridContainer");
        let pusto = document.createElement("div");
        grid.appendChild(pusto);
    }
    if (matObjArr[i].majorType !== undefined || matObjArr[i].majorType !== '') {
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
        spanMajorPrice.textContent = matObjArr[i].price;

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
}

