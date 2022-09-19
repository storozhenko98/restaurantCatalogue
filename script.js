//DOM Constants
const adderButton = document.getElementById("adder");
const container = document.getElementById("container");
// Tests
adderButton.addEventListener("click", ()=>{addWindow()});
//Object Constructor 
function restaurantCreator(name, nationality, visited, price){
    this.name = name;
    this.nationality = nationality;
    this.visited = visited;
    this.price = price;
}

//Adder function
function addWindow(){
    const window = document.createElement("div");
    window.classList = "addWindow";
    document.body.appendChild(window);
    const formName = document.createElement("div");
    formName.innerHTML = "Add a Restaurant";
    formName.style.marginBottom = 5 +"px";
    formName.style.textAlign = "center";
    window.appendChild(formName);
    const formWindow = document.createElement("div");
    formWindow.style.width = 100 +"%";
    formWindow.style.height = 80 +"%";
    //formWindow.style.justifyContent = "space-between";
    formWindow.style.columnGap = 5+"px";
    formWindow.style.display = "flex";
    formWindow.style.flexDirection = "column";
    window.appendChild(formWindow);

    const rNameLabel = document.createElement("label");
    rNameLabel.htmlFor = "restName";
    rNameLabel.style.marginLeft = 5+"px";
    rNameLabel.textContent = "Restaurant Name: ";
    const rName = document.createElement("input");
    rName.tagName = "restName";
    rName.type = "text";
    formWindow.appendChild(rNameLabel);
    formWindow.appendChild(rName);

    const rNationalityLabel = document.createElement("label");
    rNationalityLabel.htmlFor = "restNat";
    rNationalityLabel.style.marginLeft = 5+"px";
    rNationalityLabel.textContent = "Nationality: ";
    const rNation = document.createElement("input");
    rNation.tagName = "restNat";
    rNation.type = "text";
    formWindow.appendChild(rNationalityLabel);
    formWindow.appendChild(rNation);

    const rVisitedLabel = document.createElement("label");
    rVisitedLabel.htmlFor = "restV";
    rVisitedLabel.style.marginLeft = 5+"px";
    rVisitedLabel.textContent = "Been there?: ";
    const rVisited = document.createElement("input");
    rVisited.tagName = "restV";
    rVisited.type = "checkbox";
    formWindow.appendChild(rVisitedLabel);
    formWindow.appendChild(rVisited);
}