const products = [
    {id: '1',
    name: "Samnsung Galaxy A20",
    image: "../src/assets/images/a20.jpg",
    price: "$ 50.990",
    stock: 10,
    initial: 1},

    {id: '2',
    name: "Samnsung Galaxy A12",
    image: "../assets/images/a12.jpg",
    price: "$ 44.999",
    stock: 8,
    initial: 1},

    {id: '3',
    name: "Samnsung Galaxy S22 Ultra",
    image: "../assets/images/s22.jpg",
    price: "$ 262.999",
    stock: 5,
    initial: 1},

    {id: '4',
    name: "Samnsung Galaxy S20 FE",
    image: "../../assets/images/s20.jpg",
    price: "$ 91.999",
    stock: 7,
    initial: 1}
]

export const getData = new Promise ((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
        if(condition){
            resolve(products)
        }else{
            reject("salio mal")
        }
    }, 3000)
})