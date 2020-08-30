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

buildTable(tableData);