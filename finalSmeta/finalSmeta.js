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
let valueObv = 0.33;
let itogObv = valueObv * 24725; //d42
let valuePil = (((2 + 3) * 2 / 0.6 * 2 + 2.8 * 3 * 4 + 2 / 0.6 * 3 * 4)) * 0.15 * 0.05;
// let pilmatCost = valuePil * 24725; //D42
let krepejKril = 2 * 3 * 500;
let krovlKril = 2 * 3 * 2070 //D46
let rabotaKril = 3 * 2 * 3600 //D48
let fullKril = itogObv + valuePil + krepejKril + krovlKril + rabotaKril;

// Обвязка терассы
let lengthVertDosk = 4 * 2 * 3;
let lengthGorDosk = (4 / 2 + 1) * 1 * 3;
let itoge = valueObv * 24725; //d42
let valuePilContur = ((1+4) * 2 * 3 + 1/0.6 * 4 + 2 * 2.8 * 3 + 1/0.6 * 4 * 3) * 0.15 * 0.05; //ТУТ ОШИБКА
let karkasTer = valuePilContur * 24725;
let krepTerassa = 1 * 4 * 500;
let krovTerass = 1 * 4 * 2070;
let rabTerassa = 1 * 4 * 3600;
let fullItog = rabTerassa + krovTerass + krepTerassa + karkasTer + itoge;
console.log(fullItog);




//Работы
let krepej = length * width * 1320 // D44
let montajRab = width * length * 3600 //D48
let projivanie = 40000 + 40000;
let fullRab = krepej + montajRab + projivanie;


// двери / окна / вентиляционные выходы
let kolvodver = 1;
let dverSebes = kolvodver * 50000;
let ustanovkaDver = kolvodver * 4000;
let dver = dverSebes + ustanovkaDver; // 1-колво двер

let kolvoOkn = 3;
let oknSebes = kolvoOkn * 20000;
let ustanovkaOkn = kolvoOkn * 1000
let okna = oknSebes + ustanovkaOkn;

let kolvoVent = 3;
let ventSebes = kolvoVent * 12000;  // 12000 - D55
let ustanovkaVent = kolvoVent * 2000;
let vent = ventSebes + ustanovkaVent;

// Объём ОСП на фронтоны
let radians = (Math.PI / 180) * 30;
let valueOSP = (Math.tan(radians) * 10 / 2) * (10 / 2) * 2;


let j = 0;
let matObjArr = [
    '',


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

    '',

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

    '',

    krilcoObj = {
        majorType: 'Обвязка крыльца',
        minorType: 'Обвязка крыльца',
        price: Math.round(fullKril) + ' руб.',
        firstMat: 'Работа крыльцо',
        firstMatPrice: Math.round(rabotaKril) + ' руб.',
        secondMat: 'Кровля крыльца',
        secondMatPrice: Math.round(krovlKril) + ' руб.',
        thirdMat: 'Стоимость обвязки и Крепеж крыльца',
        thirdMatPrice: Math.round(itogObv) + Math.round(krepejKril) + ' руб.'
    },

    '',

    rabotaObj = {
        majorType: 'Работы',
        minorType: 'Работы',
        price: Math.round(fullRab) + ' руб.',
        firstMat: 'Крепеж',
        firstMatPrice: Math.round(krepej) + ' руб.',
        secondMat: 'Монтажные работы',
        secondMatPrice: Math.round(montajRab) + ' руб.',
        thirdMat: 'Проживание и доставка',
        thirdMatPrice: Math.round(projivanie) + ' руб.'
    },

    dverObj = {
        majorType: 'Стоимость входных дверей с терморазрывом',
        minorType: 'Двери',
        price: Math.round(dver) + ' руб.',
        firstMat: 'Стоимость дверей',
        firstMatPrice: Math.round(dverSebes) + ' руб.',
        secondMat: 'Установка',
        secondMatPrice: Math.round(ustanovkaDver) + ' руб.',
        thirdMat: 'Кол-во',
        thirdMatPrice: Math.round(kolvodver) + ' шт.'
    },

    oknaObj = {
        majorType: 'Стоимость оконных конструкций с монтажем',
        minorType: 'Окна',
        price: Math.round(okna) + ' руб.',
        firstMat: 'Стоимость окон',
        firstMatPrice: Math.round(oknSebes) + ' руб.',
        secondMat: 'Установка',
        secondMatPrice: Math.round(ustanovkaOkn) + ' руб.',
        thirdMat: 'Кол-во',
        thirdMatPrice: Math.round(kolvoOkn) + ' шт.'
    },

    ventObj = {
        majorType: 'Стоимость вентиляционных выходов',
        minorType: 'Вентиляция',
        price: Math.round(vent) + ' руб.',
        firstMat: 'Стоимость вентиляционных выходов',
        firstMatPrice: Math.round(ventSebes) + ' руб.',
        secondMat: 'Монтаж',
        secondMatPrice: Math.round(ustanovkaVent) + ' руб.',
        thirdMat: 'Кол-во',
        thirdMatPrice: Math.round(kolvoVent) + ' шт.'
    },]

