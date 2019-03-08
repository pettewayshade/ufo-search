// from data.js
var tableData = data;

// button
var submit = d3.select("#filter-btn");

// func to get values to filter on
function filterOn(object) {
    filterKeys = ["datetime", "city", "country", "state", "shape"]
    var matched = true;
    filterKeys.forEach((key) => {
        filter = d3.select(`#${key}`).property("value");
        filter = new RegExp(filter);
        if (!object[key].match(filter)) {matched = false}
    })
    return matched
}

// func to run when submit button is clicked
submit.on("click", function() {
    // prevents page from refreshing
    d3.event.preventDefault()
    // filter the table
    filteredData = tableData.filter(filterOn)
    console.log(filteredData)
    if (!filteredData.length){alert("No data for your search criteria.")}
    else{createTable(filteredData)}
})

// func to create table
function createTable(objects) {
    var tbody = d3.select("tbody");
    tbody.html("")
    objects.forEach((element) => {
        var tr = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = tr.append("td");
            cell.text(value)
        })
    })
}