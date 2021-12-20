let flag = true;
document.querySelector(".currentLocationBtn").addEventListener("click",()=>{
    if(flag === true){
        document.querySelector(".findLocationResult").style.display = "block";
        flag = false;
    }else{
        document.querySelector(".findLocationResult").style.display = "none";
        flag = true;
    }
})

// window.onload = function(){
//     let box = document.querySelector(".currentLocationBtn");
//     box.addEventListener("click",()=>{
//         showwBox();
//     });
// }

// let showwBox = ()=>{
//     console.log("clicked");
//     if(flag === true){
//         document.querySelector(".findLocationResult").style.display = "block";
//         flag = false; 
//     }else{
//         document.querySelector(".findLocationResult").style.display = "none";
//         flag = true;
//     }

    
// }