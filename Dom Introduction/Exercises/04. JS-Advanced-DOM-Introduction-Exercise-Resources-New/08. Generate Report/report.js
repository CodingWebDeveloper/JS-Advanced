function generateReport() {
    const inputElements = Array.from(document.querySelectorAll('tr th input'));
    const rowElements = Array.from(document.querySelectorAll('tr'));
    console.log(rowElements);
    const checkedEls = [];
    const reportData = [];

    let index= 0;
    for(const rowEl of rowElements){
        if(checkedEls[index]){
            console.log(rowEl.children[0]);
        }
        index++;
    }

    for(let i = 0; i < inputElements.length; i++){
        if(inputElements[i].checked){
            const keyEl = {};
            for(let j = 0; j < rowElements.length; j++){
                keyEl[inputElements[i].getAttribute('name')] = rowElements[j].children[i];
            }
            reportData.push(keyEl);
        }
       
    }
    
}