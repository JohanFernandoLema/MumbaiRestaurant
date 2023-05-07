const meals = [
  {
    id:1,
    img: './Assets/images/meal1.png',
    name: 'the big chill cakery',
    desc: 'shop 1, plot d, samruddhi complex, chincholi',
    cusine: 'bakery',
    cost: 700,
  },
]
const itemsInformation = document.querySelector('.item-info');

window.addEventListener('DOMContentLoaded', ()=>{
    let displayMenu = meals.map((items)=>{
        return `<div class="picture">
        <img src=${items.img}>
        </div>
        <div class="item-desc">
        <h2>${items.name}</h2>
        <h4>FORT</h4>
        <p>${items.desc}</p>
        </div>  
        <h3>CUISINE:</h3>
        <span>${items.cusine}</span>
        <h3>COST FOR TWO:</h3>
        <span>₹${items.cost}</span>`;
    });
    displayMenu = displayMenu.join('');
    itemsInformation.innerHTML = displayMenu;
    console.log(displayMenu);
});