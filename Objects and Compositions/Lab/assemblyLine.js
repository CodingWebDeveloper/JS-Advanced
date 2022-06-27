function createAssemblyLine(){
    const assemblyLine = {
        hasClima: function(object){
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function(){
                if(this.temp < this.tempSettings){
                    this.temp += 1;
                }
                else if(this.temp > this.tempSettings){
                    this.temp -= 1;
                }
            };
        },
        hasAudio: function(object){
            object.currentTrack = null;
            object.nowPlaying = function(){
                if(this.currentTrack != null){
                    console.log(`Now playing '${this.currentTrack.name} by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function(object){
            object.checkDistance = function(distance){
                if(distance< 0.1){
                    console.log("Beep! Beep! Beep!");
                }
                else if(distance >= 0.1 &&
                        distance < 0.25){
                            console.log("Beep! Beep!");
                }
                else if(distance >= 0.25 &&
                    distance < 0.5){
                        console.log("Beep!");
                }
                else{
                    console.log("");
                }
            }
        }
        
    };

    return assemblyLine;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};

myCar.nowPlaying();


assemblyLine.hasParktroonic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);