const { jsPDF } = window.jspdf;
// Получение кнопки "createpdf" по идентификатору
const createPdfButton = document.getElementById('createpdf');

// Добавление обработчика события click на кнопку "createpdf"
createPdfButton.addEventListener('click', function() {
    // Создание нового документа PDF
    const doc = new jsPDF(  'UTF-8');

    // Функция для добавления содержимого в PDF
    function addContent() {
        // Заголовок
        doc.setFontSize(18);
        doc.text('Смета', 10, 10);

        // Добавление материалов и цен
        let y = 20; // Начальная позиция по вертикали
        for (let i = 0; i < matObjArr.length; i++) {
            const obj = matObjArr[i];
            if (obj.majorType !== undefined && obj.majorType !== '') {
                doc.setFontSize(14);
                doc.text(obj.majorType, 10, y + 10);
                doc.setFontSize(12);
                doc.text(obj.minorType, 10, y + 20);
                doc.text(`Цена: ${obj.price}`, 10, y + 30);
                doc.text(obj.firstMat, 10, y + 40);
                doc.text(`Цена: ${obj.firstMatPrice}`, 10, y + 50);
                doc.text(obj.secondMat, 10, y + 60);
                doc.text(`Цена: ${obj.secondMatPrice}`, 10, y + 70);

                y += 100; // Увеличение позиции по вертикали для следующей записи
            }
        }
    }

    // Вызов функции для добавления содержимого в PDF
    addContent();

    // Получение строкового представления PDF
    const pdfContent = doc.output();

    // Создание Blob из строкового представления PDF
    const blob = new Blob([pdfContent], { type: 'application/pdf' });

    // Сохранение файла
    const filename = 'smeta.pdf';
    if (navigator.msSaveBlob) {
        // Для IE/Edge
        navigator.msSaveBlob(blob, filename);
    } else {
        // Для других браузеров
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Создаем временную ссылку и задаем атрибуты
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.download = filename;

            // Симулируем щелчок по ссылке для скачивания файла
            document.body.appendChild(link);
            link.click();

            // Удаляем временную ссылку
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }
});


let svai = JSON.parse(localStorage.getItem('svaiPrice'));
if (svai !== null) {
    matObjArr[j] = typeSvai = {
        majorType: svai.majorType,
        minorType: svai.minorType,
        price: svai.price + ' руб.',
        firstMat: svai.firstMat,
        firstMatPrice: svai.firstMatPrice + ' руб.',
        secondMat: svai.secondMat,
        secondMatPrice: svai.secondMatPrice + ' руб.',
        thirdMat: svai.thirdMat,
        thirdMatPrice: svai.thirdMatPrice + ' руб.',
    }
    j++;
}

let wall = JSON.parse(localStorage.getItem('wallPrice'));
if (wall !== null) {
    matObjArr[j + 1] = typeWall = {
        majorType: wall.majorType,
        minorType: wall.minorType,
        price: wall.price + ' руб.',
        firstMat: wall.firstMat,
        firstMatPrice: wall.firstMatPrice + ' руб.',
        secondMat: wall.secondMat,
        secondMatPrice: wall.secondMatPrice + ' руб.',
    }
    j++;
}

let strapping = JSON.parse(localStorage.getItem('stappingPrice'));
if (strapping !== null) {
    matObjArr[j + 2] = typeWall = {
        majorType: strapping.majorType,
        minorType: strapping.minorType,
        price: strapping.price + ' руб.',
        firstMat: strapping.firstMat,
        firstMatPrice: strapping.firstMatPrice + ' руб.',
        secondMat: strapping.secondMat,
        secondMatPrice: strapping.secondMatPrice + ' руб.',
    }
    j++;
}

let roofPrice = JSON.parse(localStorage.getItem('roofPrice'));
if (roofPrice !== null) {
    matObjArr[j + 3] = typeWall = {
        majorType: roofPrice.majorType,
        minorType: roofPrice.minorType,
        price: roofPrice.price + ' руб.',
        firstMat: roofPrice.firstMat,
        firstMatPrice: roofPrice.firstMatPrice + ' руб.',
        secondMat: roofPrice.secondMat,
        secondMatPrice: roofPrice.secondMatPrice + ' руб.',
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
