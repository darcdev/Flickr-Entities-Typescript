/**
 * Any
 */

 // ### usarlo solo como ultima instancia , si no se puede usar los demas

 // Explicito
 //-----------

 let idUser:any;
 idUser = 1;  //number;
 idUser = '1'; //String;

 // Inferido
 //----------

 let otherId;
 otherId = 1;
 otherId = '1';

let surprise : any = 'hello ts';
let res = surprise.substring(6); // Posible error si cambia el tipo de surprise

