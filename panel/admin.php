<?php
$pageStyles = 'admin.css';
require "../Header/Head.php";
require "../Header/header.php";
?>

<body>
    <search class="search">
        <div>
            <input type="text" id="search" placeholder="Поиск">
        </div>
    </search>
    <items>
        <item>
            <div class="img">
                <img src="#" id="img" alt="image">
            </div>
            <div class="name">
                <span id="ObjName">Text</span>
            </div>
            <div class="price">
                <input type="number" id="price" value="01">
                <span id="Obj">Руб</span>
            </div>
        </item>
    </items>
</body>
<?php
        // $mysql= new mysqli('localhost', 'u2339146_default','avOYwHYpE4I3378E','u2339146_default');
        // if(mysqli_connect('localhost','root')){
        //     echo "<script>console.log('Connect. OK')</script>";
        //   }
        // else{
        //     echo "<script>console.error('MySQL connection Error')</script>";
        //   }

        // ?>
</html>