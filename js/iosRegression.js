var arrayDeviceIsUsed = [];

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/regressionTable.json", function (arrayDevice) {

            //console.log(arrayDevice.data.structure.fields[0].title);
            for (var i = 0; i < arrayDevice.data.structure.fields.length; i++) {
                console.log(arrayDevice.data.structure.fields[i].title);
            }
        });
    });
}

