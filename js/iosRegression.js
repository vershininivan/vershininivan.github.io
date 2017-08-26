
var tableOpen = '<div class="divTable">';
var tableClose = '</div>';
var tableBodyOpen = '<div class="divTableBody">';
var tableBodyClose = '</div>';
var rowOpen = '<div class="divTableRow">';
var rowClose = '</div>';
var cellOpen = '<div class="divTableCell">';
var cellClose = '</div>';

var tableArray = [];
var testersName = [];
var testersSortName = [];
var text_1 = "";

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (jsonToArray) {

            tableArray = jsonToArray;

            generateTable();

        });
    });
}

function generateTable() {

    text_1 += tableOpen;

    text_1 += rowOpen;

    for (var i = 0; i < tableArray.data.structure.fields.length; i++) {

        text_1 += cellOpen + tableArray.data.structure.fields[i].title + cellClose;

    }

    text_1 += rowClose;

    for (var i = 0; i < tableArray.data.rows.length; i++) {

        var rowArray = tableArray.data.rows[i];

        text_1 += rowOpen;

        for (var j = 0; j < rowArray.length; j++) {
            text_1 += cellOpen + rowArray[j].sort + cellClose;
        }

        var result = rowArray[2].sort.match(/[А-Яа-я]*/i);
        testersName.push(result);


        text_1 += rowClose;

    }

    testersArray();

    text_1 += tableClose;

    $(".smallTable").html(text_1);

    console.log(testersSortName);

}

function testersArray() {
    for (var k = 2; k < testersName.length; k++) {
        if (typeof testersName[k][0] !== '""' && testersName[k][0] !== null) {
            testersSortName.push(testersName[k][0]);
        }
    }
}