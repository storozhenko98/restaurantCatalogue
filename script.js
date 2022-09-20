//DOM Constants
const adderButton = document.getElementById("adder");
const container = document.getElementById("container");
const mainBod = document.getElementById("body");

// Tests
adderButton.addEventListener("click", ()=>{addWindow()});
//Object Constructor 
function restaurantCreator(name, nationality, visited, price){
    this.name = name;
    this.nationality = nationality;
    this.visited = visited;
    this.price = price;
}
//Scroll Func, thanks to W3
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
//Adder function
function addWindow(){
    topFunction();
    const window = document.createElement("div");
    window.classList = "addWindow";
    window.id = "REMOVE_ID";
    document.body.appendChild(window);
    const formName = document.createElement("div");
    formName.innerHTML = "Add a Restaurant";
    formName.style.fontSize = 18 + "px";
    formName.style.marginTop = 10+"px";
    formName.style.marginBottom = 5 +"px";
    formName.style.textAlign = "center";
    window.appendChild(formName);
    const formWindow = document.createElement("div");
    formWindow.classList = "formWindow";
    window.appendChild(formWindow);
//Name of Restaurant Input 
    const rNameField = document.createElement("div");
    const rNameLabel = document.createElement("label");
    rNameLabel.htmlFor = "restName";
    rNameLabel.textContent = "Restaurant Name: ";
    const rName = document.createElement("input");
    rName.tagName = "restName";
    rName.type = "text";
    rName.id = "restName";
    rName.required = true;
    rName.placeholder = "Taco Bell";
    rNameField.appendChild(rNameLabel);
    rNameField.appendChild(rName);
    formWindow.appendChild(rNameField);
//Nationality of Restaurant Input
    const rNationalityField = document.createElement("div");
    const rNationalityLabel = document.createElement("label");
    rNationalityLabel.htmlFor = "restNat";
    rNationalityLabel.textContent = "Nationality: ";
    const rNation = document.createElement("input");
    rNation.tagName = "restNat";
    rNation.type = "text";
    rNation.id = "restNat";
    rNation.required = true;
    rNation.placeholder = "Mexican";
    rNationalityField.appendChild(rNationalityLabel);
    rNationalityField.appendChild(rNation);
    formWindow.appendChild(rNationalityField);
// Whether Restaurant has been visited. 
    const rVisitedField = document.createElement("div");
    const rVisitedLabel = document.createElement("label");
    rVisitedLabel.htmlFor = "restV";
    rVisitedLabel.textContent = "Been there?: ";
    const rVisited = document.createElement("input");
    rVisited.tagName = "restV";
    rVisited.id = "restV";
    rVisited.required = true;
    rVisited.type = "checkbox";
    rVisitedField.appendChild(rVisitedLabel);
    rVisitedField.appendChild(rVisited);
    formWindow.appendChild(rVisitedField);
//Restaurant price
    const rPriceField = document.createElement("div");
    const rPriceLabel = document.createElement("label");
    rPriceLabel.htmlFor = "restP";
    rPriceLabel.textContent = "Average price?: "
    const rPrice = document.createElement("select");
    rPrice.tagName = "restP";
    rPrice.id = "restP";
    rPrice.required = true;
    const oneDollar = document.createElement("option");
    oneDollar.value = "$";
    oneDollar.innerHTML = "$";
    oneDollar.selected = true; 
    const twoDollar = document.createElement("option");
    twoDollar.value = "$$";
    twoDollar.innerHTML = "$$";
    const threeDollar = document.createElement("option");
    threeDollar.value = "$$$";
    threeDollar.innerHTML = "$$$";
    rPrice.appendChild(oneDollar);
    rPrice.appendChild(twoDollar);
    rPrice.appendChild(threeDollar);
    rPriceField.appendChild(rPriceLabel);
    rPriceField.appendChild(rPrice);
    formWindow.appendChild(rPriceField);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.innerHTML = "Add!";
    addButton.style.borderRadius = 25+"px";
    addButton.addEventListener("click", ()=>{restaurantObjectCreator()});
    formWindow.appendChild(addButton);
}

function restaurantObjectCreator(){
    let name = document.getElementById("restName").value;
    let nationality = document.getElementById("restNat").value;
    let visited = document.getElementById("restV").checked;
    let price = document.getElementById("restP").value;
    let restaurantInQuestion = new restaurantCreator(name, nationality, visited, price);
    if((name == "")||(nationality == "")){
        alert("Please fill all fields");
        return
    };
    console.log(restaurantInQuestion.visited);
    function converter(){
        if (restaurantInQuestion.visited == true){
            return "Been there"
        } else return "Never been"
    };
    let visitValue = converter();
    console.log(visitValue);

    let restaurantTile = document.createElement("div");
    restaurantTile.classList = "restaurantTile";
    let rTileName = document.createElement("div");
    rTileName.classList = "rName";
    rTileName.innerHTML = restaurantInQuestion.name;
    let rTileNat = document.createElement("div");
    rTileNat.classList = "rNat";
    rTileNat.innerHTML = restaurantInQuestion.nationality;
    let rTileVis = document.createElement("div");
    rTileVis.classList = "rVis";
    rTileVis.innerHTML = visitValue;
    let rTilePrice = document.createElement("div");
    rTilePrice.classList = "rPrice";
    rTilePrice.innerHTML = "Price: " + restaurantInQuestion.price;
    let remover = document.createElement("button");
    remover.type = "button";
    remover.classList = "rRemove";
    remover.innerHTML = "Remove Restaurant";
    remover.addEventListener('click', ()=>{restaurantTile.remove()});
    function vCheck(){
        if (visitValue == "Never been"){
            restaurantTile.appendChild(visiter);
        } else return;
    }
    let visiter = document.createElement("button");
    visiter.type = "button";
    visiter.classList = "visiter";
    visiter.innerHTML = "Visited";
    function visitedPlace(){
        rTileVis.innerHTML = "Been there";
        visiter.remove();
    };
    visiter.addEventListener('click', ()=>{visitedPlace()});
    restaurantTile.appendChild(rTileName);
    restaurantTile.appendChild(rTileNat);
    restaurantTile.appendChild(rTileVis);
    restaurantTile.appendChild(rTilePrice);
    vCheck();
    restaurantTile.appendChild(remover);
    container.appendChild(restaurantTile);

    document.getElementById("REMOVE_ID").remove();


}

