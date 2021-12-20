// document.querySelector("body").style.backgroundColor = "teal";

async function addProduct(){

    const productData = {
        id: document.querySelector("#id").value,
        name: document.querySelector("#name").value,
        desc:document.querySelector("#description").value,
        price: document.querySelector("#price").value,
        modelNo:document.querySelector("#modelNo").value,
        totalSell:document.querySelector("#totalSell").value,
        pickUp:document.querySelector("#pickUp").value,
        delivary:document.querySelector("#delivary").value,
        productImg:document.querySelector("#productImage").value

    }

    let url = `http://127.0.0.1:5000/api/products`;

    let response = await fetch(url,{
        method : "POST",
        body: JSON.stringify(productData),
        headers:{
            "Content-Type": "application/json"
        }
    });

    let data = await response.json();
    console.log(data);
}


async function deleteProduct(){
    const id = document.querySelector("#delete_id").value;

    let url = `http://127.0.0.1:5000/api/products/${id}`;

    let response = await fetch(url,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })

    let data = await response.json();
    console.log(data);
}


async function showData(){
    let url = `http://127.0.0.1:5000/api/products`;

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    // data.map((product)=>{
    //     // document.querySelector("tbody").innerHTML = "";
    //     // let tr = document.createElement("tr");

    //     // let product_name = document.createElement("td");
    //     // product_name.innerHTML = product.name;

    //     // let productPrice = document.createElement("td");
    //     // productPrice.innerHTML = product.price;

    //     // let updataBtn = document.createElement("button");
    //     // updataBtn.innerHTML = "Updata";
    //     // updataBtn.addEventListener("click",function(){
    //     //     localStorage.setItem("productData",JSON.stringify(product));
            
    //     // })

    //     tr.append(product_name,productPrice,updataBtn);
    //     document.querySelector("tbody").append(tr);
    // })
}