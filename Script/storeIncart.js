let cartBtn = document.querySelector("#cartBtn");
let cartStore = JSON.parse(localStorage.getItem("cartData")) || [];

cartBtn.addEventListener("click",()=>{
    let data = JSON.parse(localStorage.getItem("product"));
    cartStore.push(data);
    localStorage.setItem("cartData",JSON.stringify(cartStore));
})

