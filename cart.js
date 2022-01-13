let addProduct = JSON.parse(localStorage.getItem("produit"));

console.log(addProduct);


const basketDisplay = async () => {
    if (addProduct) {
        await addProduct;
        console.log(addProduct);
    }
  

}

let innerSection = document.getElementById("cart__items");

innerSection.innerHTML = addProduct.map((produit) => `
<article class="cart__item" data-id="${produit._id}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="${produit.imageUrl}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${produit.name}</h2>
                    <p>${produit.colors}</p>
                    <p>${produit.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>  </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> `

)



basketDisplay();