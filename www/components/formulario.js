

$(document).on('click','#ver',function(){
  var nome = $('#nome').val();
  var idade = $('#nome').val();
  if (idade>=18){
     $('#tem').show();
  } else{
     $('#nao').show();
  }
});