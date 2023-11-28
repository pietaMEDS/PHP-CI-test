<?php
$pageStyles = './../calculator/calculator.css';
require './../Header/Head.php';
require './../Header/Header.php';
?>
<head>
    <title>FinalSmeta</title>
    <link rel="stylesheet" href="smeta.css">
</head>
<body>
<i class="line"></i>
<h1 id="firstH">Предварительная смета</h1>

<div class="gridContainer">
    <h2 class="gridZag">Выбранные эллементы</h2>
    <h2 class="gridZag">Обязательные эллементы</h2>
</div>


<div class="itogPrice">
    <h2>Итоговая цена</h2>
    <h1 id="itogPrice"></h1>
</div>

<button class="modalBtn">Скачать итоговую смету</button>

<!-- МОДАЛЬНОЕ ОКНО-->
<div class="modal-wrapper">
    <div class="head"></div>
    <div class="modal">
        <div class="content">
            <div class="good-job">
                <p style="margin-bottom: 20px;">Прежде чем скачать смету, оставьте свои данные</p>
                <form class="form_modal_window" action="" method="POST">
                    <input type="text" name="name" placeholder="Ваше имя" required>
                    <input type="email" name="email" placeholder="Ваш email" required>
                    <input type="tel" name="phone" placeholder="Ваш телефон" required>
                    <button class="downloadPDF">Скачать PDF</button>
                    <button class="downloadExcel">Скачать Excel</button>
                    <span class="requireAboutus"></span>
                </form>
                <div id="erconts"></div>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="validationAjax.js"></script>
<script src="modalPDF.js"></script>
<script src="finalSmeta.js"></script>
</body>

