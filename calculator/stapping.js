export function stappingTotalPrice(id, length, width, step) {
// Обвязка
// обвязка вертикальная
let price = 0;
if (id === 'vertObvDob') {
let lenghtVertDsk = (length / step+1) * width * 3;
let lenghtGorizDsk = length * 2 * 3;
let obiemVert = (lenghtVertDsk * 0.2 * 0.05);
let obiemGoriz = (lenghtGorizDsk * 0.2 * 0.05);
let obiemPilomat = obiemVert + obiemGoriz;
obiemPilomat += (obiemPilomat * 0.15);
console.log(obiemPilomat);
let resultObvazkaFund = Math.round(obiemPilomat * 24725);
document.getElementById("vertTtl").innerText = resultObvazkaFund + ' руб.';
price = resultObvazkaFund;
}
// обвязка горизонтальная

else if (id === 'GorizObvDob'){
let lenghtVertGoriz = width * 2 * 3;
let lenghtGorizGoriz = (width / step + 1) * length * 3;
let obiemFrst = lenghtVertGoriz * 0.2 * 0.05;
let obiemScnd = lenghtGorizGoriz * 0.2 * 0.05;
let obiemSum = obiemFrst + obiemScnd;
let finalObiem = obiemSum + obiemSum * 0.15;
let resultObvazkaGoriz = Math.round(finalObiem * 24725);
document.getElementById("gorizTtl").innerText = resultObvazkaGoriz + ' руб.';
price = resultObvazkaGoriz;
}
return price;
}