// ============================================================================= 1 задание 

let mapData = new Map<number, null>();

(function () {
    for (let i = 0; i < 100; i++) {
        mapData.set(i, null)
    }
})()

// console.log(mapData);

// ============================================================================= 2 задание 

let arrKeyMap = Array.from(mapData.keys())

function divisTest() {
    for (let i = 0; i < mapData.size; i++) {
        let curKeyMap = arrKeyMap[i]

        let message = (curKeyMap % 3 === 0 && curKeyMap % 5 === 0) ? `${i} - I can believe in that` :
        (curKeyMap % 5 === 0) ? `${i} - Oops, here is 5` :
        (curKeyMap % 3 === 0) ? `${i} - Devided by tree` :
        '|'
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

const data : string[][] = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]
]



// let setData = new Set<string[]>(data.map(item => item))


function boolHom(data: string[][]) {
    for (let i = 0; i < data.length; i++) {
        let [area, priw, ...otherInfo] = data[i]
        let result:boolean = (area == '56' || area == '40' || (area < '40' && otherInfo[1] == 'Ленина')) 
        console.log(result);
    }
}

boolHom(data)