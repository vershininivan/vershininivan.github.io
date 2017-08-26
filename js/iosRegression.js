
var tableOpen = '<div class="divTable">';
var tableClose = '</div>';
var tableBodyOpen = '<div class="divTableBody">';
var tableBodyClose = '</div>';
var rowOpen = '<div class="divTableRow">';
var rowClose = '</div>';
var cellOpen = '<div class="divTableCell">';
var cellClose = '</div>';

var tableArray = [];
var testersName_1 = [];
var testersName_2 = [];
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

        var result_1 = rowArray[2].sort.match( /[А-Яа-я]*/i ); 
        var result_2 = rowArray[2].sort.search( /[А-Яа-я]*/i );
        testersName_1.push(result_1);
        testersName_2.push(result_2);

        text_1 += rowClose;

    }

    text_1 += tableClose;

    $(".smallTable").html(text_1);

    console.log(testersName_1);
    console.log(testersName_1[0][0]);
    console.log(testersName_1[2][0]); 

}
