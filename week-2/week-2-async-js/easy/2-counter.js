let i =0;
function counter(){
              
               i++;
               console.log(i);
               setTimeout(()=>{
                             
                     counter();  
                     
               },1000)
}
counter();