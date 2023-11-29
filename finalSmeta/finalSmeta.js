let response;
$.ajax({
    url: './../calculator/ajax.php',
    method: 'GET',
    success: function (data) {
        response = JSON.parse(data);
    }
});


setTimeout(() => {
    let sip2500 = Number(response.variable9.totalPrice);
    let sushka = Number(response.variable11.totalPrice);
    let sip174 = Number(response.variable7.totalPrice);
    let metalocherepica = Number(response.variable13.totalPrice);
    let montaj = Number(response.variable14.totalPrice);
    let crep = Number(response.variable12.totalPrice);
    let vents =Number(response.variable15.totalPrice);
    calculations(sip2500, sip174, sushka, metalocherepica,montaj,crep,vents)
}, 100);



function calculations(sip2500, sip174, sushka, metalocherepica,montaj,crep,vents) {
//Нулевое перекрытие
    let length = Number(localStorage.getItem('length'));
    let width = Number(localStorage.getItem('width'));


    let sipPan = length * width / (2.5 * 1.25);
    let obrezki = 0.1;
    let itogSip = sipPan + sipPan * obrezki;
    let sipNaNulev = itogSip * sip2500;

    let pilmatLng = itogSip * 2 * (2.5 + 1.25 / 2) * 2.8;
    let V = pilmatLng * 0.04 * (0.224 - 0.024);
    let obrezkiTwo = 0.15;
    let itogV = V + V * obrezkiTwo;
    let pilomatNaNulev = itogV * sushka;
    let resultNulev = sipNaNulev + pilomatNaNulev;


//Потолок первого этажа
    let obrezkiRoof = 0.1;
    let itogSipRoof = sipPan + sipPan * obrezkiRoof;
    let sipPanRoof = itogSipRoof * sip174;
    let pilmatRoofLng = itogSipRoof * (2.5 + 1.25 / 2) * 2;
    let VRoof = pilmatRoofLng * 0.04 * (0.174 - 0.024);
    let obrezkiRoofTwo = 0.15;
    let itogVRoof = VRoof + VRoof * obrezkiRoofTwo;
    let pilomatRoofItog = itogVRoof * sushka
    let fullRoof = sipPanRoof + pilomatRoofItog;


//Обвязка крыльца
    let valueObv = 0.33;
    let itogObv = valueObv * sushka;
    let valuePil = (((2 + 3) * 2 / 0.6 * 2 + 2.8 * 3 * 4 + 2 / 0.6 * 3 * 4)) * 0.15 * 0.05;
// let pilmatCost = valuePil * 24725; //D42
    let krepejKril = 2 * 3 * 500;
    let krovlKril = 2 * 3 * metalocherepica
    let rabotaKril = 3 * 2 * montaj
    let fullKril = itogObv + valuePil + krepejKril + krovlKril + rabotaKril;

// Обвязка терассы
    let lengthVertDosk = 4 * 2 * 3;
    let lengthGorDosk = (4 / 2 + 1) * 1 * 3;
    let itoge = valueObv * sushka;
    let valuePilContur = ((1 + 4) * 2 * 3 + 1 / 0.6 * 4 + 2 * 2.8 * 3 + 1 / 0.6 * 4 * 3) * 0.15 * 0.05; //ТУТ ОШИБКА
    let karkasTer = valuePilContur * sushka;
    let krepTerassa = 1 * 4 * 500;
    let krovTerass = 1 * 4 * metalocherepica;
    let rabTerassa = 1 * 4 * montaj;
    let fullItog = rabTerassa + krovTerass + krepTerassa + karkasTer + itoge;

//Работы
    let krepej = length * width * crep ;
    let montajRab = width * length * montaj;
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
    let ventSebes = kolvoVent * vents;
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
        },
    ]


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

    function totalPrice() {
        let sum = 0;
        for (let i = 0; i < matObjArr.length; i++) {
            sum += Number(matObjArr[i].price.substring(0, matObjArr.length - 5));
        }
        document.getElementById('itogPrice').innerHTML = sum + ' руб.';
    }

    totalPrice();

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

            buttonOpener.addEventListener('click', () =>{
                if (!newElementContainer.classList.contains("activeContainer")) {
                    newElementContainer.classList.add("activeContainer");
                    pMinorMaterials.classList.add('activeText');
                    pMinorMaterialsTwo.classList.add('activeText');
                    pMinorMaterialsThree.classList.add('activeText');
                } else {
                    newElementContainer.classList.remove("activeContainer");
                    pMinorMaterials.classList.remove('activeText');
                    pMinorMaterialsTwo.classList.remove('activeText');
                    pMinorMaterialsThree.classList.remove('activeText');
                }
            });

        }
    }
}