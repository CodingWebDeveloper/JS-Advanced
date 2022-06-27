
function calculatePostFixNotation(input){
    let nums = [];

    const mathFunctions = (operand, num1, num2) =>{
        if(operand == '+'){
            return num1 + num2;
        }
        else if(operand == '-'){
            return num1 - num2;
        }
        else if(operand == '*'){
            return num1 * num2;
        }
        else if(operand == '/'){
            return num1 / num2;
        }
        else{
            console.log("Operand not existing!");
            return;
        }
    }

    try{
        for(const entry of input){
            if(typeof(entry) === 'number'){
                nums.push(entry);
            }
            else{
                if(nums.length < 2){
                    throw new Error('Error: not enough operands!');
                }
    
                const num1 =  nums[nums.length - 2];
                const num2 =  nums[nums.length - 1];
                nums[nums.length - 2] = mathFunctions(entry, num1, num2);
                nums.pop();
            }
        }

        if(nums.length > 1){
            throw new Error('Error: too many operands!');
        }
        else{
            console.log(nums[0]);
        }
    }
    catch(error){
        console.log(error.message);
    }
}


const input = [15,
    '/'];


calculatePostFixNotation(input);
   