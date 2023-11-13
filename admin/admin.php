<?php
$pageStyles = './../admin/admin.css';
require './../Header/Head.php';
?>
<body>
    <?php require './../Header/Header.php'; ?>
    <main>
        <div class="login_card">
            <h2>Авторизация</h3>
            <input type="text" id="login" placeholder="Логион" class="inputs"></input>
            <input type="password" id="password" placeholder="Пароль" class="inputs"></input>
            <button class="submitBtn" id="submitId">Войти</button>
        </div>
    </main>
    <script src="login.js"></script>
</body>