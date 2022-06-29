function solve() {
    const toConvertOptions = ['binary', 'hexadecimal'];
    const button = document.querySelector('#container button');
    const select =  document.getElementById('selectMenuTo');

    for(const option of toConvertOptions){
       select.innerHTML +=`<option value='${option}'>${option.charAt(0).toUpperCase() + option.slice(1)}</option> `;
    }

    button.addEventListener('click', function(){
        const selcetedOption = select.children[select.selectedIndex];
        let result = '';
        let num = Number(document.getElementById('input').value);

        if(selcetedOption.value == 'binary' ){
            result = num.toString(2);
        }
        else if(selcetedOption.value == 'hexadecimal'){
            result = convertToHexademical(num);
        }

        document.getElementById('result').value = result;
    })

    function convertToHexademical(num){
        let result ='';
        if(num < 16){
            result = lowerThan16(num);
        }
        else{
            let remainders = [];
            do{
                const devided = num / 16;
                num = Math.floor(num / 16);
                const valueAfterDecimal = Number(String(devided).substring(String(devided).indexOf('.')));
                const remainder = Math.floor(valueAfterDecimal * 16);
                remainders.push(remainder);
            }while(num > 0)

            for(let i = remainders.length -1; i >= 0; i--){
                result += lowerThan16(remainders[i]);
            }
        }
        
        return result;
    }

    function lowerThan16(num){
        let result ='';
        if(num < 10){
            result = String(num);
        }
        else{
            switch(num){
                case 10: 
                    result = 'A';break;
                case 11:
                    result = 'B';break;
                case 12: 
                    result = 'C';break;
                case 13:
                    result = 'D';break;
                case 14: 
                    result = 'E';break;
                case 15:
                    result = 'F';break;
            }
        }

        return result;
    }
}