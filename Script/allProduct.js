
let productsData = JSON.parse(localStorage.getItem("products")); 
displayData(productsData);

document.querySelector("#sortEl").addEventListener("change",()=>{
    let value = document.querySelector("#sortEl").value;
    console.log(value);


    if(value === "low"){
        // console.log("hi");
        let newArr = productsData.sort((a,b)=>{
            return a.price - b.price;
        })
        // console.log(newArr);
        displayData(newArr);
    }else if(value === "high"){
        // console.log("hello");
        let newArr = productsData.sort((a,b)=>{
            return b.price - a.price;
        })
        // console.log(newArr);
        displayData(newArr);
    }else if(value === "bestMatch"){
        displayData(productsData);
    }
})




function displayData(productArr){
    document.querySelector(".product-container").innerHTML = "";
    productArr.map((productData)=>{

        // 
        let product = document.createElement("div");
        product.setAttribute("class","product");
        
        let img = document.createElement("img");
        img.setAttribute("class","productImg")
        img.setAttribute("src",productData.image);
        
        // Heart Logo Design
        
        
        let heartLogo = document.createElement("img");
        heartLogo.setAttribute("class","heartLogo");
        heartLogo.setAttribute("src","https://assets.thdstatic.com/images/v1/favorite_default.svg");
        
        let color_container = document.createElement("div");
        color_container.setAttribute("class","color_container");
        
        let firstBox = document.createElement("div");
        firstBox.setAttribute("class","firstBox");
        
        let secondBox = document.createElement("div");
        secondBox.setAttribute("class","secondBox");
        
        color_container.append(firstBox,secondBox);
        
        
        let title = document.createElement("h3");
        title.setAttribute("class","title");
        title.innerHTML = productData.name;
        
        // Model Number
        
        let modelNo = document.createElement("p");
        modelNo.setAttribute("class","modelNo");
        modelNo.innerHTML = "Model#" + productData.model;
        // console.log(product.model);
        
        // Rating star
        let rating_div = document.createElement("div");
        rating_div.setAttribute("class","rating_div");
        
        let stars = document.createElement("p");
        stars.setAttribute("class","stars");
        stars.innerHTML = `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
        
        
        
        // total rating 
        
        let ratingCount = document.createElement("p");
        ratingCount.setAttribute("class","ratingCount");
        ratingCount.innerHTML = "(" + productData.stars + ")";
        
        rating_div.append(stars,ratingCount);
        
        
        // Price Section
        
        let price = document.createElement("h4");
        price.setAttribute("class","price");
        price.innerHTML = "$" + productData.price;
        
        let priceLogo = document.createElement("img");
        priceLogo.setAttribute("class","priceLogo");
        priceLogo.setAttribute("src","	https://assets.thdstatic.com/images/v1/Value-Pricing-Special-Buy.svg");
        
        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class","priceDiv");
        priceDiv.append(priceLogo,price);
        
        // let descrip = document.createElement("p");
        // descrip.setAttribute("class","descrip");
        // descrip.innerHTML = productData.description;
        
        // PickUp Section
        let pickUp = document.createElement("div");
        pickUp.setAttribute("class","pickUp");
        
        let crossImg = document.createElement("img");
        crossImg.setAttribute("class","crossImg");
        crossImg.setAttribute("src","https://assets.thdstatic.com/images/v1/close-x-black.svg");
        
        let pickUpDiv = document.createElement("div");
        pickUpDiv.setAttribute("class","pickUpDiv");
        pickUpDiv.innerHTML = `<span class="pickupHeading">Pickup</span>` + productData.pickUp;
        
        pickUp.append(crossImg,pickUpDiv);
        
        
        // Delivery Section
        let deliveryDiv = document.createElement("div");
        deliveryDiv.setAttribute("class","deliveryContainer");
        
        let anotherCross = document.createElement("img");
        anotherCross.setAttribute("class","anotherCross");
        anotherCross.setAttribute("src","https://assets.thdstatic.com/images/v1/close-x-black.svg");
        
        let deliveryHeading = document.createElement("div");
        deliveryHeading.setAttribute("class","Heading");
        deliveryHeading.innerHTML = `<span class="deliveryheading">Delivery</span>` + productData.delivery;
        
        deliveryDiv.append(anotherCross,deliveryHeading)
        
        
        // Add to Cart Button
        
        let addToCartBtn = document.createElement("button");
        addToCartBtn.setAttribute("class","addToCartBtn");
        addToCartBtn.innerHTML = "Add to Cart";
        addToCartBtn.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(productData));
            window.location.href = "../main/productDetails.html";
        })
        // hover effect
        // product.addEventListener("mouseover",()=>{
        //     addToCartBtn.style.display="block";
        // })
        
        // product.addEventListener("mouseleave",()=>{
        //     addToCartBtn.style.display="none";
        // })
        
        product.append(img,heartLogo,color_container,title,modelNo,rating_div,priceDiv,pickUp,deliveryDiv,addToCartBtn);
        document.querySelector(".product-container").append(product);
        })
}




