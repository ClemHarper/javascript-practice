// add state to track number of items
let numberOfItems = 0;

//step 1 - grab the element from the DOM
const soda = document.getElementById('soda');

//step 2 - add an event listener
soda.addEventListener('click', () => {
    console.log('clicking');
    //step 3 - adding the classname
    soda.classList.toggle('picked');
    if (soda.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        // if no -- decrement number o fitems
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

cheese.addEventListener('click', () => {
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
    console.log('clicking');
    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

bread.addEventListener('click', () => {
    console.log('clicking');
    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

watermelon.addEventListener('click', () => {
    console.log('clicking');
    watermelon.classList.toggle('picked');
    if (watermelon.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});
