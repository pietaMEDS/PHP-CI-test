export function zero(length, width){
let aaa = 4000;

    // СТОЙМОСТЬ ДЛЯ КЛИЕНТА
    let summ = aaa + aaa *0.15;
    let ppp = 21500 + 21500 * 0.15;
    let pan = 2.5 * 1.25;
  
    // СИП ПАНЕЛИ
    let sip = length * width / pan;
  
    //  на обрезки
    let obrez = 0.1;
     
    // Итог
    let itoge = sip + sip * obrez;

    
    // СИП панели на нулевое перекрытие
    let sipnull = itoge*summ;
    

    // ДЛИНА ПИЛМАТА
    let lenthPil = itoge * 2*(2.5 + 1.25 /2 ) * 2.5;
  
    // Объём
    let value = lenthPil * 0.04 * (0.224 - 0.024);
    
    
    // На обрезки 
    let obrez1 = 0.15;
    

    // Итоговый объём
    let valueItog = value + value * obrez1;
    
    // Пиломатериал на нулевое перекрытие
    let pilnull = valueItog * ppp;
    

    // Итоговый итог
    let itogItog = sipnull + pilnull
    console.log(Math.round(itogItog));
}
