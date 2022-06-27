function heroFactory(){
    // const canFight = (state) =>({
    //     fight: () =>{
    //         console.log(`${state.name} slashes at the foe!`);
    //         state.stamina--;
    //     }
    // })

    // const canCast = (state) =>({
    //     cast: (spell) => {
    //         console.log(`${state.name} cast ${spell}`)
    //         state.mana--;
    //     }
    // })
    const mage = function(name){
        let mage = {
            name: name,
            health: 100,
            mana: 100,
            cast: function(spell){
                console.log(`${this.name} cast ${spell}`)
                this.mana--;
            }
        }

        return mage;
    }

    const fighter = function(name){
        let fighter = {
            name: name,
            health: 100,
            stamina: 100,
            fight: function(){
                console.log(`${this.name} slashes at the foe!`);
                this.stamina--;
            }
        }

        return fighter;
    }

    return {mage: mage, fighter: fighter};
}

let create = heroFactory();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
