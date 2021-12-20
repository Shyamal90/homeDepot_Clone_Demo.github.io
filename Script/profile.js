let flaag = true;
document.querySelector("#myAccount").addEventListener("click",()=>{
    if(flaag === true){
        document.querySelector(".registerform").style.display = "block";
        flaag = false;
    }else{
        document.querySelector(".registerform").style.display = "none";
        flaag = true;
    }
})