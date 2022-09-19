// DOM constants

const adderButton = document.getElementById("adder");
const container = document.getElementById("container");

let inputName;
let inputNationality;
let inputPrice;
let inputFancyness;
let inputVegan;
let inputSpeed;


//Adder Function

adderButton.addEventListener("click", function(){addRequest()});

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

//const tacoBell = new restaurantAdder("Taco Bell", "Mexican", "$", "Casual", "Vegan-Friendly", "fast");



// Adder functions
//###################################################
function addRequest(){
    //Form Div and Form self creation
    const form = document.createElement("div")
    form.classList.add("form");
    document.body.appendChild(form);
    const formCont = document.createElement("form");
    formCont.classList.add("formCont");

//Form-self name field
    const nameField = document.createElement("input");
    nameField.inputMode = "text";
    nameField.id = "nameFieldID";
    nameField.placeholder = "Restaurant Name";
    formCont.appendChild(nameField);
//Form-self nationality field
    const nationalityField = document.createElement("input");
    nationalityField.inputMode = "text";
    nationalityField.id = "natFieldID";
    nationalityField.placeholder = "Nationality";
    formCont.appendChild(nationalityField);
//Form-self price field
    const priceField = document.createElement("input");
    priceField.inputMode = "text";
    priceField.id = "priceFieldID";
    priceField.placeholder = "$ $$ $$$";
    formCont.appendChild(priceField);
//Form-self fancyness field
    const fancynessField = document.createElement("input");
    fancynessField.inputMode = "text";
    fancynessField.id = "fancynessFieldID";
    fancynessField.placeholder = "Casual, Mid, Fancy";
    formCont.appendChild(fancynessField);
//Form-self vegan or not field
    const veganField = document.createElement("input");
    veganField.inputMode = "text";
    veganField.id = "veganFieldID";
    veganField.placeholder = "Has(n't) Vegan Options";
    formCont.appendChild(veganField);
// Form-self speed field 
    const speedField = document.createElement("input");
    speedField.inputMode = "text";
    speedField.id = "speedFieldID";
    speedField.placeholder = "Slow, Fast";
    formCont.appendChild(speedField);
//Appending 
    form.appendChild(formCont);
//Button
    const submitButton =document.createElement("button")
    submitButton.textContent = "Submit";
    formCont.appendChild(submitButton); 
    submitButton.addEventListener("click", function(){submitter()});

}
//######################################################

function submitter(){
    const newPlace = new restaurantAdder(nameField.value);
    addToList(newPlace);
};

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
    container.appendChild(place);}