let pizzaToppingsData = [
  { "name": "Alfredo Sauce" },
  { "name": "Anchovy" },
  { "name": "Artichoke" },
  { "name": "Artichoke Hearts" },
  { "name": "Arugula" },
  { "name": "Asiago Cheese" },
  { "name": "Bacon" },
  { "name": "Banana Peppers" },
  { "name": "Barbecue (BBQ) Pulled Pork" },
  { "name": "Barbecue (BBQ) Sauce" },
  { "name": "Beef" },
  { "name": "Bell Pepper" },
  { "name": "Black Olives" },
  { "name": "Broccoli" },
  { "name": "Buffalo Chicken Strips" },
  { "name": "Buffalo Mozzarella" },
  { "name": "Canadian Bacon" },
  { "name": "Capers" },
  { "name": "Capicola" },
  { "name": "Capsicum" },
  { "name": "Caramelized Onions" },
  { "name": "Cherry Tomatoes" },
  { "name": "Chicken" },
  { "name": "Chorizo" },
  { "name": "Crab Meat" },
  { "name": "Crushed Red Pepper" },
  { "name": "Deep Dish Crust" },
  { "name": "Duck Meat" },
  { "name": "Egg" },
  { "name": "Eggplant" },
  { "name": "Feta Cheese" },
  { "name": "Friggitello (Pepperoncini)" },
  { "name": "Garlic" },
  { "name": "Gluten Free Crust" },
  { "name": "Goat Cheese" },
  { "name": "Gorgonzola Cheese" },
  { "name": "Green Bell Pepper" },
  { "name": "Green Olives" },
  { "name": "Gyro Meat" },
  { "name": "Habanero Peppers" },
  { "name": "Ham" },
  { "name": "Hamburger (Ground Beef)" },
  { "name": "Hot Dog" },
  { "name": "Hot Sauce" },
  { "name": "Italian Sausage" },
  { "name": "Italian Sweet Pepper" },
  { "name": "Jalapeño" },
  { "name": "Meatballs" },
  { "name": "Mozzarella" },
  { "name": "Mushroom" },
  { "name": "Olive Oil" },
  { "name": "Onion" },
  { "name": "Oregano" },
  { "name": "Parmiagiano-Teggiano" },
  { "name": "Pepperoni" },
  { "name": "Pesto" },
  { "name": "Pineapple" },
  { "name": "Pork" },
  { "name": "Prosciutto" },
  { "name": "Provolone Cheese" },
  { "name": "Ranch Dressing" },
  { "name": "Red Bell Pepper" },
  { "name": "Red Onion" },
  { "name": "Regular Crust" },
  { "name": "Ricotta Cheese" },
  { "name": "Salami" },
  { "name": "Sauerkraut" },
  { "name": "Sausage" },
  { "name": "Seafood" },
  { "name": "Shredded Barbecue (BBQ) Chicken" },
  { "name": "Shrimp" },
  { "name": "Spinach" },
  { "name": "Sun-Dried Tomatoes" },
  { "name": "Sweetcorn" },
  { "name": "Thin Crust" },
  { "name": "Tomato" },
  { "name": "Turkey Bacon" }
];

var selectedList = [];

function heighlightNextElement(elements){
  var i;
  for (i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hlight")) {
      elements[i].classList.remove("hlight");

      if (elements[i+1]) {
        elements[i+1].classList.add("hlight");
        break;
      } else {
        elements[0].classList.add("hlight");
      }
    }
  }
}

function heighlightPrvElement(elements){
  var i;
  for (i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hlight")) {
      elements[i].classList.remove("hlight");

      if (elements[i-1]) {
        elements[i-1].classList.add("hlight");
      } else {
        elements[elements.length - 1].classList.add("hlight");
        break;
      }
    }
  }
}

function hlightItem(item){
  var searchItemEle = document.getElementsByClassName("search-item");
  var hlightEle = document.getElementsByClassName("hlight");

  if(hlightEle.length > 0){
    hlightEle[0].classList.remove("hlight");
  }
  item.classList.add("hlight");
}

function highlight(e){
    var searchItemEle = document.getElementsByClassName("search-item");
    var hlightEle = document.getElementsByClassName("hlight");
    
    if (e.keyCode === 40) {

      if (hlightEle.length == 0) {
        searchItemEle[0].classList.add("hlight");
      } else {
        heighlightNextElement(searchItemEle);
      }

    } else if (e.keyCode === 38) {
        
      if (hlightEle.length == 0) {
        searchItemEle[searchItemEle.length - 1].classList.add("hlight");
      } else {
        heighlightPrvElement(searchItemEle);
      }

    } else if(e.keyCode || e.which) {

      if (hlightEle.length != 0) {
        addToSelectedList(hlightEle[0].innerHTML);       
      }

    }
}

function closeItem(ele, itemName){
    ele.parentNode.remove();
}

function addToSelectedList(itemName){
  if(selectedList.indexOf(itemName) == -1){
    selectedList.push(itemName);
    document.getElementById('selectedList').innerHTML = "";
    for (i = 0; i < selectedList.length; i++) {
      document.getElementById('selectedList').innerHTML = document.getElementById('selectedList').innerHTML + '<div class="selected-list-con"><div class="selected-list-item">' + selectedList[i] + '</div><div class="close" onclick="closeItem(this, \''+itemName+'\')">x</div><hr class="clear" /></div>';
    }
  }
  
  document.getElementById('searchedResults').innerHTML = "";
  document.getElementById('searchedResults').style.display = "none"; 
}

function searchPizzaToppings(event){
    const letter = event.key;
    const filteredpizzaToppings = pizzaToppingsData.filter(function(data) {
        if(data.name.includes(letter)){
          return data.name;
        }
     });

     if(filteredpizzaToppings && filteredpizzaToppings.length > 0){
        var searchedResultsEle = document.getElementById('searchedResults');

        filteredpizzaToppings.map((item, index) => {
          if(index == 0){
            if(searchedResultsEle.style.display == "" || searchedResultsEle.style.display == "none"){
              searchedResultsEle.style.display = "block";
            }
            searchedResultsEle.innerHTML = "";
          }
          
            searchedResultsEle.innerHTML += '<div class="search-item" onclick="addToSelectedList(\''+item.name+'\')" onmouseover="hlightItem(this)"><div>' + item.name + '</div></div>';
          
        });
     }
}
  