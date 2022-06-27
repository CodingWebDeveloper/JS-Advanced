function createSortedList(){
    const sortedList = {
        elements: [],
        add: function(element){
            this.elements.push(element);
            this.elements.sort((a, b) =>{
                return a - b;
            });

            this.size +=1;
        },
        remove: function(index){
            
            if(index >= 0 && index < this.elements.length){
                this.elements.splice(index, 1);
            }

            this.size -=1;
        },
        get: function(index){
            this.elements.sort((a, b) =>{
                return a - b;
            });

            if(index >= 0 && index < this.elements.length){
                return this.elements[index];
            }
        },
        size: 0
    }

    return sortedList;
}

let list = createSortedList();
list.add(6);
list.add(5);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

