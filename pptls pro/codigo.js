var opcionUsusario;
var opcionJs;

function aleatorio(min,max) {
	var opcion=Math.floor(Math.random() * (max - min + 1) + min);
	return opcion;
}

var opciones=["piedra","papel","tijera","lagarto","spock"];
opcionUsusario=prompt("elige una opcion:\n0 piedra\n1 papael\n2 tijera\n3 lagarto\n4 spock",0);
opcionJs=aleatorio(0,4);

function logica(){

	if (opcionUsusario>=0){
		
		if(opcionUsusario == 0) {
			if (opcionJs==0) {
				document.write("<h1>Empate!</h>");
			} else if(opcionJs==4){
				document.write("<h1>Perdiste! :(</h>");
			}else if(opcionJs==3){
				document.write("<h1>Ganaste!! =D</h>");
			}else if (opcionJs==2) {
				document.write("<h1>Ganaste!! =D</h>");
			} else if(opcionJs==1){
				document.write("<h1>Perdiste! :(</h>");
			}
		}else if(opcionUsusario==1){
			if (opcionJs==0) {
				document.write("<h1>Ganaste!! =D</h>");
			} else if(opcionJs==4){
				document.write("<h1>Ganaste!! =D</h>");
			}else if(opcionJs==3){
				document.write("<h1>Perdiste! :(</h>");
			}else if (opcionJs==2) {
				document.write("<h1>Perdiste! :(</h>");
			} else if(opcionJs==1){
				document.write("<h1>Empate!</h>");
			}
		}else if(opcionUsusario==2){
			if (opcionJs==0) {
				document.write("<h1>Perdiste! :(</h>");
			} else if(opcionJs==4){
				document.write("<h1>Perdiste! :(</h>");
			}else if(opcionJs==3){
				document.write("<h1>Ganaste!! =D</h>");
			}else if (opcionJs==2) {
				document.write("<h1>Empate!</h>");
			} else if(opcionJs==1){
				document.write("<h1>Ganaste!! =D</h>");
			}
		}else if(opcionUsusario==3){
			if (opcionJs==0) {
				document.write("<h1>Perdiste! :(</h>");
			} else if(opcionJs==4){
				document.write("<h1>Ganaste!! =D</h>");
			}else if(opcionJs==3){
				document.write("<h1>Empate!</h>");
			}else if (opcionJs==2) {
				document.write("<h1>Perdiste! :(</h>");
			} else if(opcionJs==1){
				document.write("<h1>Ganaste!! =D</h>");
			}
		}else if(opcionUsusario==4){
			if (opcionJs==0) {
				document.write("<h1>Ganaste!! =D</h>");
			} else if(opcionJs==4){
				document.write("<h1>Empate!</h>");
			}else if(opcionJs==3){
				document.write("<h1>Perdiste! :(</h>");
			}else if (opcionJs==2) {
				document.write("<h1>Ganaste!! =D</h>");
			} else if(opcionJs==1){
				document.write("<h1>Perdiste! :(</h>");
			}
		}else{
			document.write("escoje una puta opcion >:(");
		}
	}else{
		document.write("<h1>escoje una puta opcion >:(</h1>");
	}
}
logica();

function mostrarImagenMaquina(){


var imagenJs = "  ";

switch(opcionJs) {
	case "0": imagenJs = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/piedra.jpg'; break;
	case "1": imagenJs = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/papel.jpg'; break;
	case "2": imagenJs = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/tijera.jpg'; break;
	case "3": imagenJs = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/lagarto.jpg'; break;
	case "4": imagenJs = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/spock.jpg'; break;
}

document.write("<br> JavaScript escogio " + opciones[opcionJs]);
document.write('<img id="foto" width="300" height="300">');

document.getElementById("foto").src=imagenJs;
}

function mostrarImagenUsuario(){

var imagen = "  ";

document.write("<br>Escogiste " + opciones[opcionUsusario]);
switch(opcionUsusario) {
	case "0": imagen = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/piedra.jpg'; break;
	case "1": imagen = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/papel.jpg'; break;
	case "2": imagen = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/tijera.jpg'; break;
	case "3": imagen = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/lagarto.jpg'; break;
	case "4": imagen = 'file:///home/yojan/Escritorio/Desktop/programacionBasica2.0/pptls%20pro/imagenes/spock.jpg'; break;
}

document.write('<img id="myPhoto" width="300" height="300">');

document.getElementById("myPhoto").src=imagen;

}