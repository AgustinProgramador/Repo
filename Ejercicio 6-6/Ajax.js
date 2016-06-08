

success: function(data){
for(var i =0 ; i< data.length;i++){
    $('#personas').append('<span>' + data[i].id + '</span>');
    $('.conteiner').append('<span>' + data[i].nombre + '</span>');
    $('.conteiner').append('<span>' + data[i].edad + '</span>');
    $('.conteiner').append('<span>' + data[i].email + '</span>');
}
}