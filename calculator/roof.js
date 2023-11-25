export function roof(length, width, pilomaterialItog, krovlyaCherepica) {

    let krovlya = Number(krovlyaCherepica.totalPrice);
    let pilomaterial = Number(pilomaterialItog.totalPrice);

    let volumFlor = (length + width) * 2 * 0.15 * 0.05;

    // Объём пиламатериала на промежуточный мауэрлат и опоры под стропилами
    let volumPil = (length * 2) * (0.15 * (0.05 * 2));

    // высота кровли в коньке
    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    }
    let heightKrov = (width / 2) * Math.tan(Math.radians(30));

    //   Стойки опорные под промежуточный мауэрлат
    let stoyka = ((length / 0.6 + 1) * 2 * (heightKrov / 2) * (0.15 * 0.05));

    // Длина ската 
    let lengthKrov = width / 2 / Math.cos(Math.radians(30)) + 0.5;
    lengthKrov = lengthKrov;

    // конёк соединительные доски
    let kon = (length * 3) * 0.15 * 0.05;

    // лобовые доски
    let lob = (length * 2 + lengthKrov * 2) * (0.15 * 0.05);

    // укосины
    let ykos = length * 2 * 0.15 * 0.05;

    // Объём
    let volum = (length / 0.6 + 1) * 2 * lengthKrov * 0.15 * 0.05 + kon + lob + ykos;

    // на запас
    let zapaz = 0.3;

    // Объём пиломатериала на стропильную систему
    let volumStrop = volum + volum * zapaz;

    // Объём досок на обрешетку
    let volumObreshotka = (lengthKrov / 0.35 + 2) * 2 * width * 0.15 * 0.025;

    // Объём пиломатериала на контробрешетку
    let volueKontrobreshotka = (length / 0.6 + 1) * 2 * lengthKrov * 0.05 * 0.05;

    // Стойки на фронтоны
    let stoykaFron = (width * 2 + lengthKrov * 2) * 1.5 * 0.15 * 0.05;

    // на запас2
    let zapaz2 = 0.1;

    // запас
    let itogZapas = (volumFlor + volumPil + stoyka + volumStrop + volumObreshotka + volueKontrobreshotka + stoykaFron) * zapaz2;

    // Объём пиломатериала под кровлю
    let volueKrov = (volumFlor + volumPil + stoyka + volumStrop + volumObreshotka + volueKontrobreshotka + stoykaFron + itogZapas);

    // Пиломатериал под кровлю
    let Pilomat = Math.round(volueKrov * pilomaterial);
    document.getElementById("pil").innerHTML = Pilomat;
    // Количество металлочерепицы 
    let cherepica = (length + 0.5) * lengthKrov * 2;

    // Стоимость кровли из металлочерепицы
    let metalCherepica = Math.round(cherepica * krovlya);
    document.getElementById("metalCherepica").innerHTML = metalCherepica;

    // Стоимость кровли
    let price = Math.round(Pilomat + metalCherepica);
    document.querySelector(".summ").innerHTML = price + ' руб.';
    return {
        majorType: 'Кровля',
        minorType: 'Кровля',
        secondName: 'Металлочерепица',
        styleName: 'roofKrovlya',
        id: 'krovlya',
        firstMat: 'Пиломатериал под кровлю',
        firstMatPrice: Pilomat,
        secondMat: 'Кровля из металочерипицы',
        secondMatPrice: metalCherepica,
        price,
    };
}