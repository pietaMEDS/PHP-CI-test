const btnModal = document.querySelector('.modalBtn');
const btnPDF = document.getElementById('downloadPDF');
const btnExcel = document.getElementById('downloadExcel');
const modalAutorize = document.querySelector('.modal-wrapper');
const page = document.querySelector('.page-wrapper');

document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.head')) {
        modalAutorize.classList.remove('open');
    }
});
btnModal.addEventListener('click', (e) => {
    modalAutorize.classList.add('open');
});



//
// btnPDF.addEventListener('click', (e) => {
//     e.preventDefault();
//     downloadSmeta(e);
// });
//
// btnExcel.addEventListener('click', (e) => {
//     e.preventDefault();
//     downloadSmeta(e);
// });
//
//
// function downloadSmeta(e) {
//     // ...
//     // console.log(e.target.id)
// }
