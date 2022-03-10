// ============================================================================= 1 задание 
var mapData = new Map();
(function () {
    for (var i = 0; i < 100; i++) {
        mapData.set(i, null);
    }
})();
// console.log(mapData);
// ============================================================================= 2 задание 
var arrKeyMap = Array.from(mapData.keys());
function divisTest() {
    for (var i = 0; i < mapData.size; i++) {
        var curKeyMap = arrKeyMap[i];
        var message = (curKeyMap % 3 === 0 && curKeyMap % 5 === 0) ? "".concat(i, " - I can believe in that") :
            (curKeyMap % 5 === 0) ? "".concat(i, " - Oops, here is 5") :
                (curKeyMap % 3 === 0) ? "".concat(i, " - Devided by tree") :
                    '|';
        console.log(message);
        // if (curKeyMap % 3 === 0 && curKeyMap % 5 === 0) {
        //     console.log(`${i} - I can believe in that`)
        // } else if (curKeyMap % 5 === 0) {
        //     console.log(`${i} - Oops, here is 5`)
        // } else if (curKeyMap % 3 === 0) {
        //     console.log(`${i} - Devided by tree`)
        // }
    }
}
// divisTest()
// ============================================================================= 3 задание 
var data = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]
];
// let setData = new Set<string[]>(data.map(item => item))
function boolHom(data) {
    var area = data[0], priw = data[1], otherInfo = data.slice(2);
    var result = (area == '56' || area == '40' || (area < '40' && otherInfo[1] == 'Ленина'));
    return console.log(result);
}
boolHom(data[2]);
