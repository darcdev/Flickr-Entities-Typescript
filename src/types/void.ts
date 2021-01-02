/**
 * Void
 */

 // ### Ausencia de valor --> funciones no retornan valor

// explicit
//-----------
function showInfo(user : any) : any {
    console.log('User Info' , user.id , user.username, user.firstName); 
    // return 'hola'
}

showInfo({id : 1 , username : 'diego' , firstName : 'andres'})


// inferido
//-----------

function showFormattedInfo(user : any){
    console.log('User Info' , `
        id : ${user.id}
        username : ${user.username}
        firstName : ${user.firstName}
     `)
}

showFormattedInfo({id : 1 , username : 'diego' , firstName : 'andres'})

// such as type

let unusable : void;
// unusable = null; // Error Strict Null Check
unusable = undefined;