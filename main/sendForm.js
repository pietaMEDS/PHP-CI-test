document.getElementById('formcalc').addEventListener('submit', (e) => {
    e.preventDefault();

    let length =Number( document.getElementById('myRange').value);
    let width =Number( document.getElementById('myRangetwo').value)
    console.log(length);
    let floors = document.getElementById('floors').value;
    

    (floors == "Количество этажей") ? alert("Вы не ввели количество этажей"):send();


    function send(){

    localStorage.setItem('length', length);
    localStorage.setItem('width', width);
    localStorage.setItem('floors', floors);
    window.location.href = './../calculator/calculator.php';
}
});

document.getElementById("login").addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = './../admin/admin.php';
});