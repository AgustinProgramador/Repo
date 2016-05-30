module.exports = function (server){
 var UsersModel = function(){
  var usuarios = [
  {
   name : 'pablo',
   email: 'pablo.petran@globallogic.com'
  },
  {
   name: 'agustin',
   email: 'agustin.diaz@globallogic.com'
  }
  ];

  this.getUser = function (req, res, next){
	   //console.log (req.body);
	   var userId = req.params.id;

	   if (usuarios[userId]) {
	   		res.send(200, usuarios[userId]);
	   }else{
	   		res.send(404,"no se encuentra")}
	   return next();
	}

  this.editUser = function (req, res, next){
		var userId = req.params.id;
		//var userId = new Array();
		

		if (usuarios[userId]) {
			res.send(200, usuarios[userId]);
		}else{
			res.send(404,"no se encuentra")}
		return next();
	}
};



 var User = new UsersModel();

 server.get({
 	path: '/users/:id',
 	version: '1.0.0'
	},User.getUser);

server.post({
	path: '/users/:id',
	version: '1.0.0'
	},User.editUser);

};