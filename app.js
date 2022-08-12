// add state to track number of items
let numberOfItems = 0;

//step 1 - grab the element from the DOM
const spin = document.getElementById('spin');
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');
const menu = [soda, cheese, grapes, bread, watermelon];

//step 2 - add an event listener
spin.addEventListener('click', handleSpin);

function handleSpin() {
    const randomNum = Math.floor(Math.random() * menu.length);
    const randomMenu = menu[randomNum];
    if (numberOfItems === 3) return;
    if (!randomMenu.classList.contains('picked')) {
        randomMenu.classList.add('picked');
        numberOfItems++;
        items.textContent = numberOfItems;
    } else {
        handleSpin();
    }
}

soda.addEventListener('click', () => {
    if (!soda.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    //step 3 - adding the class name
    soda.classList.toggle('picked');
    if (soda.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        // if no -- decrement number of items
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

cheese.addEventListener('click', () => {
    if (!cheese.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

grapes.addEventListener('click', () => {
    if (!grapes.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

bread.addEventListener('click', () => {
    if (!bread.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

watermelon.addEventListener('click', () => {
    if (!watermelon.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    watermelon.classList.toggle('picked');
    if (watermelon.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});
