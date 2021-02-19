

function excuseGenerator(){

    //  aqui colocar los arrays que me serviran para extraer las partes  para forma mi nuevo array aleatorio

    let quien = ["Mi perro","Mi madre","Mi hermano","El gato","Un cocodrilo"]; 
    let accion = ["se robo", "se comió","quebro","quemo","corto"];
    let queCosa = ["la tarea","el libro","el computador","mi telefono"];
    let cuando = ["ayer","en la mañana","mientras yo dormia","anoche","el sabado"];
    
    // aqui creo una las variables , como ejemplo quienIdex esa variable se gaurda un numero aleatorio
    // resultado de la operacion math.random multiplicado por el largo del array quien (que se hace con array.length)
    // en este caso quien.length  asi nos da un numero aleatorio que esta entre los numeros del tamaño del array
    //  y asi seleccionar aleatoriamente cualquier elemento del array

    let quienIndex = Math.floor(Math.random()*quien.length);
    let accionIndex = Math.floor(Math.random()*accion.length);
    let queCosaIndex = Math.floor(Math.random()*queCosa.length);
    let cuandoIndex = Math.floor(Math.random()*cuando.length);
    

    // aqui retorno como salida de mi funcion un nuevo array compuesto por un elemneto aleatorio de cada array concatenado de una manera para
    //darle sentido a la oracion , cada elemento es ejemplo quien[quienIndex] seria primerArray[numero aleatorio genrado de alguna posicion dentro del primerArray]
    // y asi ese concatenado con el segundo y con el tercero y asi      
    return quien[quienIndex]+" "+accion[accionIndex]+" "+queCosa[queCosaIndex]+" "+cuando[cuandoIndex]
    
    }
    
    // aqui imprimo por pantalla  el resultado de llamar la funcion lo que me imprime el retur de la funcion
    console.log(excuseGenerator());

    // aqui creo una variable y guado el resultado de la funcion para luego usar eso para madarlo al html
    let excusa = excuseGenerator();

   
   // con esta linea se manda el resultado de la funcion al html
    document.getElementById("excusa").innerHTML = excusa