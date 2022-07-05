import a20 from '../assets/images/a20.jpg'
import a12 from '../assets/images/a12.jpg'
import s20 from '../assets/images/s20.jpg'
import s22 from '../assets/images/s22.jpg' 

const products = [
    {id: '1',
    name: "Samnsung Galaxy A20",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_832807-MLA48008069170_102021-F.webp',
    price: "$ 50.990",
    stock: 10,
    initial: 1},

    {id: '2',
    name: "Samnsung Galaxy A12",
    image: {a12},
    price: "$ 44.999",
    stock: 8,
    initial: 1},

    {id: '3',
    name: "Samnsung Galaxy S22 Ultra",
    image: {s22},
    price: "$ 262.999",
    stock: 5,
    initial: 1},

    {id: '4',
    name: "Samnsung Galaxy S20 FE",
    image: {s20},
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