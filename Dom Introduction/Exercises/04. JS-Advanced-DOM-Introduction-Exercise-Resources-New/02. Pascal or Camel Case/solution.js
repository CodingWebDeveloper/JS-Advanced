function solve() {
  const text = document.getElementById('text').value;
  const namingConvantion = document.getElementById('naming-convention').value;
  const resultEl = document.getElementById('result');
  if(namingConvantion == 'Camel Case'){
    let strArray = text.split(' ').map((e, index) =>{
      if(index == 0){
        return e.charAt(0).toLowerCase() + e.slice(1).toLowerCase();
      }
      else{
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      }
    });
    resultEl.textContent = strArray.join('');
  }
  else if(namingConvantion == 'Pascal Case'){
    let strArray = text.split(' ').map(e => e.charAt(0).toUpperCase()+ e.slice(1).toLowerCase());
    resultEl.textContent = strArray.join('');
  }
  else{
    resultEl.textContent = 'Error!'
  }
}