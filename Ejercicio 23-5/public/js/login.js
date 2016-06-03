$(function(){
    var form = $('form'),
        email = form.find('input.email'),
        password = form.find('input.password');
        
    form
        .find('input[type=submit]')
        .on('click', onClick);


    function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }

	function onClick(){
        //var errors = [];
        
        if(!email.val().length){
            email.parents(".form-group").addClass ("required");        
        }else{
            email.parents(".form-group").removeClass ("required");

                if(validateEmail(email.val())){
                    email.parents(".form-group").addClass("invalid");        
                }else{
                    email.parents(".form-group").removeClass("invalid");
                }
        }

        if(email.parents(".form-group.requered, .form-group.invalid").length){
            email.parents(".form-group").addClass("has-error");        
            
                 
        }else{
            email.parents(".form-group").removeClass ("has-error");
        }






        if(!password.val().length){
            password.parents(".form-group").addClass("required");
        }else{
            password.parents(".form-group").removeClass("requered");

                if(!password.val().length){
                    password.parents(".form-group").addClass("invalid");        
                }else{
                    password.parents(".form-group").removeClass("invalid");
                }
        }

        if(password.parents(".form-group.requered, .form-group.invalid").length){
            password.parents(".form-group").addClass("has-error");        
            

        }else{
            password.parents(".form-group").removeClass ("has-error");
        }








        if(form.find(".has-error").length){
            return false;
        }


        
		$.post({
			url:'/login',
			data:{
				email:email.val(),
                password:password.val()
			},
			success: function(data){
                if(data.ok){
                    console.log('todo ok');
                }
                else{
                    console.error('password invalido');
                }
			}
		});		
		return false;
	}
});