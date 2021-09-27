"use strict"


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 40 + "px"});
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

setTimeout(function(){
    alert("Воу! Ты впервые здесь? Тебе стоит знать, что сейчас я дарю скидку в 50% на первый заказ! Скороее свяжись со мной!");
},30000);
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

var priceSite1 = calkPrice [0] [typeSite1] + calkPrice [1] [typeSite2] + calkPrice [2] [typeSite3];
var priceDay1 = calkDay [0] [typeSite1] + calkDay [1] [typeSite2] + calkDay [2] [typeSite3];


alert(priceSite);
alert(priceDay);

$(".srok1").text(priceDay1 + " дней");
$(".price1").text(priceSite1 + " рублей");

let options = {threshold: [0.8]};
   let observer = new IntersectionObserver(onEntry, options);
   let elements = $('.numbers');
   elements.each((i, el) => {
       observer.observe(el);
   }); 


function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('showIt');
        }
    });
}