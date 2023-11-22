export function svai(id, kolSvai, typeSvai, svaiDostavka, motnaj) {
    let price = 0;
    let dostavka = Number(svaiDostavka.totalPrice);
    let svaiType = Number(typeSvai.totalPrice);
    let typeMontaj = Number(motnaj.totalPrice);

    if (id === 'jelezPricePlus') {
        let jelezFirst = kolSvai * (svaiType + typeMontaj);
        let firstLi = document.getElementById('jelezFundCost');
        firstLi.innerText = jelezFirst;

        price = jelezFirst + 14025 + 8415 + dostavka;
        let ttlJelez = document.getElementById('jelezTotalCost');
        ttlJelez.innerText = price + " руб.";

        return {
            name: 'Фундамент дома',
            styleName: 'foundationS',
            secondName: 'Железобетонные сваи',
            styleSecondName: 'jelezoBeton',
            id: 'jelezSvai',
            f1: "Фундамент теплового контура " + jelezFirst,
            f2: "Фундамент крыльца " + 14025,
            f3: "Фундамент терассы " + 8415,
            f4: "Доставка фундамента " + dostavka,
            price,
        }
    }
    else if (id === 'vintPricePlus') {
        let ttlCost = document.getElementById('totalCost');
        let teplovoiContur = document.getElementById('fundCost');
        let foundationSvaiDostavka = document.getElementById('dostavkaSvai');
        let vintFundCost = kolSvai * (svaiType + typeMontaj);

        foundationSvaiDostavka.innerText = dostavka;

        teplovoiContur.innerText = vintFundCost;
        price = vintFundCost + 12938 + 7763 + dostavka;
        ttlCost.innerText = price + " руб.";

        return {
            name: 'Фундамент дома',
            styleName: 'foundationS',
            secondName: 'Винтовые сваи',
            styleSecondName: 'vintovayaSvai',
            id: 'vintSvai',
            f1: "Фундамент теплового контура " + vintFundCost,
            f2: "Фундамент крыльца " + 12938,
            f3: "Фундамент терассы " + 7763,
            f4: "Доставка фундамента " + dostavka,
            price,
        }
    }
    return price
}
