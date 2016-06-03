var calculadora = (function() {
	var valor;

	function sumar(input){
        input = tryParse(input);
        valor += input;
        return valor;
    }
    
    function tryParse(input){
        input = parseInt(input, 10);
        if(isNaN(input)){
            throw 'Invalid Number';
        }
        return input;
    }

    function restar(input){
        input = tryParse(input);        
        valor -=input;
        return valor;
    }

    function multiplicar(input){
        input = tryParse(input);
        valor *=input;
        return valor;
    }

    function dividir(input){
        input = tryParse(input);
        if(input === 0){
            throw 'Math Error';
        }

        valor = valor / input;
        return valor;

    }

    function clear(){
        init();
        return valor;        
    } 

    function init(){
        valor = 0;
    }

    function asignarValor(input){
        input = tryParse(input);
        valor = input;
        return valor;
    }
    
    function obtenerValor(){
        return valor;
    }

    init();
    
    return{
      sumar: sumar,
      restar: restar,
      multiplicar: multiplicar,
      dividir: dividir,
      clear: clear,
      asignarValor: asignarValor,
      obtenerValor: obtenerValor
    };
    
})();

//vista cliente de la calcu

$(function(){
    var $calc,
        inputNumero,
        operacion,
        nuevaOperacion,
        concatenarNumero,
        numero;

    init(); 
    
    function init(){
        //asignar variables
        $calc = $('.calculadora'),
        inputNumero = $calc.find('.input');
        
        // set initial value
        clear();
        
        // set listeners
        $calc.find('.butonNumero').on('click', onNumberPress);
        $calc.find('.operacion').on('click', onOperationPress);
    }
    
    function onNumberPress(){
        var numero = $(this).html();

        if(concatenarNumero){
        numero = parseInt(inputNumero.val() + numero, 10);            
        }
        concatenarNumero = true;
        inputNumero.val(numero);
        console.log("apretaste un boton");
        
        if(!operacion){
            calculadora.asignarValor(numero); 
        }
    }
    
    function onOperationPress(){
        var operacion = $(this).data('operacion');
        console.log("apretaste un operador");
        concatenarNumero = false;
        nuevaOperacion = operacion;

        if(nuevaOperacion === 'clear'){
            console.log("apretaste clear");
            return clear();
        }
        if(nuevaOperacion === 'igual'){
            if (operacion){
            var resultado = calculadora[operacion](numero);
            inputNumero.val(resultado);
            }
            return;
        }
        
        if(nuevaOperacion){
            numero = calculadora.obtenerValor();
            operacion = 
        }
        

    function clear(){
        inputNumero.val(calculadora.clear());
        concatenarNumero = true;
        operacion = null;
    }


    
    
};



// $($0) .data ('operacion');
//"dividir" esto devuelve






	





















