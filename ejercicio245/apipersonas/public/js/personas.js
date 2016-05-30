
$(function(){
	$(".listar").on('click', listar);
	$(".listarPorId").on('click', listar);
	$(".refrescar").on('click', refrescar);
	$(".eliminar").on('click', eliminar);
  
	function listar(){
		
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

	function listarPorId(){
		$.ajax({
			id: $('#listarPorId').val(),
			url:"/persona/"+id,
			method:"get",
			success:function (data){
				$( ".data" ).remove()

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

	function refrescar(){
		$( ".data" ).remove()
		$.get("/persona", function(data){
		    for(var i =0 ; i< data.length;i++){
		    	$('#mostrarPersona').append('<div class="row"> <span class="col-xs-1 data"> ID: ' 
		           + data[i].id 
		           + '</span > <span class="col-xs-3 data"> Nombre: ' 
		           + data[i].nombre 
		           + '</span > <span class="col-xs-2 data"> Edad: ' 
		           + data[i].edad 
		           + '</span > <span class="col-xs-3 data"> Email: ' 
		           + data[i].email
		           + '</span></div>');
		    }
		})
	}

	function eliminar(){
	    $.ajax({
	      url: '/personas',//pasar el id
	      method: 'delete',
	      data:{
	        id: $('#eliminar').val(),
	      },

	      success: function(data){ // cuando el servidor termina el pedido, devuelve data
	        console.log('respuesta del server', data); // muestra en la consola de front (html)
	      }
		});
	}

});	

//console.log(data);

