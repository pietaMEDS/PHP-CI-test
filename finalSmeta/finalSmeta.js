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


let nullevPerekrit = {
    majorType: 'Нулевое перекрытие',
    minorType: 'Нулевое перекрытие',
    total: Math.round(resultNulev) + ' руб.'
}




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
    spanMajorType.textContent = nullevPerekrit.majorType;

    let spanMinorType = document.createElement("span");
    spanMinorType.classList.add("minorType");
    spanMinorType.textContent = nullevPerekrit.minorType;

    let priceNBtnContainer = document.createElement("div");
    priceNBtnContainer.classList.add("priceNBtn");

    let spanMajorPrice = document.createElement("span");
    spanMajorPrice.classList.add("majorPrice");
    spanMajorPrice.textContent = nullevPerekrit.total;

    let buttonOpener = document.createElement("button");
    buttonOpener.classList.add("opener");
    buttonOpener.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>';

    priceNBtnContainer.appendChild(spanMajorPrice);
    priceNBtnContainer.appendChild(buttonOpener);

    newElementContainer.appendChild(spanMajorType);
    newElementContainer.appendChild(spanMinorType);
    newElementContainer.appendChild(priceNBtnContainer);

    let gridContainer = document.querySelector(".gridContainer");

    // Добавляем новый элемент в родительский элемент
    gridContainer.appendChild(newElementContainer);
}

