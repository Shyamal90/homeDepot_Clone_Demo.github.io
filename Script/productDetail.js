let data = JSON.parse(localStorage.getItem("product"));
console.log("data:",data)

let product=[]
product.push(data)
displayProduct(product)

function displayProduct(product){
    product.map((item)=>{
        let leftBox=document.querySelector(".leftBox")
      let heading=document.querySelector(".headingSection")
      let internet=document.getElementById("internet")
    let colorDiv=document.getElementById("colorDiv")
     var btnDiv = document.createElement("div");
    btnDiv.setAttribute("id", "btnDiv");

    var btn1 = document.createElement("img");
    btn1.setAttribute("src", item.colbtn1);
    var btn2 = document.createElement("img");
    btn2.setAttribute("src", item.colbtn2);
    btnDiv.append(btn1, btn2);
   
    colorDiv.append(btnDiv)

    
      let internetId=document.createElement("p")
      internetId.innerHTML=`Internet  #${item.id}`

      let modelNo=document.createElement("p")
      modelNo.innerHTML=`Model  #${item.model}`

      internet.append(internetId,modelNo)
      let manufacture=document.createElement("p")
      manufacture.setAttribute("id","manufacture")
      manufacture.innerHTML=`${item.manufacture}`;
      let name=document.createElement("p")
      name.textContent=item.name;
      let starsDiv=document.createElement("div")
        starsDiv.setAttribute("id","starsDiv")
        let starsIcon=document.createElement("div")
        starsIcon.setAttribute("id","starsIcon")
        starsIcon.innerHTML=`<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`
        let starsRated=document.createElement("p")
        starsRated.setAttribute("id","starsRated")
        starsRated.innerHTML=`(${item.stars})`
        let question=document.createElement("p")
        question.setAttribute("id","question")
        question.innerHTML=`<p style="color:#3e7697">Questions & Answers (6)</p>`
        starsDiv.append(starsIcon,starsRated,question)
      heading.append(manufacture,name,starsDiv)
       
      var prodImg = document.createElement("div");
    prodImg.setAttribute("id", "prodImg");
    var prodImgLeft = document.createElement("div");
    prodImgLeft.setAttribute("id", "prodImgLeft");
    var poster1 = document.createElement("img");
    poster1.setAttribute("src", item.poster1);

    // poster1.addEventListener("mouseover", function () {
    //   productMain.setAttribute("src", item.poster1);
    // });

    var poster2 = document.createElement("img");
    poster2.setAttribute("src", item.poster2);
    poster2.setAttribute("id", "poster2");

    // poster2.addEventListener("mouseover", function () {
    //   productMain.setAttribute("src", item.poster2);
    // });
    var poster3 = document.createElement("img");
    poster3.setAttribute("src", item.poster3);

    // poster3.addEventListener("mouseover", function () {
    //   productMain.setAttribute("src", item.poster3);
    // }); 

    prodImgLeft.append(poster1, poster2, poster3);
    var prodImgRight = document.createElement("div");
    var productMain = document.createElement("img");
    productMain.setAttribute("src", item.image);
    prodImgRight.setAttribute("id", "prodImgRight");
    prodImgRight.append(productMain);
    prodImg.append(prodImgLeft, prodImgRight);

    leftBox.append(prodImg)

   let priceTag=document.getElementById("priceTag")
  

   let price=document.createElement("div")
   price.setAttribute("id","itemPrice")
   price.innerHTML=`${item.price}`
   
   let totalsell=document.createElement("div")
   totalsell.setAttribute("id","itemTotalSell")
   totalsell.innerHTML=`<p style="text-decoration: line-through">$${item.totalSell}</p>`
   priceTag.append(price,totalsell)
    })
}