

function excuseGenerator(){

    let quien = ["Mi perro","Mi madre","Mi hermano","El gato","Un cocodrilo"];
    let accion = ["se robo", "se comió","quebro","quemo","corto"];
    let queCosa = ["la tarea","el libro","el computador","mi telefono"];
    let cuando = ["ayer","en la mañana","mientras yo dormia","anoche","el sabado"];
    
    
    let quienIndex = Math.floor(Math.random()*quien.length);
    let accionIndex = Math.floor(Math.random()*accion.length);
    let queCosaIndex = Math.floor(Math.random()*queCosa.length);
    let cuandoIndex = Math.floor(Math.random()*cuando.length);
    
    
    
    return quien[quienIndex]+" "+accion[accionIndex]+" "+queCosa[queCosaIndex]+" "+cuando[cuandoIndex]
    
    }
    
    console.log(excuseGenerator());
    let excusa = excuseGenerator();

   
   
    document.getElementById("excusa").innerHTML = excusa