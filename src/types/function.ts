// Crear una Fotografia

// function createPicture(title , date, size){
//    // title
// }

type SquareSize = '100x100' | '500x500'  | '1000x1000';

// usar typescript , definir tipos para parametros

// function createPicture(title : string , date : string ,  size : SquareSize){
//     // Se crea la fotografia
//     console.log('create picture using' ,  title , date , size);
// }

// createPicture('my birthday' , '2020-03-10',  '100x100');
// createPicture('Colombia Trip' , '2020-03-11');

// Parametros opcionales

function createPicture(title? : string , date? : string ,  size? : SquareSize){
    // Se crea la fotografia
    console.log('create picture using' ,  title , date , size);
}

createPicture('my birthday' , '2020-03-10',  '100x100');
createPicture('Colombia Trip' , '2020-03-11');


// Fat array function

let createPic = (title : string , date : string , size : SquareSize) : object => {
    return {
        title,
        date,
        size
    }
}

const picture = createPic('platzi session' , '2020-03-10' , '100x100');
console.log('picture' , picture);

export = {}