
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

            }

            for (var i = 0; i < arrayDevice.data.rows.length; i++) {

                var rowArray = arrayDevice.data.rows[i];

                for (var j = 0; j < rowArray.length; j++) {
                    text_1 += cellOpen + rowArray[0].sort + cellClose;
                }

            }

            text_1 += tableClose + rowClose;

            $(".smallTable").html(text_1);


            //console.log(arrayDevice.data.rows.length);
            //console.log(arrayDevice.data.rows[0].length);
            //var rowArray = arrayDevice.data.rows[0];
            //console.log(rowArray[0].sort);


        });
    });
}

