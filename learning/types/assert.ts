/**
 * Assert
 */

 // <tipo> // Angle bracket

let username : any;
username =  'diego'

let message : string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is too short';


let usernameWithId : any = 'diegorojas 1';
// obtener el username
username = (<string> usernameWithId).substring(10);

console.log('username only',  username);

// Sintaxis "as"

message = (username as string).length > 5 ? `Welcome ${username}` : 'Username is too short';

let helloUser  : any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);

export = {};