const form = document.querySelector(".form_modal_window"),
    statusTxt = form.querySelector(".requireAboutus"),
    pdfBtn = document.querySelector('.downloadPDF'),
    excelBtn = document.querySelector('.downloadExcel');

pdfBtn.classList.add('off');
excelBtn.classList.add('off');

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./validation.php", true);
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.response;
            if (response.indexOf("email") != -1 || response.indexOf("должны") != -1 || response.indexOf("телефона") != -1) {
                statusTxt.style.color = "red";
            } else {
                pdfBtn.classList.remove('off');
                excelBtn.classList.remove('off');
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
