export function wallHeightPrice(length, width, id) {
    let sipPanel = (length + width) * (2 / 1.25);
    let price = 0;

    if (id === 'smallWallBtn') {
        let smallWallPrice = document.getElementById('smallWallPrice');
        price = Math.round(sipPanel * 4140);
        smallWallPrice.innerHTML = price + ' руб.';

        return {
            name: 'Высота потолка',
            styleName: 'heightWall',
            secondName: 'Стена 2.5 метра',
            styleSecondName: 'big_Wall',
            id: 'wallSmall25',
            price,
        }
    }
    else if (id === 'bigWallBtn') {
        let bigWallPrice = document.getElementById('bigWallPrice');
        price = Math.round(sipPanel * 4485);
        bigWallPrice.innerHTML = price + ' руб.';

        return {
            name: 'Высота потолка',
            styleName: 'heightWall',
            secondName: 'Стена 2.8 метра',
            styleSecondName: 'small_Wall',
            id: 'wallBig28',
            price,
        }
    }
}