$(function(){
	var form =$("from");
	form
		.find("input[type=submit]")
		.on("click", omclick);
		

	function onClick(){

		if(form.find("input.username").val().lenght){
			alert("le pifiaste");
			return false;
			}
		if(form.find("input.password").val().lenght){
			alert("le pifiaste");
			return false; //parar
			}


		$.post({
			url:"/login",
			
			data:{
				username:form.find("input.username").val(), //tomo el valor del input
				password:form.find("input.password").val()
			},

			success:function(data){
			if (data.ok){
				console.log ("todo ok");
			}
			else{
				console.error('password incorrecto');
			}
		
			return false;  //para que no recargue la pagina
			}

	
			});
	};


//$("form input[type=text]").val() //valor de texto
//$('p').text( " hi there!" );
//alert('hola');
	



