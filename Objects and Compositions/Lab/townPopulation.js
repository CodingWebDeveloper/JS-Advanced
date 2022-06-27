function registerTowns(towns){
    let result = {};
    for(const entry of towns){
        const [key, pop] = entry.split(' <-> ');
        if(result[key]){
            result[key] +=Number(pop);
        }
        else{
            result[key] =Number(pop);
        }
    }

    for(const key in result){
        console.log(`${key} : ${result[key]}`);
    }
}

const towns = ['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'];

registerTowns(towns);
