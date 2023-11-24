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
            majorType: 'Железобетонные сваи',
            minorType: 'Фундамент дома',
            styleName: 'foundationS',
            secondName: 'Железобетонные сваи',
            styleSecondName: 'jelezoBeton',
            id: 'jelezSvai',
            firstMat: "Фундамент теплового контура",
            firstMatPrice: jelezFirst,
            secondMat: "Фундамент крыльца",
            secondMatPrice: 14025,
            thirdMat: "Фундамент терассы",
            thirdMatPrice: 8415,
            f4: "Доставка фундамента " + dostavka,
            price,
        }
    } else if (id === 'vintPricePlus') {
        let ttlCost = document.getElementById('totalCost');
        let teplovoiContur = document.getElementById('fundCost');
        let foundationSvaiDostavka = document.getElementById('dostavkaSvai');
        let vintFundCost = kolSvai * (svaiType + typeMontaj);

        foundationSvaiDostavka.innerText = dostavka;

        teplovoiContur.innerText = vintFundCost;
        price = vintFundCost + 12938 + 7763 + dostavka;
        ttlCost.innerText = price + " руб.";

        return {
            majorType: 'Винтовые сваи',
            minorType: 'Фундамент дома',
            styleName: 'foundationS',
            secondName: 'Винтовые сваи',
            styleSecondName: 'vintovayaSvai',
            id: 'vintSvai',
            firstMat: "Фундамент теплового контура",
            firstMatPrice: vintFundCost,
            secondMat: "Фундамент крыльца",
            secondMatPrice: 14025,
            thirdMat: "Фундамент терассы",
            thirdMatPrice: 8415,
            f4: "Доставка фундамента " + dostavka,
            price,
        }
    }
    return price
}
