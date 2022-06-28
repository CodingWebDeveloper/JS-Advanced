function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentences = input.value.split('. ').filter(function(value){
    return value != '';
  });

  let result = '';
  let increaser;
  for(let i = 0; i < sentences.length; i += increaser){
    if(sentences.length - i >=3){
      increaser = 3;
    }
    else{
      increaser = sentences.length - i;
    }

    let end = i + increaser;

    const firstThreeSentences = [...sentences.slice(i, end)];
    let content = '';
    for(const sentence of firstThreeSentences){
      if(sentence[sentence.length - 1] !='.'){
        content +=sentence + '. '; 
      }
      else{
        content += sentence;
      }
    }

    result += `<p> ${content} </p> \n`;
  }
  
  output.innerHTML = result;
}