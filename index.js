// // Will need an async function to handle fetching data from database
// // else, the loops will not work and products will not display.
// async function readyProducts() {
//   const data = await fetch(/*product database*/);
//   handleData(data)
// }
const data = [
  {
    productID: "124983501235",
    name: "Standard",
    description:
      "Blah blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah",
    price: "$399.99",
    colors: ["Green", "Blue", "Red"]
  },
  {
    productID: "350u11235091",
    name: "Deluxe",
    description:
      "Blah blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah",
    price: "$449.99",
    colors: ["Red", "Green", "Blue", "Yellow", "Orange", "Pink", "White"]
  }
];

const productList = document.querySelector(".productList");
data.forEach(product => {
  let colors = "";
  product.colors.forEach(
    color =>
      (colors += `<div class="color" data-color="${color}" style="background:${color};"></div>`)
  );
  productList.innerHTML += `
    <div class="product">
      <div class="image-placeholder" style="background:${
        product.colors[0]
      }"></div>
      <div class="details">
        <h3 class="name">${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="price">${product.price}</p>
        <ul class="color-list">${colors}</ul>
      </div>
    <div>
  `;
});

const products = document.querySelectorAll(".product");
products.forEach(product => product.addEventListener("click", changeColor));

function changeColor(e) {
  // img will need to be swapped out for an image source
  const img = this.querySelector(".image-placeholder");
  if (e.target.dataset.color) {
    img.style.background = `${e.target.dataset.color}`;
  }
}
