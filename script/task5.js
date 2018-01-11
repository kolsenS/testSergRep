function OpText(str) {
  str=str.replace(/[^A-Za-zА-Яа-яЁё\s]/g,' ');
  stra=str.replace(/[^AaАа]/g,'');
  str=str.replace(/ +/g,' ');
  var mas=str.split(' ');
  if (mas[0]==='') {
     mas.splice(0,1);
  };
  if (mas[mas.length-1]==='') {
     mas.pop ();
  };
  console.log('Количество слов в тексте: ',mas.length);
  var masmidlength=mas.map(function(name) {
    return name.length;
  });
  function sum(mas) {
    return sum=mas.reduce(function(sm,it) {
      return sm+it;
    }, 0);
  };
  console.log('Средняя длина слова в тексте: ',sum(masmidlength)/mas.length);
  (!!!stra) ? console.log('Символы из множества AaАа отсутствуют') : console.log('Текст содержит ',stra.length,' симв. из множества AaАа');
};
console.log('\n\n Задача: Работа с текстом\n\n\n');
var st=prompt('Задайте предложение/словосочетание/абзац', '');
OpText(st);
