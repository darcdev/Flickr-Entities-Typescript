/**
 * Enum
 */

// Orientacion para Fotografia

//''js
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;


enum PhotoOrientation {
    Landscape = 0, //0
    Portrait = 1,  //1
    Square = 2,    //2
    Panorama = 3   //3
}

const landscape : PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape',  landscape);
console.log('Landscape' , PhotoOrientation[0])

enum PictureOrientation {
    Landscape = 10, 
    Portrait,
    Square, 
    Panorama  
}

console.log('portrait' , PictureOrientation.Portrait);


enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EUU = 'usa',
    Espana = 'esp'
}

const country : Country = Country.Bolivia;

console.log('country' , country);


