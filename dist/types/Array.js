/**
 * Array
 */
// explicit
//-----------
var users;
users = ['usl', 'parpar', 'lensqueen'];
//  users = [1 , true , 'test']; // Error
// inferido
//--------------
var otherUsers = ['luis', 'pedro'];
// otherUsers = [1,true,'test'] // Error
// Array<TIPO>
var pictureTitles;
pictureTitles = ['favorite seunse', 'vacation time'];
// accediendo
console.log('first user', pictureTitles[0]);
