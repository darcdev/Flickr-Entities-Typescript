/**
 * Tuple
 */ 
 
 // [1,'diego']
 let userT : [number,string];
 userT = [1, 'luis'];

 console.log('user: ' , userT);


 // Array of tuples

 let userInfoT : [number, string][] = [];

 userInfoT.push([1,"diego"]);
 userInfoT.push([1,"andres"]);
 userInfoT.push([1,"pedro"]);

 console.log('userInfo' , userInfoT[0][1].length)