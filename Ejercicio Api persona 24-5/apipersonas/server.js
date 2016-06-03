var express = require('express'),
    server = express(),
    bodyParser = require('body-parser'), //esto sirve para poder agregar personas
    personas = [
        {
            id: 1,
            nombre: 'Persona1',
            edad: 24,
            email: 'persona1@sarasa.com'  
        },
        {
            id: 2,
            nombre: 'Persona2',
            edad: 25,
            email: 'persona2@sarasa.com'  
        },
        {
            id: 3,
            nombre: 'Persona3',
            edad: 25,
            email: 'persona3@sarasa.com'  
        },
        {
            id: 4,
            nombre: 'Persona4',
            edad: 26,
            email: 'persona4@sarasa.com'  
        },
        {
            id: 5,
            nombre: 'Persona5',
            edad: 28,
            email: 'persona1@sarasa.com'  
        }
    ];

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

// liste todas las personas
server.get('/persona', function(req, res, next){
    res.send(200, personas);
});

// detalle de una persona
server.get('/persona/:id', function(req, res, next){
    var personaId = req.params.id;    // accede al id que se ha requerido

    res.send(200, personas[personaId]);
});


//modificar persona
server.put('/Mod/:id', function(req, res, next){
    var personaId=req.params.id;

    newName = req.body.nombre;

    personas[personaId].nombre = newName;

    personas.push();
    res.send(200, personas[personaId]);
    res.send(200,"Se modifico la persona correctamente");
});


//agregar persona
server.post('/personas', function(req, res, next){

  var personaData = {
      id: req.body.id,
      nombre: req.body.nombre,
      edad: req.body.edad,
      email: req.body.email
  };

  console.log(req.body);

  //console.log(req.body);
  personas.push(personaData);
  res.send(200,"Se agregó la persona correctamente");

  return next();
});


//borrar persona
server.delete('/personas', function(req, res, next){
 
 var userId = req.body.id;
  
  //Busco el ID en el vector
  i=0;
  while (i < personas.length-1 && personas[i].id != userId){
    //console.log(personas[i].id);
    //console.log("El user id es: "+userId);
    i++;
  }
  
  //Si lo encontró lo elimino sino mando mensaje error
  if(personas[i].id == userId){
    delete personas[i];
    res.send (200, 'Usuario eliminado.');
      
    personas = personas.filter( function(persona) { return !!persona; });  // al usar delete, deja el espacio 
  }                                                                        // en undefined. Con el filter, filtro con "!!"
  else{                                                                    // que hace true el "undefined" y el "null"
    res.send(404, 'El usuario no existe, no se puede eliminar.');
  }
  return next();
});










server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});