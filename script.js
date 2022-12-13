function color(){
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    let rgbValue = document.getElementById('rgbValue')
    let value = document.querySelectorAll('.value')

    document.body.style.backgroundColor =`rgb(${red.value},${green.value},${blue.value})`
    rgbValue.textContent =`rgb(${red.value},${green.value},${blue.value})`
    value[0].textContent =red.value
    value[1].textContent =green.value
    value[2].textContent =blue.value

    
    
}

