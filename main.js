var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

for( let i = 0 ; i < pronoun.length; i++ ){
    for(let a = 0; a <adj.length;a++){
        for(let b=0;b<noun.length;b++){

            //Crea una variable que contiene la cadena de texto
             let contenedorTexto = document.createTextNode(`${pronoun[i]}${adj[a]}${noun[b]}.com`);
            // Crea una variable que crea un nuevo elemento "li"
             let newLi = document.createElement("li");
            
            // Crea una funcion que busca al identificador 
             let searchInsertar = document.getElementById("insertar");
             //
             searchInsertar.appendChild(newLi);
             newLi.appendChild(contenedorTexto);
            
        }
    }
}