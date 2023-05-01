const zero=document.querySelector(".Zero");
let currentvalue=0;
const btndecrement=document.querySelector(".Decrement");
const btnreset=document.querySelector(".Reset");
const btnincrement=document.querySelector(".Increment");


btnincrement.addEventListener('click',main)
 function main(){
    currentvalue++;
    zero.textContent=currentvalue;
 }

  btndecrement.addEventListener('click',abc)
  function abc(){    
    currentvalue--;
     zero.textContent=currentvalue;
 }
 btnreset.addEventListener('click',efg)
function efg(){
      currentvalue=0;
   zero.textContent=currentvalue;
 }