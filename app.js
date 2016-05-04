$(document).ready(function () {
var colors = ["blue", "green", "gold", "indigo", "peachpuff", "firebrick"];
//Append boxes with div and data-id

  $('body').append('<div class="blue box"></div>');
  $('body').append('<div class="green box"></div>');
  $('body').append('<div class="gold box"></div>');
  $('body').append('<div class="indigo box"></div>');
  $('body').append('<div class="peachpuff box"></div>');
  $('body').append('<div class="firebrick box"></div>');

chooseBlock();
//Event listener for click
$('body').on('click', '.box', function () {
  if ($(this).hasClass('correct')) {
    alert("You win!");
    $('.correct').removeClass('correct');
    $('.prompt').remove();
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
var number = randomNumber(0, 5);
$('.' + colors[number]).addClass('correct');
$('body').append('<p class="prompt">Click on ' + colors[number] + '!</p>');
}
});
