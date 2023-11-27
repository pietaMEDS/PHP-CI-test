const form = document.querySelector(".form_modal_window"),
    statusTxt = form.querySelector(".requireAboutus"),
    pdfBtn = document.querySelector('.downloadPDF'),
    excelBtn = document.querySelector('.downloadExcel')

let flag = false;
let count = 0;
form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./validation.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (response.indexOf("email") != -1 || response.indexOf("должны") != -1 || response.indexOf("телефона") != -1) {
                statusTxt.style.color = "red";
                flag = false;
            } else {
                flag = true;
                count = 2;
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled");
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}


pdfBtn.addEventListener('click', (e) => {
    setTimeout(() => {
        if (flag || count > 0) {
            console.log("Тут будет вызвана функция такая же как ниже ток с пдфкой");
            flag = false;
            count--;
        } else {
            console.log("А тут не будет");
        }
    }, 100)
})

excelBtn.addEventListener('click', (e) => {
    setTimeout(() => {
        if (flag || count > 0) {
            console.log("Тут будет вызвана функция со скачкой экселя))");
            flag = false;
            count--;
        } else {
            console.log("А тут не будет");
        }
    }, 100)
})