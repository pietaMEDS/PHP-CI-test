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

<input type="button" name="createpdf" id="createpdf" value="CREATE PDF">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="finalSmeta.js"></script>
</body>

