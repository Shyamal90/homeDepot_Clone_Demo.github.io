let cartStore = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(cartStore);
let totalAmount = 0;

 function displayData(cartStore){
    document.querySelector(".cartWrapper").innerHTML = ""; 
    cartStore.map((product,index)=>{
        console.log(product);
        let productContainer = document.createElement("div");
        productContainer.setAttribute("class","productContainer");


        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class","imageContainer");

        let productImg = document.createElement("img");
        productImg.setAttribute("class","productImg");
        productImg.setAttribute("src",product.image);

        imageContainer.append(productImg);

        let productDetailContainer = document.createElement("div");
        productDetailContainer.setAttribute("class","productDetailContainer");

        let box1 = document.createElement("div");
        box1.setAttribute("class","box1");

        let productName = document.createElement("h4");
        productName.setAttribute("class","productName");
        productName.innerHTML = product.name;

        let productPrice = document.createElement("p");
        productPrice.setAttribute("class","productPrice");
        productPrice.innerHTML = Number(product.price).toFixed(2);

        box1.append(productName,productPrice);

        let box2 = document.createElement("div");
        box2.setAttribute("class","box2");

        let productModelNo = document.createElement("p");
        productModelNo.setAttribute("class","productModelNo");
        productModelNo.innerHTML = "Model #" + product.model;

        box2.append(productModelNo);

        let box3 = document.createElement("div");
        box3.setAttribute("class","box3");

        let pickupBox = document.createElement("div");
        pickupBox.setAttribute("class","pickupBox");
        pickupBox.innerHTML=`<img src="https://www.homedepot.com/mycart/assets/svg/pick-up-false-store-card.svg"> 
        <p>Store Pick up</p>`
        let homeShipBox = document.createElement("div");
        homeShipBox.setAttribute("class","homeShipBox");
        homeShipBox.innerHTML=`<img style="width:20%"src="https://www.homedepot.com/mycart/assets/svg/delivery-true-card.svg"> 
        <p>Ship To Home</p>
        <p>Estimated Arrival</p>
        <p>Dec 23- Dec 28</p>
        <h5>FREE</h5>`
        let deliveryBox = document.createElement("div");
        deliveryBox.setAttribute("class","deliveryBox");
         deliveryBox.innerHTML=`<img src="https://www.homedepot.com/mycart/assets/svg/express-false-card.svg">
         <p>Scheduled Delivery</p>
         <p>Not Available for this</p>
         <p>item</p>`
        box3.append(pickupBox,homeShipBox,deliveryBox);

        let box4 = document.createElement("div");
        box4.setAttribute("class","box4");

        let saveForLater = document.createElement("p");
        saveForLater.setAttribute("class","saveForLater");
        saveForLater.innerHTML = "Save for Later  |";

        let saveForFavorites = document.createElement("p");
        saveForFavorites.setAttribute("class","saveForFavorites");
        saveForFavorites.innerHTML = "Save to Favorites  |";

        let removeItem = document.createElement("button");
        removeItem.setAttribute("class","removeItem");
        removeItem.innerHTML = "Remove";
        removeItem.addEventListener("click",()=>{
            deleteItem(index);
        })

        // Count total price
        totalAmount += Number(product.price);
        // totalAmount = totalAmount.toFixed(2);
        console.log(totalAmount);

        localStorage.setItem("totalAmt", JSON.stringify(totalAmount));

        // show Price
        document.querySelector("#priceEl").innerHTML ="$" + totalAmount.toFixed(2);
        let newAmmount = (totalAmount - 13.99).toFixed(2);
        document.querySelector("#totalAmt").innerHTML = "$" + newAmmount;

        // saving element functionality
        if(totalAmount > 0){
            document.querySelector("#savingEl").innerHTML = "-$13.99";
        }else{
            document.querySelector("#savingEl").innerHTML = "-$0.00";
            location.reload();
        }

        box4.append(saveForLater,saveForFavorites,removeItem);
        productDetailContainer.append(box1,box2,box3,box4);
        productContainer.append(imageContainer,productDetailContainer)
        document.querySelector(".cartWrapper").append(productContainer);
    })
 }
   
    window.addEventListener("load",function(){
        displayData(cartStore);
    })

    function deleteItem(index){
        console.log(index);

        cartStore.splice(index,1);

        localStorage.setItem("cartData",JSON.stringify(cartStore));
        displayData(cartStore);
        totalAmount = 0;
    }