// from data.js
var tableData = data;

// button
var submit = d3.select("#filter-btn");

// func to get values to filter on
function filterOn(object) {
    filterKeys = ["datetime", "city", "country", "state", "shape"]
    var matched = false;
    filterKeys.forEach((key) => {
        filter = d3.select(`#${key}`).property("value");
        if (filter === object[key]) {matched = true}
    })
    return matched
}

// func to run when submit button is clicked
submit.on("click", function() {
    // prevents page from refreshing
    d3.event.preventDefault()
    // filter the table
    filteredData = tableData.filter(filterOn)
    if (filteredData == ""){alert("No data for your search criteria.")}
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