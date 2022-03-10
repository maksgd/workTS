// ====================== Замыкание

let test = 500;

const funcName = () => {
    console.log(test + 500)
}

funcName()

// ====================== Деструктуризация

const [first, second, third, ...other] = ['firstValue', 'secondVal', 'thirdVal', 1,3,4,6,7,8]


// Сортировка чисел
// .sort((a, b) => a-b )
// .sort((a, b) => a > b? -1 : 1  )
