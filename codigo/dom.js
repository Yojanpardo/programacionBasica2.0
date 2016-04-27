//variables por valor
//variables por asignacion

function pokemon(n,v,a){
//    var estructura={
        this.imagen=" ",
        this.sonido=" ",
        this.nombre= n,
        this.vida= v,
        this.ataque= a,
        this.voz = function(){
            alert(this.sonido)
        }
//  };
//    return estructura;
}
function inicio(){
    alert("que cojones");
    var pikachu= new pokemon("Pikachu",500,100);
    var gatomon=new pokemon("Gatomon",300,150);
    pikachu.sonido="Pika";
    gatomon.sonido="Miau!!";
    nombrePokemon.innerText=gatomon.nombre;
    sonido.innerText=gatomon.sonido;
    vida.innerText=gatomon.vida;
    ataque.innerText=gatomon.ataque;
    pikachu.imagen="file:///home/neox/Im%C3%A1genes/imagenes%20index/025Pikachu_XY_anime_3.png";
    gatomon.imagen="file:///home/neox/Im%C3%A1genes/imagenes%20index/Gatomon_%28Ringless%29_t.gif";
    gatomon.innerText=gatomon.imagen;
}
//document.write(gatomon.nombre);

//console.log(gatomon,pikachu);