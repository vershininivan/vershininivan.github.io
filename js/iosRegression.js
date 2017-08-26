var arrayDeviceIsUsed = [];

window.onload = function () {
    $(document).ready(function () {
        $.getJSON("src/devices.json", function (arrayDevice) {

            console.log(arrayDevice.data.structure.fields[0]);

        });
    });
}

