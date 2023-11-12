<?php
$pageStyles = './../styles/main.css';
require './../Header/Head.php';
?>

<body>
    <?php
    require './../Header/Header.php';
    // require 'test.php';
    ?>

    <main>
        <div>
            <div class='picture'>
                <div class="heading">О нашем проекте</div>
                <div class="line_cont">
                    <div class="linechild"></div>
                </div>
                <div class="text">Калькулятор представляет из себя интерфейс для расчёта<br />затрат стоимости дома, исходя из ваших пожеланий </div>
            </div>
            <div class="calc-block" id="calc-block">
                <h1 class="title">Калькулятор строительства</h1>
                <div class="maincalc">
                    <div class='home_container'>
                        <img src='../assets/homemini.png' alt='Homemini' class='home'></img>
                    </div>
                    <div class='choice'>
                        <form class='formcalc' id="formcalc">
                            <h3 class='maintarg'>Длина <input id="demo" type="number"></input>м </h3>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="1" class="slider" id="myRange">
                            </div>
                            <h3 class='maintarg'>Ширина <input type="number" id="demotwo"></input>м</h3>
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="1" class="slider" id="myRangetwo">
                            </div>
                            <select class='select' id="floors">
                                <option class='option' selected disabled>Количество этажей</option>
                                    <option class='option'>1</option>
                                    <option class='option' disabled >2</option>
                            </select>
                            <button type="submit" class='continue'>Далее</button>
                        </form>
                </div>
            </div>
            <?php require './../aboutUs/aboutUs.php' ?>
        </div>
    </main>

    <script src="sendForm.js"></script>
    <script src="slider.js"></script>
    <script src="./../aboutUs/aboutUs.js"></script>
    <script src="conditionZero.js"></script>
    <script src="test.js"></script>
</body>


</html>