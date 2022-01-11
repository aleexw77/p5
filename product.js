const product  = window.location.search.split("?").join("");
console.log(product);

let productData = [];

const fetchProduct = async () => {
    await fetch(`http://localhost:3000/api/products/${product}`)
    .then((res) => res.json())
    .then((promise) => {
        productData = promise
        console.log(productData);
    });
    
};

const productDisplay = async  () => {
    await fetchProduct();

 const img = document.querySelector('.item__img');

 img.innerHTML = 
 `
 <img src="${productData.imageUrl}" alt="Photographie d'un canapé">
 `
  document.getElementById("title").innerHTML = 
 `
 <h1>${productData.name}</h1>
 
 `
document.getElementById("price").innerHTML =
`
<p> ${productData.price}</p>
`
document.getElementById("description").innerHTML =

`
<p>${productData.description}</p>
`
;

 let select = document.getElementById("colors");
 console.log(select);

 console.log(productData.colors);

productData.colors.forEach((teinte) => {
    console.log(teinte);
    let createoption = document.createElement("option");

    createoption.innerHTML = `${teinte}`;
    createoption.value = `${teinte}`;

    select.appendChild(createoption);
    console.log(createoption);
});

addProduct(productData);

};


productDisplay();


const addProduct = () => {
    let button = document.getElementById("addToCart");
    button.addEventListener("click", () => {
       let productTatbleau = JSON.parse(localStorage.getItem("produit"));
       let select = document.getElementById("colors");
       console.log(productTatbleau);

       const fusionproductColors = Object.assign( {} , productData,  {
           colors: `${select.value}`,
           quantite:1,
       });

       console.log(fusionproductColors);

       if(productTatbleau == null) {
           productTatbleau = []
           productTatbleau.push(fusionproductColors);
           console.log(productTatbleau);
           localStorage.setItem("produit", JSON.stringify(productTatbleau));
       }
    });
};






