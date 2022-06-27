function sumTable() {
    let tdElements = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    tdElements = tdElements.slice(0, tdElements.length - 1);
    const costs = [...tdElements.map((a) => Number(a.textContent))];
    console.log(costs);
    const result = costs.reduce((a, b) =>{
        return a + b;
    });

    document.getElementById('sum').textContent = result;
}