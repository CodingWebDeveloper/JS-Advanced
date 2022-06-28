function search() {
   const searchText = document.getElementById('searchText').value;
   const townsHolder = document.getElementById('towns');
   let towns = Array.from(townsHolder.children);
   for(const town of towns){
      town.style.fontWeight = 'normal';
   }
   
   let matches = 0;
   for(const town of towns){
      if(town.textContent.includes(searchText) && searchText != ''){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
   searchText.value = '';
}
