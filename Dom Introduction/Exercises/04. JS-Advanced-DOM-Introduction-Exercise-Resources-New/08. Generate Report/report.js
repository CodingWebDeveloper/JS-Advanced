function generateReport() {
    const inputElements = Array.from(document.querySelectorAll('tr th input'));
    const rowElements = Array.from(document.querySelectorAll('tr')).slice(1);
    const reportData = [];
    const checkedEls = [];

    for(let i = 0; i < inputElements.length; i++){
        if(inputElements[i].checked){
            checkedEls.push({
                key: inputElements[i].getAttribute('name'),
                index: i
            });
        }
    }

    for(let i = 0; i < rowElements.length; i++){
        let obj = {};
        const children = rowElements[i].children;
        for(let j = 0; j < checkedEls.length; j++){
            obj[checkedEls[j].key] = children[checkedEls[j].index].textContent;
        }
        reportData.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(reportData);
}

// we have checked inputs,
// we have all rows
// we need to create object that holds as key checked inputs with data from row
//foreach checkedEls and create object with the attribute name