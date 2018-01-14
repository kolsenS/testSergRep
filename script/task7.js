/*
Сделайте функцию, каждый вызов который будет генерировать
случайные числа от 1 до 100, но так, чтобы они не повторялись,
пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив
чисел, которые уже были сгенерированы функцией.
*/
function randomNumbers () { 
 var mas=[];
 (function () {
   while (mas.length<100) {
    var item=Math.floor(Math.random()*101);
    (mas.indexOf(item)===-1) ? mas[mas.length]=item : mas;
   };
 })();
 return mas;
};
console.log(randomNumbers());


