
//practicando con Json

var cvTest = {
	"nom" :"Juan Perez",
	"about":"soy un groso",
	"exp":[{
			"lugar":"GL",
			"pos":"dev",
			"periodo":"2016"
			}],
	"con":["tec1","tec2"]
	};

var jqobj = $("<div></div>");
$.each(cvTest, function(key,value){
	if( typeof value =="string"){
		$("#"+key).html(value);
	}else{
		var ul = $("<ul></ul>");
		$.each(value,function(k,v){
			var li = $("<li></li>");
			li.html(v);
			ul.append(li);
		});
		$("#"+key).append(ul);	
	}
});

$.each(cvTest, function(key,value){
	if( typeof value =="Array"){
		$("#"+key).html(value);
	}else{
		var ul = $("<ul></ul>");
		$.each(value,function(k,v){
			var li = $("<li></li>");
			li.html(v);
			ul.append(li);
		});
		$("#"+key).append(ul);	
	}
});






