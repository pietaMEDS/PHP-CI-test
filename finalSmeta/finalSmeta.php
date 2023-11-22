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

    <h1 id="firstH">Предварительная смета</h1>
    
    <div class="gridContainer">
        <h2 class="gridZag">Выбранные эллементы</h2>
        <h2 class="gridZag">Обязательные эллементы</h2>
        <div class="elementContainer">
            <span class="majorType">Фундамент</span><br>
            <span class="minorType">Винтовая свая</span>
            <div class="priceNBtn">
                <span class="majorPrice">170 000 руб.</span>
                <button class="opener"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></button>
            </div>
        </div>
    </div>
    <script src="finalSmeta.js"></script>
</body>

