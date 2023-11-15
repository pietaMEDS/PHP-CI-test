<?php
$pageStyles = './../admin/admin.css';
require './../Header/Head.php';
?>


<?php
$adminPassword = 'admin';
$adminLogin = 'admin';

$loginSend = $_POST['login'];
$passwordSend = $_POST['password'];

$msgToUser = '';

print_r($_COOKIE);

if ($_COOKIE['username'] === $adminLogin && $_COOKIE['userpassword'] === $adminPassword) {
    header('Location: ./../panel/admin.php');
} else if (isset($loginSend)) {
    if ($loginSend === $adminLogin && $adminPassword === $passwordSend) {
        setcookie('username', $loginSend, time() + 7 * 24 * 60 * 60); // Храним куку 7 дейс, чтобы человек не вводил заного логин и пароль.. 
        setcookie('userpassword', $passwordSend, time() + 5);
        header('Location: ./../panel/admin.php');
    } else {
        $msgToUser = ("Вы ввели неверный логин или пароль!");
    }
}

?>

<body>
    <?php require './../Header/Header.php'; ?>
    <main>
        <div class="login_card">
            <form action="admin.php" method="POST">
                <h2>Авторизация</h3>
                    <input type="text" name="login" placeholder="Логин" class="inputs"></input>
                    <input type="password" name="password" placeholder="Пароль" class="inputs"></input>
                    <button class="submitBtn" name="submitId">Войти</button> <br>
                    <?php echo ($msgToUser) ?>
            </form>
        </div>
    </main>
    <script src="login.js"></script>
</body>