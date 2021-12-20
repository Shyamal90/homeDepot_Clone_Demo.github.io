let f = true;
document.querySelector(".homebtn").addEventListener("click",()=>{
    if(f === true){
        document.querySelector(".GotoHomepage").style.display = "block";
        f = false;
    }else{
        document.querySelector(".GotoHomepage").style.display = "none";
        f = true;
    }
})