
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
		var user = utils.getFormData($form);

		
		service.createUser(user)
			
	}

	init();

}());



var utils = (function () {

	function getFormData($form){
		var serializeData = $form.serializeArray();
		var data = {};

		serializeData.forEach(function (keyValue){
			data[keyValue.name] = keyValue.value;
		});
		return data;
	};

	return { 
		getFormData: getFormData
	}

}());

var service = (function () {
	var CREATE_URL = "http://connectedin.herokuapp.com/person";

	function createUser(user) {
		return $.ajax({
			method: "Post",
			url: CREATE_URL,
			data: JSON.stringify(user),
			contentType: "application/json"
		});
	}
	return {
		createUser: createUser
	}

})();

