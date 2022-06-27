function extractText() {
    const listItems = Array.from(document.querySelectorAll('#items li'));
    let result = '';
    for(const listItem of listItems){
        result +=listItem.textContent + '\n';
    }
    document.getElementById('result').textContent = result.trim();
    // TODO
}