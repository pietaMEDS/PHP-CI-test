export function wallHeightPrice(length, width, id, kamennayaSushka, sip) {
    const sipPanel = (length + width) * (2 / 1.25);
    const pilomaterialKamennoySushki = Number(kamennayaSushka.totalPrice);
    const typeSipPanel = Number(sip.totalPrice);
    let price = 0;

    if (id === 'smallWallBtn') {
        const smallWallPrice = document.getElementById('smallWallPrice');
        const sipPanelWall = document.getElementById('sipPanel');
        const pilomaterialWall = document.getElementById('pilomaterialWall');

        const lengthPilMat = sipPanel * (2.5 + 1.25) * 2;
        const obyem = lengthPilMat * 0.04 * (0.174 - 0.024);
        const itogoObyem = obyem + obyem * 0.1;
        const piloMaterialSten = Math.round(itogoObyem * pilomaterialKamennoySushki);
        price = Math.round(sipPanel * typeSipPanel) + piloMaterialSten;

        sipPanelWall.innerHTML = Math.round(sipPanel * typeSipPanel);
        pilomaterialWall.innerHTML = piloMaterialSten;
        smallWallPrice.innerHTML = price + ' руб.';

        return {
            majorType: 'Высота потолка',
            minorType: 'Высота потолка',
            styleName: 'heightWall',
            secondName: 'Стена 2.5 метра',
            styleSecondName: 'big_Wall',
            id: 'wallSmall25',
            firstMat: "СИП панели стен",
            firstMatPrice: Math.round(sipPanel * typeSipPanel),
            secondMat: "Пиломатериалы на стены",
            secondMatPrice: piloMaterialSten,
            price,
        }
    } else if (id === 'bigWallBtn') {
        const sipPanelWall = document.getElementById('sipPanel1');
        const pilomaterialWall = document.getElementById('pilomaterialWall1');
        const lengthPilMat = sipPanel * (2.8 + 1.25) * 2;
        const obyem = lengthPilMat * 0.04 * (0.174 - 0.024);
        const itogoObyem = obyem + obyem * 0.1;
        const piloMaterialSten = Math.round(itogoObyem * pilomaterialKamennoySushki);

        let bigWallPrice = document.getElementById('bigWallPrice');
        price = Math.round(sipPanel * typeSipPanel) + piloMaterialSten;
        bigWallPrice.innerHTML = price + ' руб.';
        sipPanelWall.innerHTML = Math.round(sipPanel * typeSipPanel);
        pilomaterialWall.innerHTML = piloMaterialSten;

        return {
            majorType: 'Высота потолка',
            minorType: 'Высота потолка',
            styleName: 'heightWall',
            secondName: 'Стена 2.8 метра',
            styleSecondName: 'small_Wall',
            id: 'wallBig28',
            firstMat: "СИП панели стен",
            firstMatPrice: Math.round(sipPanel * typeSipPanel),
            secondMat: "Пиломатериалы на стены",
            secondMatPrice: piloMaterialSten,
            price,
        }
    }
}