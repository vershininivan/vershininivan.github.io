
var tableOpen = '<div class="divTable">';
var tableClose = '</div>';
var tableBodyOpen = '<div class="divTableBody">';
var tableBodyClose = '</div>';
var rowOpen = '<div class="divTableRow">';
var rowClose = '</div>';
var cellOpen = '<div class="divTableCell">';
var cellClose = '</div>';

var tableArray = [];
var tableHeaderArray = [];
var tableRawArray = [];
var testersPhone = [];
var testersSortName = [];
var text_1 = "";

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (jsonToArray) {

            tableArray = jsonToArray;

            getHeaderTable();

            getRawTable();

            generateTable();

        });
    });
}

function generateTable() {

    text_1 += tableOpen;

    text_1 += rowOpen;

    for (var i = 0; i < tableHeaderArray.length; i++) {

        text_1 += cellOpen + tableHeaderArray[i] + cellClose;

    }

    text_1 += rowClose;

    for (var i = 0; i < tableRawArray.length; i++) {

        text_1 += rowOpen;

        for (var j = 0; j < tableRawArray[i].length; j++) {
            text_1 += cellOpen + tableRawArray[i][j] + cellClose;
        }

        text_1 += rowClose;

    }

    //findTestersPhone();

    var newArray = testersSortName.filter(function (elem, pos) {
        return testersSortName.indexOf(elem) == pos;
    });

    text_1 += tableClose;

    $(".smallTable").html(text_1);

}

function getHeaderTable() {
    for (var i = 0; i < tableArray.data.structure.fields.length; i++) {

        tableHeaderArray.push(tableArray.data.structure.fields[i].title);
        
        console.log(tableHeaderArray);

    }
}

function getRawTable() {

    for (var i = 0; i < tableArray.data.rows.length; i++) {

        var rowArray = tableArray.data.rows[i];
        console.log(tableArray.data.rows[4]);

        for (var j = 0; j < rowArray.length; j++) {
            tableRawArray[i][j].push(rowArray[j].sort);
        }

    }

}

function findTestersPhone() {
    for (var k = 2; k < testersPhone.length; k++) {
        if (typeof testersPhone[k][0] !== undefined && testersPhone[k][0] !== null && testersPhone[k][0] !== "") {
            testersSortName.push(testersPhone[k][0]);
        }
    }
}