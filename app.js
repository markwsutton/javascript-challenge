// from data.js
var tableData = data;

// YOUR CODE HERE!
// get all table attributes
var tbody = d3.select("tbody");

function buildTable(data){
    //Make sure table is empty
    tbody.html("");

    // loop through and append data
    data.forEach(function(dataRow){
        var row = tbody.append("tr");

        // loop hrough rows add values into cells
        Object.values(dataRow).forEach(function(val){
            var cell = row.append("td");
            cell.text(val);
        })
    })

}

// filters - elements, values, ids
var filters = {};

function filterTable(){
    let filteredData = tableData;
    //loop and append matching data
    Object.entries(filters).forEach(function([key, value]){
        filteredData = filteredData.filter((row) => row[key] === value);
    })

    buildTable(filteredData);
}

function updateFilters(){
    var changeElement = d3.select(this).select("input");
    var elementValue = changeElement.property("value");
    var filterId = changeElement.attr("id");
    // add filterId and elementValue, else clear filter
    if(elementValue){
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    // call func to apply all filters and rebuild table
    filterTable()
}

// attach event for handle events
d3.selectAll(".filter").on("change", updateFilters)

// call the buildTable function
buildTable(tableData);