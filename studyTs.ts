interface IProtoData {
    name: string;
    age: number;
    gender?: string;
    hasWork?: boolean | null;
}

// let arrProto : IProtoData[] = [
//     {name: 'Max1', age: 17, gender: 'male', hasWork: false},
//     {name: 'Max2', age: 17, gender: 'male', hasWork: false},
//     {name: 'Max3', age: 17, gender: 'male', hasWork: false},
//     {name: 'Max4', age: 17, gender: 'male', hasWork: false},
// ]

// arrProto.forEach((protoEl:IProtoData) => protoEl.hasWork = true)


const newMap = ['name', 'age', 'gender']
const dates = [
    {dt: new Date()},
    {dt: new Date()},
    {dt: new Date()}
]
21.01.2021 = [
    {dt: new Date()},
    {dt: new Date()},
    {dt: new Date()}
]

new Map()
new Set()
let arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7]

let uniqSet = new Set(arr)


let exampleData = new Map(['red' : 
[   {dt: new Date()},
    {dt: new Date()},
    {dt: new Date()}]
])
exampleData.get('red')
