
$(function(){
	tasks = [],
  	templateContainer = $('#templates'),
    taskTemplate="";

    templateContainer.find('#mostrarPersona').load('listar-template.html', function(){
        taskTemplate = templateContainer.find('#mostrarPersona').html();
        //console.log(taskTemplate);
	$(".listar").on('click', listar);
	$(".listarId").on('click', listarId);
	$(".refrescar").on('click', refrescar);
	$(".eliminar").on('click', eliminar);
	
    });

   






	function listar(){
		
		$.ajax({
			url:"/persona",
			method:"get",
			success:function (data){
				//$( ".data" ).remove()
				for(var i =0 ; i< data.length;i++){
					return taskTemplate
					//console.log(taskTemplate);
					.replace(/%id%/gi, data[i].id);
					.replace('{{nombre}}', data[i].nombre);
					.replace(/%edad%/gi, data[i].edad);
					.replace(/%email%/gi, data[i].email);
					
			    $('#mostrarPersona').append(html);
			    }
			}
	    });
	}

	function listarId(){
		$.ajax({
			url:"/persona/"+$('#textId').val(),
			method:"get",
			success:function (data){
				$( ".data" ).remove()

					var text = $('#xTemplate').text();
					
					text = text.replace('{{id}}', data.id);
					text = text.replace('{{nombre}}', data.nombre);
					text = text.replace('{{edad}}', data.edad);
					text = text.replace('{{email}}', data.email);

			    $('#mostrarPersona').append(text);
			    }
			
	    });
	}

	function refrescar(){
		$.ajax({
			url:"/persona",
			method:"get",
			success:function (data){
				$( ".data" ).remove()
				for(var i =0 ; i< data.length;i++){

					var text = $('#xTemplate').text();

					text = text.replace('{{id}}', data[i].id);
					text = text.replace('{{nombre}}', data[i].nombre);
					text = text.replace('{{edad}}', data[i].edad);
					text = text.replace('{{email}}', data[i].email);

			    $('#mostrarPersona').append(text);
			    }
			}
	    });
	}

	//function eliminar(){
			//$.ajax({
			//url:"/personas/"+$('#textEliminar').val(),
			//method:"delete",
			//success:function (data){
			//	$( ".data" ).remove()
//
//					
//			    }
//			
//	    });
//	}
//
//	      url: '/personas',//pasar el id
//	      method: 'delete',
//	      data:{
//	        id: $('#eliminar').val(),
//	      },
//
//	      success: function(data){ // cuando el servidor termina el pedido, devuelve data
//	        console.log('respuesta del server', data); // muestra en la consola de front (html)
	   

});	

//console.log(data);

