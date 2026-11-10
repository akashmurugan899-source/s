// ...existing code...
(function(){
    // ...existing code...
    const api = document.querySelector(".api");
    if (!api) return;

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(c => {
                let card = document.createElement("div");

                card.innerHTML = `
                    <h3>${c.title}</h3>
                    <img src="${c.image}" width="150">
                    <p>Price: $${c.price}</p>
                    <p>Category: ${c.category}</p>
                    <p>Rating: ${c.rating.rate}</p>
                `;

                api.append(card);
            });
        });

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(c => {
                let product = document.createElement("div");

                product.innerHTML = `
                    <h3>Title: ${c.title}</h3>
                    <p>Description: ${c.description.slice(0, 50)}</p>
                    <p>Price: $${c.price}</p>
                `;

                api.append(product);
            });
        });
    // ...existing code...
})();