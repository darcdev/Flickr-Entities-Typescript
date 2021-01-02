/**
 * Null - Undefined
 */

//Null
//-----------
let nullVariable:null = null;
//  nullVariable = 1; // Error!

 let otherVariable = null;
// otherVariable = 'test'; // Error

console.log('nullVariable' , nullVariable);
console.log('otherVariable',  otherVariable);

// Undefined
//-----------

let undefinedVariable : undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
// otherVariable = '1'; // Error

// Null y Undefined : como subtipos
 

// --strictNullChecks

let albumName : string;
// albumName = null; // Error 
// albumName = undefined; // Error
