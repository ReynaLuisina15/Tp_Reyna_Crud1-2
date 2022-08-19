const fs = require('fs');
const path = require('path');

const loadProducts = () => {
    const productsFilePath = path.join(__dirname, '/productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products   /* Leo el json y lo parseo  */
}


const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname, 'productsDataBase.json'), JSON.stringify(products, null, 3), 'utf-8');  /*PARA GUARDAR LOS CAMBIOS EN EL ARRAY Recibido*/
}

module.exports = {
    loadProducts,
    storeProducts
}
