function storeProducts(input){
    let group = {};
    input.forEach((entry) =>{
        const [productName, productPrice] = entry.split(' : ');
        const product = {
            name: productName,
            price: productPrice
        }
        if(group[productName[0]]){
            group[productName[0]].products.push(product);
        }
        else{
            group[productName[0]] = {
                products: [product]
            };
        }
    })

    let ascendingGroupKeys = Object.keys(group)
                        .sort()
                        .reduce((accumulator, key) =>{
                            accumulator[key] = group[key];
                            return accumulator
                        }, {});
                        
    for(const key in ascendingGroupKeys){
        console.log(key);
        const products =  group[key].products;
        products.sort((a, b) =>{
            
            let pa = a.name.toLowerCase();
            let pb = b.name.toLowerCase();

            if(pa < pb){
                return -1;
            }
            else{
                return 1;
            }

            return 0;
        });
        
        for(const product of products){
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

const input = ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'];

storeProducts(input);
