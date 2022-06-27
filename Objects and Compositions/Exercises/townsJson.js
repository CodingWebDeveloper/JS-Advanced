function createJSONFromTable(input){
    let townItems = [];
    input.slice(1).forEach(entry =>{
        let [town, latitude, longitude] = entry.substring(2, entry.length - 2).split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townItems.push({
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        });
    })
    const jsonTownItems = JSON.stringify(townItems);
    console.log(jsonTownItems);
}

    
const input = ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

createJSONFromTable(input);