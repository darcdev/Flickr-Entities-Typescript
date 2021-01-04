/**
 * String
 */

 //Explicito
 //----------

 let username : string = 'luixavailes';
 username = 'diego';
//  username =  true // Error tipo

// Template String
// -----------------

// Uso Back-tick `

let userInfo : string ;
userInfo = `
   User Info : 
    username : ${username}
    firstName : ${username + 'rojas'}
    phone : ${phone}
    isPro  : ${isPro}
    `;

console.log('UserInfo: ', userInfo)