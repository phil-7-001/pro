// Optional: Example for form submission (no backend here)
// document.getElementById("contact-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Thank you for your message!");
//     this.reset();
//   });


$('.body-two').show();
$('.body-one').hide();
setTimeout(()=>{
  $('.body-one').show();
  $('.body-two').hide();
}, 3000)
let num1 = '';
let num2 = '';
let operation = ''
$('.button').on('click', ()=>{  
  numone = $('#num1').val();
  numtwo = $('#num2').val();

  num1 = parseFloat(numone)
  num2 = parseFloat(numtwo)
  let text = '';
  let result;

     result = num1 / num2^2 ;

  if(result < 18.5){
    text = 'You are Underweight';
  }
  else if(result > 18.5 && result < 24.9){
    text = 'You are healthy';
  }
  else if(result >= 25 && result < 29.9){
    text = 'You are healthy';
  }
  else if(result > 30){
    text = 'You are Obese';
  }
  
  $('.result').html('Your BMI is '+ num1 + '/' + num2 + ' =  ' + result+'Kg/m<sup>2</sup>' )
  $('.text').html('Hint: '+ text);
})



$('.press').on('click', ()=>{
numthree = $('#num3').val();
numfour = $('#num4').val();
operation = $('#operation').val()

num3 = parseFloat(numthree);
num4 = parseFloat(numfour);
let output = '';
let answ;
if(operation === '+'){
   answer = num3 + num4;
   $('.result').html( num3 + operation + num4 + ' = ' + answer);
}
else if(operation === '-'){
   answer = num3 - num4;
   $('.result').html( num3 + operation + num4 + ' = ' + answer);
}
else if(operation === '/'){
   answer = num3 / num4 ;
   $('.result').html( num3 + operation + num4 + ' = ' + answer);
}
else if(operation === '*'){
   answer = num3* num4;
   $('.result').html( num3 + operation + num4 + ' = ' + answer);
}
else{
   answer = 'Operation is not valid';
   $('.result').html(answer);
}
})
