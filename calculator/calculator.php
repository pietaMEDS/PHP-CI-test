<?php
$pageStyles = './../calculator/calculator.css';
require './../Header/Head.php';
?>

<body>
  <?php require './../Header/Header.php'; ?>
  <main>
    <div class="container_home">
      <div class="home">
        <!-- {/* ЧАСТИ ДОМА */} -->
        <div class="roof">
          <img src="./pictures/roof.png" alt="roof" />
        </div>
        <div class="floor1">
          <img src="./pictures/floor1.png" alt="floor1" />
        </div>
        <div class="foundation">
          <img src="./pictures/foundation.png" alt="foundation" />
        </div>
        <!-- {/* ЛИНИИ ВЫБОРА */} -->
        <div class="container_choice" id="attic">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="Empty"></div>
        </div>
        <div class="container_choice" id="window">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="Empty"></div>
        </div>
        <div class="container_choice" id="wall">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="Empty"></div>
        </div>
        <div class="container_choice" id="support">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="Empty"></div>
        </div>
        <div class="container_choice" id="foundation">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="Empty"></div>
        </div>
        <div class="container_choice" id="chimney">
          <div class="Empty"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <div class="container_choice" id="floor">
          <div class="Empty"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <div class="container_choice" id="outerwall">
          <div class="Empty"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="itog-flex">
      <div class="container">
        <p class="totalPrice">Стоимость составляющих</p>
        <p class="total-price">
          <span id="totalNumber"></span>
          <span class="currency">руб</span>
        </p>

        <button class="button">Итоговая цена</button>
      </div>
    </div>

    <!-- Модалка стен -->
    <div class="modalWall">
      <div class="modal_main">

        <h1>Высота потолка(стен)</h1>
        <button class='modal_btn' id="smallWall">2.5 метра</button>
        <button class='modal_btn' id="bigWall">2.8 метра</button>

        <div class="win2">
          <div class="smallWall">
            <h1 class="modalZag">Высота стены 2.5</h1>
            <p class='modalDescr'>Экономичность: Помещение с потолком высотой 2.5 метра может быть более экономичным в плане использования материалов для отделки и отопления/охлаждения, так как объем помещения меньше.
              <br> Уют и безопасность: Ниже потолок создает более уютную атмосферу и помогает уменьшить ветровые потоки, особенно в больших помещениях, обеспечивая ощущение комфорта и безопасности.<br />
              вата - материал сделанный из натурального...
            </p>
            <div class="material">
              <h2>Материалы:</h2>
              <ul>
                <li>СИП панели стен: <span id="#">0</span> руб.</li>
              </ul>
            </div>

            <div class="price">
              <h3 id="smallWallPrice"></h3>
              <button class="modal_btn" id="smallWallBtn">Добавить</button>
            </div>
          </div>
        </div>

        <div class="win2">
          <div class="bigWall">
            <h1 class="modalZag">Высота стены 2.8</h1>
            <p class='modalDescr'>Простор и свобода: Высокие потолки дают ощущение простора и свободы в помещении, делая его более величественным и впечатляющим.
              <br> Комфорт в использовании: Помещение с потолком высотой 2.8 метров может быть более комфортным для проведения деятельности, требующей вертикального пространства, например, для подвешивания светильников или наличия высокой мебели.
            </p>
            <div class="price">
              <h3 id="bigWallPrice"></h3>
              <button class="modal_btn" id="bigWallBtn">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- МОДАЛКА КРЫШИ -->
    <div class='modalFloor'>
      <div class="modal_main">
        <h1>Крыша</h1>
        <button class='modal_btn' id="flor">Кровля</button>
        <div class="win2">
          <div class='flor'>
            <h1 class="krov">Кровля</h1>
            <p class = 'modalDescr'>Кровля — верхний элемент покрытия здания, подвергающийся атмосферным воздействиям. Главной её функцией является защита внутренних помещений от атмосферных осадков и воздействий. </p>
            <div class="material">
              <div class="contNames">
                <h2>Материалы:</h2>
                <ul>

                  <li>Пиломатериал под кровлю</li>
                  <li>Стоимость кровли из металлочерепицы</li>

                </ul>
              </div>

              <div class="contConsts">
                <li id="pil"></li>
                <li id="metalCherepica"></li>
              </div>
            </div>
            <div class="prices">
              <h3 class="summ"></h3>
              <button class="modal_btn" id="roofPrice">Добавить</button>

              

            </div>
        </div>
      </div>
    </div>
  </div>
        
       
    <!-- Модалка фундамента -->
    <div class='modalFoundation'>
      <div class="modal_main">
        <h1>Фундамент</h1>
        <button class='modal_btn' id="mineral">Винтовые сваи</button>
        <button class='modal_btn' id="penopolist">Железобетонные сваи</button>

        <!-- Вторая модалка mineral -->
        <div class="win2">
          <div class='mineral'>
            <h1 class="modalZag">Винтовые сваи</h1>
            <p class='modalDescr'>Минеральная (базальовая или кварцевая) <br />
              вата - материал сделанный из натурального...</p>
            <div class="plusi">
              <img src="img/list.png" />
              <h3>компоненты</h3>
            </div>
            <div class="plusi">
              <img src="img/fire.png" />
              <h3>Негорючесть</h3>
            </div>

            <div class="material">
              <div class="contName">
                <h2>Материалы:</h2>
                <ul>
                  <li>Фундамент теплового контура</li>
                  <li>Фундамент крыльца</li>
                  <li>Фундамент террасы</li>
                  <li>Доставка фундамента</li>
                </ul>
              </div>

              <div class="contConst">
                <li id="fundCost"></li>
                <li>12 938</li>
                <li>7 763</li>
                <li>10 000</li>
              </div>
            </div>

            <div class="price">
              <h3 id="totalCost"></h3>
              <button class="modal_btn" id="vintPricePlus">Добавить</button>
            </div>
          </div>
        </div>

        <!-- Вторая модалка пенополист -->
        <div class="win2">
          <div class='penopolist mineral'>
            <h1 class="modalZag">Железобетонные сваи</h1>
            <p class='modalDescr'>Минеральная (базальовая или кварцевая) <br />
              вата - материал сделанный из натурального...</p>
            <div class="plusi">
              <img src="img/list.png" />
              <h3>компоненты</h3>
            </div>
            <div class="plusi">
              <img src="img/fire.png" />
              <h3>Негорючесть</h3>
            </div>

            <div class="material">
              <div class="contName">
                <h2>Материалы:</h2>
                <ul>
                  <li>Фундамент теплового контура</li>
                  <li>Фундамент крыльца</li>
                  <li>Фундамент террасы</li>
                  <li>Доставка фундамента</li>
                </ul>
              </div>

              <div class="contConst">
                <li id="jelezFundCost"></li>
                <li>14 025</li>
                <li>8 415</li>
                <li>15 000</li>
              </div>
            </div>

            <div class="price">
              <h3 id="jelezTotalCost"></h3>
              <button class="modal_btn" id="jelezPricePlus">Добавить</button>
            </div>
          </div>
        </div>

      </div>
    </div>






        <!-- обвязка -->

    <div class='modalStraping'>
      <div class="modal_main">
        <h1>Обвязка теплового контура</h1>

        <button class='modal_btn' id="vertObv">Обвязка вертикальная</button>
        <button class='modal_btn' id="gorizObv">Обвязка горизонтальная</button>




        <!-- Вторая модалка  -->
        <div class="win2">
          <div class='frstObv'>

            <h1 class="modalZag">Обвязка горизонтальная</h1>
            <p class='modalDescr'>Применяется для горизонтальной обвязки на паллетах упаковок с стеклотарой, 
              стройматериалами (кирпич, плитка), сельхозпродукцией и др. при использовании упаковочных защитных уголков.</p>
            



            <!-- <div class="material">
              <div class="contName">
                <h2>Расчет:</h2>
                <ul>
                  <li>Фундамент теплового контура</li>
                  <li>Фундамент крыльца</li>
                  <li>Фундамент террасы</li>
                  <li>Доставка фундамента</li>
                </ul>
              </div> -->

              <!-- <div class="contConst">
                <li id="fundCost"></li>
                <li>12 938</li>
                <li>7 763</li>
                <li>10 000</li>
              </div>
            </div> -->

            <div class="price">
              <h3 id="gorizTtl"></h3>
              <button class="modal_btn" id="GorizObvDob">Добавить</button>
            </div>
          </div>
        </div>

        <!-- Вторая модалка пенополист -->
        <div class="win2">
          <div class='scndObv'>
            <h1 class="modalZag">Обвязка вертикальная</h1>
            <p class='modalDescr'>Вертикальная обвязка с использованием картонных защитных уголков применяется для 
              вертикальной обвязки на паллетах упаковок с гофрокартонными ящиками...</p>

            

            <div class="material">
              <div class="contName">
                <!-- <h2>Расчет:</h2>
                <ul>
                  <li>Фундамент теплового контура</li>
                  <li>Фундамент крыльца</li>
                  <li>Фундамент террасы</li>
                  <li>Доставка фундамента</li>
                </ul>
              </div>

              <div class="contConst">
                <li id="jelezFundCost"></li>
                <li>14 025</li>
                <li>8 415</li>
                <li>15 000</li>
              </div>
            </div> -->

            <div class="price">
              <h3 id="vertTtl"></h3>
              <button class="modal_btn" id="vertObvDob">Добавить</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
  <script type="module" src='math.js'></script>
  <script src="./../calculator/modal.js"></script>
  <script src='./../main/slider.js'></script>
</body>