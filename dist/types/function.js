"use strict";
// Crear una Fotografia
// usar typescript , definir tipos para parametros
// function createPicture(title : string , date : string ,  size : SquareSize){
//     // Se crea la fotografia
//     console.log('create picture using' ,  title , date , size);
// }
// createPicture('my birthday' , '2020-03-10',  '100x100');
// createPicture('Colombia Trip' , '2020-03-11');
// Parametros opcionales
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create picture using', title, date, size);
}
createPicture('my birthday', '2020-03-10', '100x100');
createPicture('Colombia Trip', '2020-03-11');
// Fat array function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
module.exports = {};
