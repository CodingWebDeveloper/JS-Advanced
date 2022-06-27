function extract(content) {
    const paraContent = document.getElementById(content);
    // regex extarcts (content), but returns (content
    const extracts = Array.from(paraContent.textContent.matchAll(/[(][(\w \s]*[^)]/g), m=> m[0]);
    let result = '';
    for(let i= 0; i < extracts.length; i++){
        const extract = extracts[i].replace('(','');
        if(i != extracts.length - 1){
            result += extract + '; ';
        }else{
            result += extract;
        }
    }

    return result;
}