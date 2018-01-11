function range(pr1, pr2, pr3) {
 //Проверяем, определена ли переменная, задающая шаг диапазона.
 //Если не определена - принимаем шаг, равным 1.
 (!!!pr3 && pr3!==0) ? pr3=+1 : pr3;
 //Проверяем, направление вектора диапазона и направление шага.
 //Если не совпадают или шаг равен 0 - выдаем сообщение о недопустимости заданых параметров.
 if ((pr1>pr2 && pr3>0)  || (pr1<pr2 && pr3<0) || (pr3===0)) {
   console.log ('Заданы недопустимые параметры');
   return false;
 } else {
     var mas=[pr1];
     for (var i=1;i<Math.floor((Math.abs(pr2-pr1)+1)/Math.abs(pr3));++i) {
      (pr1<pr2) ? mas[i]=mas[i-1]+Math.abs(pr3) : mas[i]=mas[i-1]-Math.abs(pr3);
     };
     if ((mas[mas.length-1]+pr3)===pr2) {
      mas.push(pr2);
     };
     return mas;
   };
};
function sum(mas) {
  return sum=mas.reduce(function(sm,it) {
    return sm+it;
  }, 0);
};
console.log('\n\n Задача: Диапазон\n\n\n');
var p1=prompt ('Задайте начало диапазона:' , 1);
var p2=prompt ('Задайте конец диапазона:', 10);
var p3=prompt ('Задайте шаг диапазона:', 1);
(range (+p1,+p2,+p3)===false) ? console.log('Массив не определен') :
console.log(range (+p1,+p2,+p3)) + console.log(sum(range (+p1,+p2,+p3)));
