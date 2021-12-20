let fllag = true;
document.querySelector(".deliveryBtn").addEventListener("click",()=>{
    if(fllag === true){
        document.querySelector(".deliveryResult").style.display = "block";
        fllag = false;
    }else{
        document.querySelector(".deliveryResult").style.display = "none";
        fllag = true;
    }
})