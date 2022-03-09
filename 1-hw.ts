interface IObjTemp {
    temperature: string;
    city: string;
    optional?: boolean
}

interface IDataObj {
    dt: string;
    quantity: number;
    age: number | null;
    temp: IObjTemp
}

const data : IDataObj[] = [
    {
      "dt": "01-01-2021",
      "quantity": 100,
      "age": null,
      "temp": {
        "temperature": "100 degrees",
        "city": "Norway"
      }
    },
    {"dt": "02-01-2021",
      "quantity": 150,
      "age": 23,
      "temp": {
        "temperature": "103 degrees",
        "city": "Egypt"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Kypris"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 150,
      "age": 22,
      "temp": {
        "temperature": "98 degrees",
        "city": "Holland"
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    },
    {"dt": "03-01-2021",
      "quantity": 700,
      "age": 27,
      "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true
      }
    }
]


let unique = Array.from(new Set(data.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));

// console.log(unique);


let dataMap = new Map([[
        '03-01-2021',[
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
        '01-01-2021',[
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
