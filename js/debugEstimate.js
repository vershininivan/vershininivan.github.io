var time = [
    [100, 30],
    [70],
    [120],
    [100],
    [90],
    [20],
    [60, 40],
    [20],
    [30],
    [80],
    [30],
    [15],
    [25],
    [35],
    [25],
    [15],
    [15],
    [20],
    [70]
];

var peopleInReg = [
    ["Гриша", "Кира"],
    ["Кира"],
    ["Кира"],
    ["Кира"],
    ["Гриша"],
    ["Кира"],
    ["Гриша"],
    ["Кира"],
    ["Кира"],
    ["Стася"],
    ["Гриша"],
    ["Кира"],
    ["Кира"],
    ["Гриша"],
    ["Гриша"],
    ["Кира"],
    ["Кира"],
    ["Кира"],
    ["Гриша"]
];

var peopleReg = ["Кира", "Гриша", "Лена", "Стася"];
var peopleTime = [];
var perem_1 = 0;
var perem_2 = 0;

console.log(peopleInReg.length);
console.log(peopleInReg[0].length);
console.log(time.length);

for (var i = 0; i < peopleReg.length; i++) {
    peopleTime[i] = 0;
    for (var j = 0; j < peopleInReg.length; j++) {
        for (var k = 0; k < peopleInReg[j].length; k++) {
            if (peopleInReg[j][k] == peopleReg[i]) {
                peopleTime[i] += time[j][k];
            }
        }
    }
}

console.log(peopleTime);

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [peopleReg[0], peopleTime[0]],
        [peopleReg[1], peopleTime[1]],
        [peopleReg[2], peopleTime[2]],
        [peopleReg[3], peopleTime[3]]
    ]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}