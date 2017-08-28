var time = [
    ["100", "30"],
    ["70"],
    ["120"],
    ["100"],
    ["90"],
    ["20"],
    ["60, 40"],
    ["20"],
    ["30"],
    ["80"],
    ["30"],
    ["15"],
    ["25"],
    ["35"],
    ["25"],
    ["15"],
    ["15"],
    ["20"],
    ["70"]
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

stringToInt();

console.log(peopleInReg.length);
console.log(peopleInReg[0].length);
console.log(time.length);

for (var i = 0; i < peopleReg.length; i++) {
    peopleTime[i] = [];
    peopleTime[i][0] = peopleReg[i];
    peopleTime[i][1] = 0;
    for (var j = 0; j < peopleInReg.length; j++) {
        for (var k = 0; k < peopleInReg[j].length; k++) {
            if (peopleInReg[j][k] == peopleReg[i]) {
                peopleTime[i][1] += time[j][k];
            }
        }
    }
}

console.log(peopleTime);

/*console.log(peopleTime[0][0]);
console.log(peopleTime[0][1]);
console.log(peopleTime[1][0]);
console.log(peopleTime[1][1]);
console.log(peopleTime[2][0]);
console.log(peopleTime[2][1]);
console.log(peopleTime[3][0]);
console.log(peopleTime[3][1]);*/

function stringToInt(){
    for (var i = 0; i < time.length; i++) {
        for (var j = 0; j < time[i].length; j++) {
            time[i][j] = parseInt(time[i][j]);
        } 
    }
}