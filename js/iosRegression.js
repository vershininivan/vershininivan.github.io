


var tableOpen = '<div id="table">';
var tableClose = '</div>';
var rowOpen = '<div class="row">';
var rowClose = '</div>';
var cellOpen = '<span class="cell">';
var cellClose = '</span>';



var arrayDeviceIsUsed = [];

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (arrayDevice) {

            var text_1 = text_2 = text_3 = "";

            text_1 += tableOpen + rowOpen;

            //console.log(arrayDevice.data.structure.fields[0].title);

            for (var i = 0; i < arrayDevice.data.structure.fields.length; i++) {

                text_1 += cellOpen + arrayDevice.data.structure.fields[i].title + cellClose;

                //console.log(arrayDevice.data.structure.fields[i].title);
            }

            text_1 += tableClose + rowClose;

            $(".smallTable").html(text_1);

            console.log(arrayDevice.data.rows.length);
            console.log(arrayDevice.data.rows[0].[0]]);

        });
    });
}

