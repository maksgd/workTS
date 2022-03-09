interface IDataObj {
  dt: string,
  quantity: number,
  age: number | null,
  temp: {
    temperature: string,
    city: string,
    optional?: boolean
  }
}

let data : IDataObj[] = [
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


// let unique = Array.from(new Set(data.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
let setData = new Set<String>(data.map((item) => item["dt"]));

console.log(setData);


let mapData = new Map<String, IDataObj[]>();
let index = setData.values();

for (let i = 0; i < setData.size; i++) {
  let curIndex = index.next().value;
  mapData.set(curIndex, data.filter(item => item["dt"] == curIndex));
}

console.log(mapData);
