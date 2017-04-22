$(document).ready(function() {

var $screen = $("#screen");
var num1 = 0;
var num2 = 0;
var sym = '';
var operation = {
  '+': function(a,b){return a+b},
  '-': function(a,b){return a-b},
  'x': function(a,b){return a*b},
  '÷': function(a,b){return a/b}
}

$(".buttons").click('span', function (event){
  var clicked = event.target.innerHTML;
  if (clicked === 'C'){
    $($screen).html("");
    console.log('clear');

  }  else if (["-","x","÷","+"].indexOf(clicked) > -1){
    sym = clicked;
    console.log(clicked)
    num1 = $($screen).text();
    $($screen).html("");
    console.log(num1);

  } else if (clicked === '='){
    num2 = $($screen).text();
    console.log(num2);
    var final = (operation[sym](num1,num2));
    console.log(final);
    $($screen).html(final);

  } else {
  $($screen).append(clicked);
}

});

//doc ready close
});
