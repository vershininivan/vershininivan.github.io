


var table = '<div id="table">';
var row = '<div class="row">';
var cellOpen = '<span class="cell">';
var cellClose = '</span>';
var divClose = '</div>';


var arrayDeviceIsUsed = [];

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (arrayDevice) {

            var text_1 = text_2 = text_3 = "";

            text_1 += table + row;

            //console.log(arrayDevice.data.structure.fields[0].title);

            for (var i = 0; i < arrayDevice.data.structure.fields.length; i++) {

                text_1 += cellOpen + arrayDevice.data.structure.fields[i].title + cellClose;

                //console.log(arrayDevice.data.structure.fields[i].title);
            }

            text_1 += divClose + divClose;

            $(".smallTable").html(text_1);

        });
    });
}

