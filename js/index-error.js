$(document).ready(function() {
  var $screen = $("#screen");
  var num1 = 0;
  var num2 = 0;
  var sym = '';
  var operation ={
  '+': function(a,b){return a+b},
  '-': function(a,b){return a-b},
  'x': function(a,b){return a*b},
  '÷': function(a,b){return a/b}
}

$(".buttons").click('span', function(event) {
  var $target = $(event.target)
  var clicked = event.target.innerHTML;
    if ($target.prop("tagName") === "DIV") {
        return;
    } else if (clicked === 'C') {
            $($screen).html("");
            num1 = 0;
            num2 = 0;
            console.log('clear');
    } else if (["-", "x", "÷", "+"].indexOf(clicked) > -1) {
            sym = clicked;
            console.log(clicked)
            num1 = $($screen).text();
            $($screen).html("");
            console.log(num1);
    } else if (clicked === '=') {
            if (num2 === 0) {
                $($screen).html("Error");
              }  else {
                num2 = $($screen).text();
                console.log(num2);
                var final = (operation[sym](parseInt(num1), parseInt(num2)));
                console.log(operation[sym], final);
                $($screen).html(final);
                num1 = 0;
                num2 = 0;
                console.log(num1, num2, 'nums');
              }
      }
        $($screen).append(clicked);

    });

    //doc ready close
});






  // $(".buttons").click('span', function(event) {
  //     if (event.target.prop("tagName") === "DIV") {
  //         return;
  //     } else {
  //         var clicked = event.target.innerHTML;
  //         if (clicked === 'C') {
  //             $($screen).html("");
  //             num1 = 0;
  //             num2 = 0;
  //             console.log('clear');
  //           }
  //         else if (["-", "x", "÷", "+"].indexOf(clicked) > -1) {
  //             sym = clicked;
  //             console.log(clicked)
  //             num1 = $($screen).text();
  //             $($screen).html("");
  //             console.log(num1);
  //           }
  //         else if (clicked === '=') {
  //             if (num2 === 0) {
  //                 $($screen).html("Error");
  //               }
  //             else {
  //                 num2 = $($screen).text();
  //                 console.log(num2);
  //                 var final = (operation[sym](parseInt(num1), parseInt(num2)));
  //                 console.log(operation[sym], final);
  //                 $($screen).html(final);
  //                 num1 = 0;
  //                 num2 = 0;
  //                 console.log(num1, num2, 'nums');
  //               }
  //         }
  //         $($screen).append(clicked);
  //         }
  //       }
  //     });
  //
  //     //doc ready close
  // });
