// from data.js
var tableData = data;

var tbody = d3.select("#table-display");
// Date
var submitButton = d3.select("#filter-btn-date");
var dateinput = d3.select("#datetime");
// City
var cityButton = d3.select("#filter-btn-city");
var cityinput = d3.select("#cityname");
// State
var stateButton = d3.select("#filter-btn-state");
var stateinput = d3.select("#statename");
// Country
var countryButton = d3.select("#filter-btn-country");
var countryinput = d3.select("#countryname");
// Shape 
var shapeButton = d3.select("#filter-btn-shape");
var shapeinput = d3.select("#shape");

data.forEach(obj => {
    // Creating a new Row
    var tRow = tbody.append("tr");
    // Putting key, value for each object
    Object.entries(obj).forEach(([key, value]) => {
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
});

submitButton.on("click", function () {
    tbody.html("");
    d3.event.preventDefault();
    console.log("You have clicked the date button");
    var input = dateinput.property("value");
    console.log(input);
    var inputchosen = data.filter(one => one.datetime === input);
    console.log(inputchosen);

    inputchosen.forEach((selection) => {

        var row = tbody.append("tr");

        Object.entries(selection).forEach(([key, value]) => {
            var cell = row.append("td");

            cell.text(value);
        });
    });
});

cityButton.on("click", function () {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from reload
    d3.event.preventDefault();
    console.log("You have just clicked the 'City Filter Button'.");

    var cityinputElement = cityinput.property("value");
    console.log(cityinputElement);
    var cityinputchosen = data.filter(two => two.city === cityinputElement);
    console.log(cityinputchosen)


    cityinputchosen.forEach((selects) => {
        var city_row = tbody.append("tr");
        Object.entries(selects).forEach(([key, value]) => {
            var city_cell = city_row.append("td");
            city_cell.text(value);
        });
    });
});

stateButton.on("click", function () {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from reload
    d3.event.preventDefault();
    console.log("You have just clicked the 'State Filter Button'.");

    var stateinputElement = stateinput.property("value");
    console.log(stateinputElement);
    var stateinputchosen = data.filter(three => three.state === stateinputElement);   
    console.log(stateinputchosen)


    
    stateinputchosen.forEach((selectss) => {
        var state_row = tbody.append("tr");
        Object.entries(selectss).forEach(([key, value]) => {
            var state_cell = state_row.append("td");
            state_cell.text(value);
        });
    });
});


countryButton.on("click", function () {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from reload
    d3.event.preventDefault();
    console.log("You have just clicked the 'Country Filter Button'.");

    var countryinputElement = countryinput.property("value");
    console.log(countryinputElement);
    var countryinputchosen = data.filter(four => four.country === countryinputElement);  
    console.log(countryinputchosen)


    countryinputchosen.forEach((selectsc) => {
        var country_row = tbody.append("tr");
        Object.entries(selectsc).forEach(([key, value]) => {
            var country_cell = country_row.append("td");
            country_cell.text(value);
        });
    });
});

shapeButton.on("click", function () {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from reload
    d3.event.preventDefault();
    console.log("You have just clicked the 'Shape Filter Button'.");

    var shapeinputElement = shapeinput.property("value");
    console.log(shapeinputElement);
    var shapeinputchosen = data.filter(five => five.shape === shapeinputElement);  
    console.log(shapeinputchosen)


    shapeinputchosen.forEach((selectsh) => {
        var shape_row = tbody.append("tr");
        Object.entries(selectsh).forEach(([key, value]) => {
            var shape_cell = shape_row.append("td");
            shape_cell.text(value);
        });
    });
});