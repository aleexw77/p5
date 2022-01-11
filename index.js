let kanapData = [];

const fetchKanap = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        kanapData = promise;
        console.log(kanapData);
    });
};

const kanapDisplay = async () => {
    await fetchKanap();

document.getElementById("items").innerHTML = kanapData.map((use) => 



 `<a href="./product.html?${use._id}">
<article>
<img src="${use.imageUrl}"alt="${use.altTxt}">
<h3 class="productName">${use.name}</h3>
<p class="productDescription">${use.description}</p>
</article> 

`

).join("");




};




kanapDisplay();
