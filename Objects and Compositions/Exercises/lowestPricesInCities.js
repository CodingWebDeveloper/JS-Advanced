function lowestProductPrice(input){
    let productsLowestPrice = {};
    input.forEach(element => {
        const [townName, productName, price] = element.split(' | ');

        const productLowestPrice = Number(price);
        const product = {
            productLowestPrice: productLowestPrice,
            townName: townName
        };

        if(productsLowestPrice[productName]){
            if(productsLowestPrice[productName].productLowestPrice > product.productLowestPrice){
                productsLowestPrice[productName] = product;
            }
        }
        else{
            productsLowestPrice[productName] = product;
        }
    });

    for(const key in productsLowestPrice){
        console.log(`${key} -> ${productsLowestPrice[key].productLowestPrice} (${productsLowestPrice[key].townName})`);
    }
}

const input = ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'];

lowestProductPrice(input);
