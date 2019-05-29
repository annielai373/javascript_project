// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function renderTable(){
tbody.html(null);

//Render table.
// Get a reference to the table body

tableData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
renderTable();

var submit = d3.select("#filter-btn");
submit.on("click", function(){
  // Prevent the page from refreshing
  d3.event.preventDefault();

    // Select the datetime input element and get the raw HTML code
    var inputElement = d3.select("#datetime");
    // Get the datetime value property of the datetime input element
    var inputValue = inputElement.property("value");
    tableData = data.filter(sightings => sightings.datetime === inputValue);
    renderTable();

    // Select the city input element and get the raw HTML code
    var inputElement_cty = d3.select("#city");
    // Get the city value property of the city input element
    var inputValue_cty = inputElement_cty.property("value");
    tableData = data.filter(sightings => sightings.city === inputValue_cty);
    renderTable();

    // Select the state input element and get the raw HTML code
    var inputElement_st = d3.select("#state");
    // Get the state value property of the state input element
    var inputValue_st = inputElement_st.property("value");
    tableData = data.filter(sightings => sightings.state === inputValue_st);
    renderTable();

    // Select the country input element and get the raw HTML code
    var inputElement_ctry = d3.select("#country");
    // Get the country value property of the country input element
    var inputValue_ctry = inputElement_ctry.property("value");
    tableData = data.filter(sightings => sightings.country === inputValue_ctry);
    renderTable();

    // Select the shape input element and get the raw HTML code
    var inputElement_shp = d3.select("#shape");
    // Get the shape value property of the shape input element
    var inputValue_shp = inputElement_shp.property("value");
    tableData = data.filter(sightings => sightings.shape === inputValue_shp);
    renderTable();


});