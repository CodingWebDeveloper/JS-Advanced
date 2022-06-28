function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      reset();
      let searchValue = document.getElementById('searchField');
      let trElements = Array.from(document.querySelectorAll('tbody tr'));
      for(const row of trElements){
         if(row.textContent.includes(searchValue.value) && searchValue.value != ''){
            row.classList.add(['select']);
         }
      }
      searchValue.value = '';
   }

   function reset(){
      let trElements = Array.from(document.querySelectorAll('tbody tr'));
      for(const row of trElements){
         row.classList.remove(['select']);
      }
   }
}