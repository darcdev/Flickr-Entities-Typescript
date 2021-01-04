/**
 * Never
 */

 function handleError(code : number , message : string) : never{
     
    // Process your code
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
 }
 try {
     handleError(404, 'Not Found');
 }
 catch{

 }

 function sumNumbers(limit : number) : never{
     let sum = 0;
     while(true){
         sum++;
     }
 }

 sumNumbers(10);