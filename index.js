const addItemText = document.getElementById("js-shopping-list-entry"),
      shoppingList = document.getElementById("shopping-list"),
      checkButtons = document.getElementsByClassName("shopping-item-toggle");


//contains list DOM
const data = [];


//create template
    let createTemplate = (itemName) => {
      const id = data.length;
      return `
      <li id='${id}'>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label" onclick='checkItem(${id})'>check</span>
        </button>
        <button class="shopping-item-delete" onclick='removeItem(${id})'>
        delete
        </button>
        </div>
      </li>`
    }

//reset the shoppingList DOM and render data
const renderDataToHTML = () => {
  //reset the Shoppinglist dom
  shoppingList.innerHTML = ''
  //for loop the data and add to shopping list
  data.map(value => shoppingList.insertAdjacentHTML('beforeend', value))
}

//add item to shopping list dom
const addItemToShoppingList = item => shoppingList.insertAdjacentHTML('beforeend', item)



//remove data
const removeItem = (id) => {
  //remove clicked item from data
  data.splice(id,1);
  //for loop the data and render on HTML
  renderDataToHTML();
}


//add data
const addItem = () => {
  let item = createTemplate(addItemText.value);
  data.push(item);
  addItemText.value = '';
  addItemToShoppingList(item);
}

//toggle data
const checkItem = (id) => {
  const li = document.getElementById(id);
  const span = li.children[0];
  span.classList.toggle('shopping-item__checked')
}
