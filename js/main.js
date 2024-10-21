//ingrese un numero por teclado y verifique si el nuemero es perfecto o no sabiendo q un numero perfecto es la suma de sus divisiores excluyendo el mismo numero 

var n = prompt("Ingrese el numero del q quiere saber si es perfecto");
var m=0;

for (i = 1; i < n; i++) {
    if (n % i== 0) {

        m=m+i        
        
    }
}

if (m == n) {

    document.write(+ n+ " es un numero perfecto")
    
} else{
    
    document.write(+ n+ " no es un numero perfecto")
}