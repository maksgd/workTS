var data = [
    {
        "dt": "01-01-2021",
        "quantity": 100,
        "age": null,
        "temp": {
            "temperature": "100 degrees",
            "city": "Norway"
        }
    },
    { "dt": "02-01-2021",
        "quantity": 150,
        "age": 23,
        "temp": {
            "temperature": "103 degrees",
            "city": "Egypt"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Kypris"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Holland"
        }
    },
    { "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    },
    { "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    }
];
// let unique = Array.from(new Set(data.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
var setData = new Set(data.map(function (item) { return item["dt"]; }));
console.log(setData);
var mapData = new Map();
var index = setData.values();
var _loop_1 = function (i) {
    var curIndex = index.next().value;
    mapData.set(curIndex, data.filter(function (item) { return item["dt"] == curIndex; }));
};
for (var i = 0; i < setData.size; i++) {
    _loop_1(i);
}
console.log(mapData);
