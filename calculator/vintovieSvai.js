export function svai(id, kolSvai, type) {
console.log(type);    
    let price = 0;
    if (id === 'jelezPricePlus') {
        let jelezSv = Number(type.totalPrice);
        let jelezMont = 2420;
        console.log(jelezSv);

        let jelezFirst = kolSvai * (jelezSv + jelezMont);
        let firstLi = document.getElementById('jelezFundCost');
        firstLi.innerText = jelezFirst;

        price = jelezFirst + 14025 + 8415 + 15000;
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
            f4: "Доставка фундамента " + 15000,
            price,
        }
    }
    else if (id === 'vintPricePlus') {
        let ttlCost = document.getElementById('totalCost');
        let teplovoiContur = document.getElementById('fundCost');

        let costSvai = Number(type.totalPrice);
        console.log(costSvai);
        let costMontajka = 2300;

        let vintFundCost = kolSvai * (costSvai + costMontajka);
        console.log('kolSvai: ', kolSvai);
        console.log('vintFundCost: ', vintFundCost);

        teplovoiContur.innerText = vintFundCost;
        price = vintFundCost + 12938 + 7763 + 10000;
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
            f4: "Доставка фундамента " + 10000,
            price,
        }
    }
    return price
}
