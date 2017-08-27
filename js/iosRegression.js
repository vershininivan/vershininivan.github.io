
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
var testersInRegressionArray = [];
var testersInRegressionSortArray = [];
var text_1 = "";
var testersInRegressionArray = [];


window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (jsonToArray) {

            tableArray = jsonToArray;

            getHeaderTable();

            getRawTable();

            generateTable();

            testersInRegression();

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

    text_1 += tableClose;

    $(".smallTable").html(text_1);

}

function getHeaderTable() {
    for (var i = 0; i < tableArray.data.structure.fields.length; i++) {

        tableHeaderArray.push(tableArray.data.structure.fields[i].title);

    }

    console.log(tableHeaderArray);

}

function getRawTable() {

    for (var i = 0; i < tableArray.data.rows.length; i++) {

        var rowArray = tableArray.data.rows[i];

        tableRawArray[i] = [];

        for (var j = 0; j < rowArray.length; j++) {
            tableRawArray[i][j] = rowArray[j].sort;
        }

    }

    console.log(tableRawArray);

}

function testersInRegression() {

    var RegexVar;

    for (var i = 0; i < tableRawArray.length; i++) {

        RegexVar = tableRawArray[i][2].match(/[А-Яа-я]*/i);
        testersInRegressionArray.push(RegexVar);
        RegexVar = tableRawArray[i][6].match(/[А-Яа-я]*/i);
        testersInRegressionArray.push(RegexVar);

    }

    for (var i = 2; i < testersInRegressionArray.length; i++) {
        if (typeof testersInRegressionArray[i][0] !== undefined && testersInRegressionArray[i][0] !== null && testersInRegressionArray[i][0] !== "") {
            testersInRegressionSortArray.push(testersInRegressionArray[i][0]);
        }
    }

    var newArray = testersInRegressionSortArray.filter(function (elem, pos) {
        return testersInRegressionSortArray.indexOf(elem) == pos;
    });

    console.log(newArray);

    var testArrayName = [];
    var testArrayTime = [];


    for (var i = 2; i < tableRawArray.length; i++) {

        RegexVar = tableRawArray[i][6].match(/[А-Яа-я]*/ig);
        testArrayName.push(RegexVar);
        RegexVar = tableRawArray[i][7].match(/[0-9]*/ig);
        testArrayTime.push(RegexVar);
    }

    var testArraySortTestersName = [];
    var testArraySortTestersTime = [];

    for (var i = 0; i < testArrayName.length; i++) {
        var k = 0;
        testArraySortTestersName[i] = [];
        for (var j = 0; j < testArrayName[i].length; j++) {    
            if (typeof testArrayName[i][j] !== undefined && testArrayName[i][j] !== null && testArrayName[i][j] !== "") {
                testArraySortTestersName[i][k] =testArrayName[i][j];
                k++;
            }
        }

    }

    var m = 0;

    for (var i = 0; i < testArrayTime.length; i++) {
        var k = 0;
        testArraySortTestersTime[i] = [];
        for (var j = 0; j < testArrayTime[i].length; j++) {    
            if (typeof testArrayTime[i][j] !== undefined && testArrayTime[i][j] !== null && testArrayTime[i][j] !== "") {
                testArraySortTestersTime[m][k] =testArrayTime[i][j];
                k++;
            }
        }
        m++;
    }

    console.log(testArrayName);
    console.log(testArrayTime);
    console.log(testArraySortTestersName);
    console.log(testArraySortTestersTime);
}


