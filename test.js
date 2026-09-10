function plus() {
    let x = Number(document.getElementById('num1').value);
    let y = Number(document.getElementById('num2').value);

    document.getElementById('showX').innerText = x + y;
}