var primernumero=0,segundonumero=0,resultado=0;
primernumero=parseInt(prompt("Ingrese el primer numero"));
segundonumero=parseInt(prompt("Ingrese el segundo numero"));

if (primernumero>segundonumero) {
resultado=primernumero+segundonumero;
alert("La suma del numero "+primernumero+" y "+segundonumero+ " es igual a "+resultado);
}
if(primernumero<segundonumero) {
    resultado=(primernumero**2)+(segundonumero**2);
    alert("La suma del numero "+primernumero**2+" y "+segundonumero**2+ " es igual a "+resultado);
}
if (primernumero==segundonumero || segundonumero==primernumero){
alert("Los numeros son iguales");
}
