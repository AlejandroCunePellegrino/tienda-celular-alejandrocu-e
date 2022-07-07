const products = [
    {id: '1',
    name: "Samnsung Galaxy A20",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_909989-MLA46519143589_062021-F.webp',
    price: "$ 50.990",
    stock: 10,
    initial: 1,
    category: "samnsung",
    detail: "agregar algo"},

    {id: '2',
    name: "Samnsung Galaxy A12",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_665643-MLA45385132297_032021-F.webp',
    price: "$ 44.999",
    stock: 8,
    initial: 1,
    category: "samnsung",
    detail: "agregar algo"},

    {id: '3',
    name: "Samnsung Galaxy S22 Ultra",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_668050-MLA49303776893_032022-F.webp',
    price: "$ 262.999",
    stock: 5,
    initial: 1,
    category: "samnsung",
    detail: "agregar algo"},

    {id: '4',
    name: "Samnsung Galaxy S20 FE",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_995741-MLA47861036467_102021-F.webp',
    price: "$ 91.999",
    stock: 7,
    initial: 1,
    category: "samnsung",
    detail: "agregar algo"},

    {id: '5',
    name: "Moto G22 128 GB",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_854793-MLA50262132804_062022-F.webp',
    price: "$ 39.999",
    stock: 6,
    initial: 1,
    category: "motorola",
    detail: "agregar algo"},

    {id: '6',
    name: "Moto G60s 128 GB",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_788340-MLA48112659213_112021-F.webp://http2.mlstatic.com/D_NQ_NP_2X_995741-MLA47861036467_102021-F.webp',
    price: "$ 62.499",
    stock: 5,
    initial: 1,
    category: "motorola",
    detail: "agregar algo"},

    {id: '7',
    name: "Motorola Edge 20 Lite",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_833619-MLA48233725917_112021-F.webp://http2.mlstatic.com/D_NQ_NP_2X_995741-MLA47861036467_102021-F.webp',
    price: "$ 69.999",
    stock: 4,
    initial: 1,
    category: "motorola",
    detail: "agregar algo"},

    {id: '8',
    name: "Motorola Edge 20 Pro",
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_625169-MLA48113209394_112021-F.webp://http2.mlstatic.com/D_NQ_NP_2X_995741-MLA47861036467_102021-F.webp',
    price: "$ 129.999",
    stock: 4,
    initial: 1,
    category: "motorola",
    detail: "agregar algo"}
]

export const getProds = (categoryId) => {
   return new Promise((resolve, reject) => {
        const productFilter = products.filter(prod => prod.category === categoryId);
        setTimeout(() => {
            categoryId
            ? resolve(productFilter)
            : resolve(products)
        }, 1000);
    });
};
export const getProd = (id) => {
   return new Promise((resolve, reject) => {
        const prodFind = products.find(prod => prod.id === id)
        setTimeout(() => {
            resolve(prodFind)
        }, 1000);
    });
};