 // Use insert() function to insert the number in textview. 
 const input=document.getElementById("input"); 
function insert(num)   
{  
 input.value += num;  
}  
  
// Use equal() function to return the result based on passed values.  
function equal()  
{  
var exp = input.value;  
if(exp)  
{  
input.value = eval(exp) ; 
}  
}  
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
function backspace()  
{  
var exp = input.value;  
input.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
 function fullspace()
 {
    input.value="";
 } 