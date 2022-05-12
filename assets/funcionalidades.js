// Ejercicios Javascrip


// -----------Ejercicio 1 -----------------

function func_ej1(){
    let ej1_n1 = parseFloat( document.getElementById ("ej1_n1").value); 
    let ej1_n2 = parseFloat( document.getElementById ("ej1_n2").value);
    let ej1_n3 = parseFloat( document.getElementById ("ej1_n3").value); 

    let numeromayor = Math.max(ej1_n1, ej1_n2, ej1_n3);
    let numeromenor = Math.min(ej1_n1, ej1_n2, ej1_n3);

    document.getElementById("mayor").value = numeromayor;
    document.getElementById("menor").value = numeromenor; 
}      


// ------------Ejercicio 2 -----------------

function func_ej2(){
    let ej2_n1 = parseFloat( document.getElementById ("ej2_n1").value);
    let ej2_n2 = parseFloat( document.getElementById ("ej2_n2").value);

    let suma = ej2_n1 + ej2_n2;
    document.getElementById("resultadoej2").value = suma;
}


//--------------Ejercicio 3--------------


function func_ej3(){
    let ej3_palabra = parseFloat(document.getElementById ("ej3_palabra").value);
    let ej3_numero = parseFloat(document.getElementById ("ej3_numero").value);
    let texto = ""

    for (let index = 0; index < ej3_numero; index++ ) {
        texto += ej3_palabra +" "
    }
    document.getElementById("resultadoej3").value = texto;


}

//--------------Ejercicio 4-----------

function func_ej4(){
    let ej4_centigrados = parseFloat(document.getElementById ("ej4_gradosc").value);
    let ej4_fahrenheit = parseFloat(document.getElementById ("ej4_fahrenheit").value);

    let convercion_fahrenheit = ej4_centigrados * 1.8 + 32;
    let convercion_centigrados = (ej4_fahrenheit - 32) / 1.8;

    document.getElementById("resultado1ej4").value = convercion_centigrados;
    document.getElementById("resultado2ej4").value = convercion_fahrenheit;

} 


// -------------Ejercicio 5 ------------

function func_ej5(){  
    let ej5_palabra =  document.getElementById ("ej5_palabra").value;
    let letras = ej5_palabra.length;

    document.getElementById("resultadoej5").value = letras
}


// ------------Ejercicio 6 ------------

function func_ej6(){
    let ej6_numero = document.getElementById ("ej6_numero").value;
    if (ej6_numero%2==0) {
        document.getElementById("resultadoej6").value = "Par";
    } else {
        document.getElementById("resultadoej6").value = "Impar";
    }

}



// ----------Ejercicio 9------------
function func_ej9(){
    let nombre = document.getElementById ("ej9_nombre").value;
    let apellido = document.getElementById ("ej9_apellido").value;
    let edad = document.getElementById ("ej9_edad").value;
    let ciudad = document.getElementById ("ej9_ciudad").value;

    

    document.getElementById("resultadoej9").value = `Mi nombre es ${nombre} ${apellido}, tengo ${edad} años. Nací en la ciudad de ${ciudad}.`;

}


// -----------Ejercicio 10 ----------------
function func_ej10(){
    let ej10_nro1= parseFloat (document.getElementById("ej10_n1").value);
    let ej10_nro2= parseFloat (document.getElementById("ej10_n2").value);
    let ej10_resultados= parseFloat (document.getElementById("resultadoej10").value);
                
                      
    



}

