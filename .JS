function Rotar(angle){
    var $elem = $('#Rueda');
    $({deg: 0}).animate({deg: angle}, {
        duration: 4000,
        easing: 'easeInOutElastic',
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function comienza(){
  $('div:not(.contenedor)').html('');
  $('#Rueda').css( "transform", "rotate(0deg)" );
  var resultados=[
        'ZERO',
        '+1 МИНУТА',
        '+20 МИНУТ',
        '+5 МИНУТ',
        '+1 МИНУТА',
        '+10 МИНУТ',
        'ZERO',
        '+15 МИНУТ',
        '+1 МИНУТА',
        'ZERO',
        '+1 ЧАС',
        '+5 МИНУТ',
        '+10 МИНУТ',
        'ZERO',
        '+1 МИНУТА',
        '+20 МИНУТ',
        '+1 МИНУТА',
        '+5 МИНУТ'
      ],
      randomNo=Math.floor(Math.random()*(10800-1080+1)+1080);
  var vueltas=randomNo/360;
  var decimal=vueltas % 1;
  var grados=Math.floor(360*decimal);
  var arrPos=Math.floor(grados/(360/resultados.length));
  if(arrPos==18) arrPos=0;
  var result=resultados[arrPos];

  $('.random').html('Random: '+randomNo);
  $('.vueltas').html('Vueltas: '+vueltas);
  $('.decimal').html('Decimal: '+decimal);
  $('.grados').html('Grados: '+grados+'°');
  $('.arrpos').html('Posicion: '+arrPos);
  $('.result').html('Результат: <strong>'+result+'</strong>');

  Rotar(randomNo);
}

$('button').on('click',function(){
  comienza();
});