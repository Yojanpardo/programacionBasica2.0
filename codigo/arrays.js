/*var DOFA = [ ["fuerza","oportunidades"] , ["debilidades","amenazas"] ];
document.write(DOFA[1][0]);*/

function explocion() {
	alert("ALAHU AKBAAAAAAR!!!\n *explota el amigo arabe*");
	document.write("<h1> Tu amigo arabe acaba de explotar :( </h1>");
}

function ganar(){
	document.write("<h1> Muy bien, estas a salvo, tu amigo arabe no carga bombas el dia de hoy :)</h1>");
}

var campo=[ [1 , 0 , 0] , [0 , 1 , 0] , [1 , 0 , 1] ];
/*if (campo [1][0] == 1){
	explocion();
}else{
	ganar();
}*/

var textos = ["<h2>arena</h2>","<h2>arabe explosivo</h2>"];

var x , y;

var posicion;

alert("estas en un campo lleno de arabes\nelije una posicion entre el 0 y el 2 para moverte");

x=prompt("posicion en x entre 0 y 2",0);
y=prompt("posicion en y entre 0 y 2",0);
if (x <= 2 && y <= 2) {
	posicion = campo[x][y];
	document.write("<h2>Elegiste: </h2>" + textos[posicion] );
	if (posicion==1) {
		explocion();
	} else {
		ganar();
	}
} else {
	document.write("<p>te saliste del campo<p/>");
	explocion();
}
//xdocument.write(campo [x][y]);