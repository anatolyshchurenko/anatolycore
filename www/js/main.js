// made by mr.chronica
document.getElementById('regist_form').addEventListener('submit', registrationFunc)
function infoButton() {
    const element = document.getElementById("h_info");
    
    if (element.style.opacity == "0" || element.style.opacity == "") {
        element.style.opacity = "1";
    } else {
        element.style.opacity = "0";
    }
}
function authorButton() {
    const element = document.getElementById("h_author");
    
    if (element.style.opacity == "0" || element.style.opacity == "") {
        element.style.opacity = "1";
    } else {
        element.style.opacity = "0";
    }
}
function registrationFunc(event)
{
    event.preventDefault();
    var el = document.getElementById('regist_form');
     console.log("Начало регистрации пользователя");
    
    // Получаем значения из формы
    var name = el.name.value.trim();
    var password = el.password.value;
    var email = el.email.value.trim();
    var failReg = "";
    // Валидация
    if (name == "" || password == "" || email == "") {
        failReg = "Заполните все поля";
    } else if (name.length <= 3) {
        failReg = "Имя должно быть больше 3-х символов";
    } else if (name.length > 15) {
        failReg = "Имя должно быть не больше 15-ти символов";
    }
    // Проверка email (дополнительная валидация)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    if (failReg == "" && !validateEmail(email)) {
        failReg = "Введите корректный email";
    }
    // Обработка ошибок
    if (failReg !== "") {
        // Показываем ошибку пользователю
        alert(failReg);
        console.log("Регистрация не удалась: " + failReg);
        return false;
    }
    // УСПЕШНАЯ РЕГИСТРАЦИЯ - логируем данные только здесь
    console.log("=== РЕГИСТРАЦИЯ УСПЕШНА ===");
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("password: " + "***" + password.substring(3)); // Маскируем пароль для безопасности
    console.log("===========================");
    // Сообщение об успехе
    alert("Регистрация пользователя прошла успешно");
    // sendToServer(name, email, password);
}