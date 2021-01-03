// kaise ho

var cakeList = [
  { name: "cake-1", type: "cake", price: 5 },
  { name: "cake-2", type: "cake", price: 10 },
  { name: "cake-3", type: "cake", price: 15 },
  { name: "cupcake-1", type: "cupcake", price: 5 },
  { name: "cupcake-2", type: "cupcake", price: 10 },
  { name: "cupcake-3", type: "cupcake", price: 15 },
  { name: "doughnut-1", type: "doughnut", price: 5 },
  { name: "doughnut-2", type: "doughnut", price: 15 },
  { name: "doughnut-3", type: "doughnut", price: 5 },
  { name: "sweets-1", type: "sweet", price: 5 },
  { name: "sweets-2", type: "sweet", price: 15 },
  { name: "sweets-3", type: "sweet", price: 50 },
];
// debugger;
let cakeDabba = document.querySelector(".boxThree__childFour");
function myFunction() {}
var html = "";
function cakeFunction(element, index, array) {
  // console.log(index);

  html += `<li>
  <div class="card">
    <div class="card__image">
      <img src="./img/${element.name}.jpeg" yaha picture aayega " />
      <span class="store-item-icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
    </div>

    <div class="card__title">
      <p>${element.type}</p>
      <p>${element.price}Rs</p>
    </div>
  </div>
</li>`;
}
// console.log(cakeFunction);
cakeList.forEach(cakeFunction);
// console.log(html);
cakeDabba.innerHTML = `<ul>${html}</ul>`;
function sortFunction(xray) {
  // console.log(xray);
  // console.log(xray.target.innerHTML);
  let alpha = cakeList.filter((element) => {
    // console.log(element.type + "s");
    // console.log(xray.target.innerHTML);

    return (
      (element.type + "s").toLowerCase() == xray.target.innerHTML.toLowerCase()
    );
  });
  // console.log(alpha);
  html = "";
  alpha.forEach(cakeFunction);
  cakeDabba.innerHTML = `<ul>${html}</ul>`;
}
document.querySelector("#cakes").addEventListener("click", sortFunction);
document.querySelector("#cupcakes").addEventListener("click", sortFunction);
document.querySelector("#sweets").addEventListener("click", sortFunction);
document.querySelector("#doughnuts").addEventListener("click", sortFunction);
document.querySelector("#all").addEventListener("click", () => {
  html = "";
  cakeList.forEach(cakeFunction);
  cakeDabba.innerHTML = `<ul>${html}</ul>`;
});
document
  .querySelector(".boxThree__childThree")
  .addEventListener("keyup", (xray) => {
    // console.log(xray.target.value);
    let beta = cakeList.filter((element) => {
      return element.name.includes(xray.target.value);
    });
    console.log(beta);
    html = "";
    beta.forEach(cakeFunction);
    cakeDabba.innerHTML = `<ul>${html}</ul>`;
  });
