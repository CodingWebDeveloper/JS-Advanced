function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const input = document.querySelector('#inputs textarea');
      const parsedJson = JSON.parse(input.value);

      let restaurants = [];
      for(const restaurantInput of parsedJson){
         const [restaurantName, workersInput] = restaurantInput.split(' - ');
         const workers = workersInput.split(', ');
         if(!restaurants.find(r => r.name == restaurantName )){
            restaurants.push(createResturant(restaurantName, workers));
         }
         else{
            for(const worker of workers){
               const [name, salary] = worker.split(' ');
               restaurants.find(r => r.name).workers.push(createWorker(name, salary));
            }
         }
      }

      for(let i = 0; i < restaurants.length; i++){
         let rest = restaurants[i];
         rest.avgSalary = Number(calcAvgSalary(rest.workers.map(e => e.salary)));
      }

      const bestRestaurant = restaurants.sort((a, b) => {
         return b.avgSalary - a.avgSalary;
      })[0];

      const sortedWorkers = bestRestaurant.workers.sort((a,b) =>{
         return b.salary - a.salary;
      })

      const bestSalary = sortedWorkers[0].salary;

      document.querySelector('#outputs #bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      document.querySelector('#outputs #workers p').textContent = sortedWorkers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }

   function createResturant(name, workers){
      const restaurant = {
         name,
         workers: []
      };

      for(const worker of workers){
         const [name, salary] = worker.split(' ');
         restaurant.workers.push(createWorker(name, salary));
      }

      return restaurant;
   }

   function createWorker(name, salary){
      const worker = {
         name: name,
         salary: Number(salary)
      }

      return worker;
   }

   function calcAvgSalary(salaries){
      return salaries.reduce((prevValue, currentValue) =>{
         return prevValue + currentValue;
      }) / salaries.length;
   }
}