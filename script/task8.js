﻿function Machine() {
    this.manufacture = 'Manufacture';
    this.model = 'Model';
    this.type ='Type';
    this.on = function (name) {
     console.log( 'Устройство '  + name + ' включено\n\n' );
    };
    this.off= function (name) {
     console.log( 'Устройство '  + name + '  выключено\n\n' );
    };
    this.free= function (name) {
     console.log( 'Устройство ' + name + ' свободно\n\n' );
    };
};
function CoffeMachine() {
  Machine.apply(this);
  this.manufacture=arguments[0];
  this.model=arguments[1];
  this.type=arguments[2];
  this.makeCoffe =function(method) {
   if (method==='latte') {
        console.log('Ваш ' + method + '  готов' ); 
     };
   if (method==='americano') {
        console.log('Ваш ' + method + '  готов' ); 
      };
   if (method==='espresso') {
        console.log('Ваш ' + method + '  готов' ); 
      };
  };
};
function MicroWave() {
  Machine.apply(this);
  this.manufacture=arguments[0];
  this.model=arguments[1];
  this.type=arguments[2];
  this.cook =function(dish) {
   var mw=this;
   if (dish==='мясо') {
     console.log('Начали готовить ' + dish); 
     setTimeout(function() {
        console.log(dish  + '  готово' ); 
        mw.free(mw.manufacture);
     }, 2500);
   };
   if (dish==='рыба') {
     console.log('Начали готовить ' + dish); 
     setTimeout(function() {
        console.log(dish  + '  готова' ); 
        mw.free(mw.manufacture);
     }, 1500);
   };
  };
};
var coffemachine= new CoffeMachine('PHILIPS','HD7459/20','drip coffee maker');
var microwave= new MicroWave('SAMSUNG','ME81KRW-3/BW','С грилем');
coffemachine.on('CoffeMachine');
coffemachine.makeCoffe('latte');
coffemachine.makeCoffe('americano');
coffemachine.makeCoffe('espresso');
coffemachine.off('CoffeMachine');
microwave.on('Microwave');
microwave.cook('мясо');