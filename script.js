// DOM constants

const adderButton = document.getElementById("adder");
const container = document.getElementById("container");

// Object Constructors

function restaurantAdder(name, nationality, price, fancyness, vegan, speed){
    this.name = name;
    this.nationality = nationality;
    this.price = price; 
    this.fancyness = fancyness; 
    this.vegan = vegan; 
    this.speed = speed;
}

//Test case

const tacoBell = new restaurantAdder("Taco Bell", "Mexican", "$", "Casual", "Vegan-Friendly", "fast");

// Adder functions

function addRequest(){
    const form = document.createElement("div")
    form.classList.add("form");
    document.body.appendChild(form);
    const formCont = document.createElement("form");
    formCont.classList.add("formCont");

    const nameField = document.createElement("input");
    nameField.inputMode = "text";
    nameField.id = "nameFieldID";
    nameField.placeholder = "Restaurant Name";
    formCont.appendChild(nameField);

    const nationalityField = document.createElement("input");
    nationalityField.inputMode = "text";
    nationalityField.id = "natFieldID";
    nationalityField.placeholder = "Nationality";
    formCont.appendChild(nationalityField);

    const priceField = document.createElement("input");
    priceField.inputMode = "text";
    priceField.id = "priceFieldID";
    priceField.placeholder = "$ $$ $$$";
    formCont.appendChild(priceField);

    const fancynessField = document.createElement("input");
    fancynessField.inputMode = "text";
    fancynessField.id = "fancynessFieldID";
    fancynessField.placeholder = "Casual, Mid, Fancy";
    formCont.appendChild(fancynessField);

    const veganField = document.createElement("input");
    veganField.inputMode = "text";
    veganField.id = "veganFieldID";
    veganField.placeholder = "Has(n't) Vegan Options";
    formCont.appendChild(veganField);

    const speedField = document.createElement("input");
    speedField.inputMode = "text";
    speedField.id = "speedFieldID";
    speedField.placeholder = "Slow, Fast";
    formCont.appendChild(speedField);





 

    form.appendChild(formCont);
}

function inputFields(){
    const formCont = document.createElement("form");
    const nameField = document.createElement("input");
    nameField.inputMode = "text";
    nameField.id = "nameFieldID";
    nameField.placeholder = "Restaurant Name";
    formCont.appendChild(nameField);
}

function addToList(restaurant){
    const place = document.createElement("div");
    place.classList.add("restTile");
    place.textContent = 
    `${restaurant.name}
    ${restaurant.nationality}
    ${restaurant.price}
    ${restaurant.fancyness}
    ${restaurant.vegan}
    ${restaurant.speed}`;
    container.appendChild(place);
}

