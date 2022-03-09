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
var dataSet = new Set(data);
// console.log(dataSet);
var unique = Array.from(new Set(data.map(function (item) { return JSON.stringify(item); }))).map(function (item) { return JSON.parse(item); });
console.log(unique);
var dataMap = new Map([[
        '03-01-2021', [
            {
                "quantity": 700,
                "age": 27,
                "temp": {
                    "temperature": "50 degrees",
                    "city": "Kursk",
                    "optional": true
                }
            }
        ]
    ],
    [
        '01-01-2021', [
            {
                "quantity": 100,
                "age": null,
                "temp": {
                    "temperature": "100 degrees",
                    "city": "Norway"
                }
            }
        ]
    ]
]);
// console.log(dataMap.get('01-01-2021'))
