let products = [];
let errorMessage = '<p class="text-dark" >Network error please try later !!</p>'
let loaderContainer = document.querySelector('.loader-container')
let productContainer = document.getElementById('productContainer')
async function getProducts(){
    try {
        let response = await fetch(`https://fakestoreapi.com/products`)
        products = await response.json();
        displayData();
    } catch(err) {
        loaderContainer.classList.add('dis-none');
        productContainer.classList.remove("dis-none")
        productContainer.innerHTML = errorMessage;

    }
    
}

getProducts();

function displayData(){
    let content = ``
    loaderContainer.classList.add("dis-none")
    productContainer.classList.remove("dis-none")
    for (var i = 0 ; i < products.length  ; i ++){
        content += `<div class="box">

        
          <div class="image">
            <img src="${products[i].image}" alt="" srcset="">
        </div>
        <div>
          <h3 class="product-title">${products[i].title}</h3>
          <h4 class="product-price py-2">Price: ${products[i].price}$</h4>
          <h5 class="product-rate">Rating: ${products[i].rating.rate}</h5>
        </div>
        
          <a class = "my-btn" href=""><button> Buy Now</button></a>
          
       
      </div>`
    }
    productContainer.innerHTML = content
}
// if(!products){

// }