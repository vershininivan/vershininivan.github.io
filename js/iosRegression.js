
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

            //записываем в переменную данные json файла
            tableArray = jsonToArray;
            //вызываем функцию для получения шапки таблицы
            getHeaderTable();
            //вызываем функцию для получения строк таблицы
            getRawTable();
            //вызываем функцию для построяения таблицы
            generateTable();
            //вызываем функцию для сбора участников регрессии
            testersInRegression();
            //вызываем функцию для рассчета сколько каждый тестер сделал в регрессии
            calculateEstimate();

        });
    });
}

//Функция для построяения таблицы
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

//Функция для получения шапки таблицы
function getHeaderTable() {
    for (var i = 0; i < tableArray.data.structure.fields.length; i++) {

        tableHeaderArray.push(tableArray.data.structure.fields[i].title);

    }

    //console.log(tableHeaderArray);

}

//Функция для получения строк таблицы
function getRawTable() {

    for (var i = 0; i < tableArray.data.rows.length; i++) {

        var rowArray = tableArray.data.rows[i];

        tableRawArray[i] = [];

        for (var j = 0; j < rowArray.length; j++) {
            tableRawArray[i][j] = rowArray[j].sort;
        }

    }

    //console.log(tableRawArray);

}

//Функция для сбора участников регрессии
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

    testersInRegressionSortArray = newArray;

    console.log(testersInRegressionSortArray);

}

//Функция для рассчета сколько каждый тестер сделал в регрессии
function calculateEstimate() {

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
                testArraySortTestersName[i][k] = testArrayName[i][j];
                k++;
            }
        }
    }

    for (var i = 0; i < testArrayTime.length; i++) {
        var k = 0;
        testArraySortTestersTime[i] = [];
        for (var j = 0; j < testArrayTime[i].length; j++) {
            if (typeof testArrayTime[i][j] !== undefined && testArrayTime[i][j] !== null && testArrayTime[i][j] !== "") {
                testArraySortTestersTime[i][k] = testArrayTime[i][j];
                k++;
            }
        }
    }

    var estimateTestersInRegression = []
    estimateTestersInRegression = testersInRegressionSortArray;

    for (var i = 0; i < testersInRegressionSortArray.length; i++) {

        for (var j = 0; j < testArraySortTestersName.length; j++) {
            estimateTestersInRegression[i][i] = [];
            for (var k = 0; k < testArraySortTestersName[j].length; k++) {
                console.log(testArraySortTestersName[j][k]);
                console.log(testersInRegressionSortArray[i]);
                console.log(testersInRegressionSortArray);
                if (testArraySortTestersName[j][k] == testersInRegressionSortArray[i]){
                    console.log(j);
                    estimateTestersInRegression[i][1] += testArraySortTestersTime[j][k];
                }
            }

        }

    }

    //console.log(testersInRegressionSortArray);
    console.log(testArraySortTestersTime);
    console.log(testArraySortTestersName);
    console.log(estimateTestersInRegression);

}