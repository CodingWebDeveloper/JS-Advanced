const input = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

function createFoodFromArray(input){
    let food = {};
    for(let i = 0; i < input.length - 1; i += 2){
        food[input[i]] = Number(input[i + 1]);
    }

    console.log(food);
}

createFoodFromArray(input);