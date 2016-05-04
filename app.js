$(document).ready(function () {
var colors = ["blue", "green", "gold", "indigo"];
//Append boxes with div and data-id

  $('body').append('<div class="blue box" data-id="0"></div>');
  $('body').append('<div class="green box" data-id="1"></div>');
  $('body').append('<div class="gold box" data-id="2"></div>');
  $('body').append('<div class="indigo box" data-id="3"></div>');

chooseBlock();
//Event listener for click
$('body').on('click', '.box', function () {
  if ($(this).hasClass('correct')) {
    alert("You win!");
    $('.correct').removeClass('correct');
    chooseBlock();

} else {
  alert("Nope.");
}

});


//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseBlock () {
var number = randomNumber(0, 3);
$('.' + colors[number]).addClass('correct');
}
});
