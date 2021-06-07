/*<----Primer punto--->*/
/*var usuario = {
    nombre: "John",
    edad: 40
}

function EdadMayor() {
    if(usuario.edad > 18){
        alert("La edad de " + usuario.nombre + " es " + usuario.edad)
    }
}

EdadMayor()*/

/*<----Segundo punto--->*/ 
var usuario = []
function ComparaEdad() {
    for(var i = 0; i <= 2; i++){
        usuario.push(prompt("Ingrese su edad"))
    }
    var mayor = usuario[0]
    for(var i = 0; i <= 2; i++){
        if(mayor < usuario[i]){
            mayor = usuario[i]
        }
        else{
            mayor = mayor
        }
    }
    alert("El mayor es " + mayor)
}

ComparaEdad()