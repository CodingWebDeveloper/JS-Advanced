function colorize() {
    const trElements = document.querySelectorAll('tr:nth-of-type(2n)');
    for(const trEl of trElements){
        trEl.style.backgroundColor = 'Teal';
    }
}