/**
 * Array
 */

 // explicit
 //-----------
 let users : string[];
 users = ['usl' , 'parpar' ,'lensqueen']
 //  users = [1 , true , 'test']; // Error

 // inferido
 //--------------

 let otherUsers = ['luis',  'pedro'];
 // otherUsers = [1,true,'test'] // Error

 // Array<TIPO>

 let pictureTitles : Array<string>;
 pictureTitles = ['favorite seunse' , 'vacation time'];

 // accediendo

 console.log('first user' , pictureTitles[0]) 
 