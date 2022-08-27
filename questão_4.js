const LuidyMoura = (NumeroLimite) => {

    let listaRetorno = []
 
    for( let n = 1; n <= NumeroLimite; n++){
         
        if(n % 45 == 0){
            listaRetorno.push("LuidyMoura");
 
         }
 
         else if(n % 5 == 0){
            listaRetorno.push("Luidy");
 
         }
 
         else if (n % 9 == 0){
            listaRetorno.push("Moura");
 
         } else
            listaRetorno.push(n);
 
         }
 
    }
 
    return (listaRetorno)
 
 