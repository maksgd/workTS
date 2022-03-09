var str = "";
var arrProto = [
    { name: 'Ivan', age: 17, gender: 'male', hasWork: false },
    { name: 'Evgeny', age: 17, gender: 'male', hasWork: false },
    { name: 'Sergey', age: 17, gender: 'female', hasWork: false },
    { name: 'Alex', age: 17, gender: 'male', hasWork: false },
];
var optionalVal = { name: 'Olga', age: 15 };
arrProto.filter(function (protoEl) { return protoEl.gender === 'female'; });
var foundItem;
for (var i = 0; i < arrProto.length; i++) {
    foundItem = arrProto[i].hasWork === true ? arrProto[i] : null;
}
arrProto.map(function (item) {
    if (item.hasWork) {
        var name_1 = item.age;
    }
    return item;
});
var newMap = ['name', 'age', 'gender'];
var dates = [
    { dt: new Date() },
    { dt: new Date() },
    { dt: new Date() },
];
// 21.01.2021 = [
//     {dt: new Date()},
//     {dt: new Date()},
//     {dt: new Date()},]
new Map();
new Set();
var arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 8];
// [1,2,3,4,5,6,7,8]
var uniqSet = new Set(arr);
var exampleData = new Map([[
        'red', [
            { dt: new Date() },
            { dt: new Date() },
            { dt: new Date() }
        ]
    ]]);
console.log(exampleData.get('red'));
/*
=>  [ {dt: new Date()},
    {dt: new Date()},
   {dt: new Date()}]
*/
