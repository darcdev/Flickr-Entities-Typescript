/**
 * Void
 */
// ### Ausencia de valor --> funciones no retornan valor
// explicit
//-----------
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola'
}
showInfo({ id: 1, username: 'diego', firstName: 'andres' });
// inferido
//-----------
function showFormattedInfo(user) {
    console.log('User Info', "\n        id : " + user.id + "\n        username : " + user.username + "\n        firstName : " + user.firstName + "\n     ");
}
showFormattedInfo({ id: 1, username: 'diego', firstName: 'andres' });
// such as type
var unusable;
// unusable = null; // Error Strict Null Check
unusable = undefined;
