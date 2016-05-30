
document.getElementsByTagName("h1")[0].style = 'background-color:yellow';
document.getElementById("info").style = 'background-color:orange';
document.getElementsByClassName('row')[0].style = 'background-color:red';

var jsonCV = {
	"nombre" :"Juan Perez",
	"Experiencia":[
	"HTML3","Java","VB6"
	]
	};




document.getElementById('nombre').innerHTML = jsonCV.nombre;
document.getElementsByClassName('Exp').innerHTML = jsonCV.Experiencia;

$($("li")[0]).html("Cambiando texto")
