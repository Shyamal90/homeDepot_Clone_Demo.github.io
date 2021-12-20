let flagg = true;
document.querySelector("#allDepartment").addEventListener("click",()=>{
    if(flagg === true){
        document.querySelector(".allDepartment_list").style.display = "block";
        flagg = false;
    }else{
        document.querySelector(".allDepartment_list").style.display = "none";
        flagg = true;
    }
})

// window.onload = function(){
//     let box = document.querySelector("#allDepartment");
//     box.addEventListener("click",()=>{
//         showBox();
//     });
// }

// let showBox = ()=>{
//     // console.log("clicked");
//     if(flagg === true){
//         document.querySelector(".allDepartment_list").style.display = "block";
//         flagg = false; 
//     }else{
//         document.querySelector(".allDepartment_list").style.display = "none";
//         flagg = true;
//     }

    
// }