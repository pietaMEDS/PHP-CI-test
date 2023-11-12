let butt = document.getElementById("calc");
let calculator = document.getElementById("calc-block");


butt.addEventListener("click",(e)=>{
    (localStorage.width !== undefined )?(window.open("../calculator/calculator.php","_self")):(calculator.scrollIntoView({behavior: 'smooth'},true),alert("Сначало заполните 'Калькулятор строительства'"));
})
