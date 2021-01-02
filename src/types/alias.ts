// 10 , '10'
type IdUser = number | string;
type Username = string;

let idUserU : IdUser  ;
idUserU = 10;
idUserU = '10';


// Buscar username dado un ID

function getUsernameById(id : IdUser) : Username{
    //Logica de negocio , encontrar usuario
    return "diego";
}

getUsernameById(20);
getUsernameById('20');