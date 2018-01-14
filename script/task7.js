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


