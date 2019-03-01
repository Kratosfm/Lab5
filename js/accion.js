//Submit buttom
$("#anadirbuttom").on('click', function(event){
  event.preventDefault();
  var input = $('#newImput').val();
  $('#Lista').append('<div class="Adds"> <li id = "id">' + input + ' <br><button class="check"> Check </button> <button class="delete"> Delete </button></li></div>');

});
//Checked
$('#Lista').on('click', '.check', function(event){
  event.preventDefault();
  $(this).parent().css('text-decoration', 'line-through');
});
//Delete
$('#Lista').on('click', '.delete', function(event){
  event.preventDefault();
  $(this).closest('li').remove();
});
