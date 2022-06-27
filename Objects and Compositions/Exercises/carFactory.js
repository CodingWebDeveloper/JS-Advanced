function carFactory(car){
    const engine = {
        'Small': {
            power: 90,
            volume: 1800
        },
        'Normal': {
            power: 120,
            volume: 2400
        },
        'Monster': {
            power: 200,
            volume: 3500
        }
    };
    
    let minEngine = car.power - engine['Small'].power;
    let minKeyEngine = 'Small';
    for(const key in engine){
        const power = engine[key].power;

        if(power - car.power <= minEngine){
            minKeyEngine = key;
            minEngine = car.power - power;
        }
    }

    car.engine = engine[minKeyEngine];

    const carCarriage = car.carriage;
    delete car.carriage;
    car.carriage = {
        type: carCarriage,
        color: car.color
    };

    let wheels = [];
    if(car.wheelsize % 2 == 0){
        for(let i = 1; i <= 4; i++){
            wheels.push(car.wheelsize - 1);
        }
    }
    else{
        for(let i = 1; i <= 4; i++){
            wheels.push(car.wheelsize);
        }
    }

    car.wheels = wheels;

    delete car.power;
    delete car.color;
    delete car.wheelsize;

    return car;
}

let input = {
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
};

console.log(carFactory(input));