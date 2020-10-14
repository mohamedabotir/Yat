
function check(){
    
    var ss=document.forms["reg"]["your-name"].value;
    if(ss.length<10)
    {
        document.getElementById("error-name").innerHTML="<span style=color:red;>Name Must Be At least 10 character</span>";
    return false;
    }
    
}