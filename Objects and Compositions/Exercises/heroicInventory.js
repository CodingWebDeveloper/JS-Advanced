function registerHeroes(input){
    let heroes = [];
    input.forEach((entry) =>{
        const [name, level, itemIput] = entry.split(' / ');

        const items = itemIput ? itemIput.split(', ') : [];
        
        const hero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroes.push(hero);
    })

    console.log(JSON.stringify(heroes));
}

const input = ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'];

registerHeroes(input);