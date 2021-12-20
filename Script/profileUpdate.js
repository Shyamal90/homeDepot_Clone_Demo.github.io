let rdata=JSON.parse(localStorage.getItem("rdata")) || [];

console.log(rdata);
let email=rdata.email;
console.log(email);

if(rdata==null || rdata==undefined || email === undefined || rdata.length === 0){
    document.querySelector(".registrationBtn").style.display = "block";
    document.querySelector("#logOut").style.display = "none";
}else{
    document.querySelector("#myProfile").textContent = email;
    document.querySelector(".registrationBtn").style.display = "none";

    // for logout option
    document.querySelector("#logOut").style.display = "block";
    document.querySelector("#logOut").addEventListener("click",()=>{
        localStorage.removeItem("rdata");
        // rdata.splice(0,1);
        document.querySelector("#myProfile").textContent = "My Account";
        
        // window.location.reload();
    })
    
}