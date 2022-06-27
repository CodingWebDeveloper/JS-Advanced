function fromJSONToHTMLTable(input){
    const parsedJson = JSON.parse(input);
    const keys = Object.keys(parsedJson[0]);
    let tableContent = '';
    let tableHeading = '';

    keys.forEach((key) =>{
        let content = `<th>${key}</th>`;
        tableHeading +=content;
    })

    tableHeading =`   <tr>${tableHeading}</tr>`;

    parsedJson.forEach((entry) =>{
        let content = '';
        keys.forEach((key) =>{
            content +=`<td>${entry[key]}</td>`;
        })
        tableContent += `   <tr>${content}</tr>\n`;
    })

    let table = `<table>\n${tableHeading}\n${tableContent}</table>`;

    console.log(table);
}

const input = `[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`;

fromJSONToHTMLTable(input);