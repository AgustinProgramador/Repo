
(function(){
	var $form;

	/**
	Inicializa el modulo
	**/

	function init() {
		$form = $("form");
		setupListeners();
	}

	function setupListeners() {
		$form.on ('submit', onFormSubmit);
	}

	function onFormSubmit(e){
		e.preventDefault();

		service.listUser(user)
			
	}

	init();

}());





var service = (function () {
	var LIST_URL = "http://connectedin.herokuapp.com/person";

	function listUser(user) {
		return $.ajax({
			method: "get",
			url: "/person",
			data: JSON.stringify(user),
			contentType: "application/json"
		
				for(var i =0 ; i< data.length;i++){
					return taskTemplate
					<div class="row"> 
						<span class="col-xs-1 data"> ID: %id%</span > 
						<span class="col-xs-3 data"> Nombre: %nombre%</span >
						<span class="col-xs-2 data"> Edad: %edad%</span >
						<span class="col-xs-3 data"> Email: %email% </span>
					</div>
					
			    $('#MostrarUsuarios').append(html);
			    }

		});
	}
	return {
		listUser: listUser
	}

})();

