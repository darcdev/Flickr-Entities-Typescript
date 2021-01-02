/**
 * Any
 */
// ### usarlo solo como ultima instancia , si no se puede usar los demas
// Explicito
//-----------
var idUser;
idUser = 1; //number;
idUser = '1'; //String;
// Inferido
//----------
var otherId;
otherId = 1;
otherId = '1';
var surprise = 'hello ts';
var res = surprise.substring(6); // Posible error si cambia el tipo de surprise
