"use strict"

var calkPrice = [
    [1000, 2000, 3000, 3500],
    [1000, 2500, 4000],
    [1000, 2000],
];
var calkDay = [
    [2, 3, 3, 3.5],
    [2, 2.5, 4],
    [2, 3],
];
                                         

var typeSite1 = prompt("Какой тип сайта ты хочешь? 0-визитка; 1-интернет-магазин; 2-корпоративный сайт; 3-лендинг-сайт");
var typeSite2 = prompt("Какой дизайн ты хочешь? 0-шаблонный; 1-уникальный; 2-WOW-дизайн(много анимации)");
var typeSite3 = prompt("Какую адаптивность ты хочешь? 0-только компьютеры; 1-мобильные устройства;");

var priceSite = calkPrice [0] [typeSite1] + calkPrice [1] [typeSite2] + calkPrice [2] [typeSite3] + " рублей примерно потребуется для Создания сайта";
var priceDay = calkDay [0] [typeSite1] + calkDay [1] [typeSite2] + calkDay [2] [typeSite3] + " дней примерно потребуется для Создание сайта";

alert(priceSite);
alert(priceDay);
