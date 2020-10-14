
/*function click(evt){
    evt.preventDefault();
    const button=document.getElementById("name");
   if( button.value.length<10)
       {
           let newspan=document.createElement("span");
           newspan.textContent="Name Must Be Greater Than Two Character";
           newspan.style.cssText="color:red;";
           document.body.appendChild(newspan);
          
           
       }
    
    
}*/
function check(){
    
    document.querySelector("#a").style.backgroundColor="green";
    alert("#a IS Clicked!!");
    document.querySelector("#a").style.cssText="background-color:green;width:200px;";
}
document.addEventListener( "click", check) ;
//document.addEventListener("click",click);

    