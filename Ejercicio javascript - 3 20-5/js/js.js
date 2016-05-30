//Suma con el for
function sumFor(){ 
var vecNumEnt = [1,2,3];
var suma;
	suma=0;

for ( var i = 0; i < vecNumEnt.length; i++) {
	suma += vecNumEnt[i];
	}
	console.log("La suma de los numeros con for es : ",suma);
};


//Suma con el while
function sumWhile(){
 var vectornum =[1,2,3];
  var sum;
  var i;
  sum=0;
  i=0;

  while (i<vectornum.length) {
    sum += vectornum [i];
    i++;
   }  
   console.log("El suma de los numeros con While es : ",sum);
 };

//Suma con el recursion
function recu(){
  if (i == vectornum.length){
   return res;}
  else
   {
    res += vectornum[i]; 
    recu(vectornum,i++,res)
   }
   console.log("El resultado de la Recursion es :",res);
};

var vectornum =[1,2,3];
var i=0;
var res=0;

//Vector Alternando elementos de ambos vectores
var vecNum =[1,2,3];
var VecLet =[a,b,c];

var i=0;
var v=0;




sumFor();
sumWhile();
recu();











