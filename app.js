var monitor = document.querySelector('.monitor');
monitor.innerText = '';

var keyboard = document.querySelectorAll('button');

var reset_by_click = false;  //false: gia tri them vao man hinh - true: reset man hinh bang gia tri

for (let button of keyboard) {
    if (button == document.querySelector('#equal-operator')
      ||button == document.querySelector('#del-operator'))
        continue;
    else {
        button.addEventListener("click", function () {
            if (!reset_by_click)
                monitor.innerText += this.value;
            else
                monitor.innerText = this.value;
            reset_by_click = false;
        })
    }
}

//chuc nang phim ac
function clearMonitor() {
    monitor.innerHTML = '';
}

//chuc nang phim del
function clearOneEndChar() {
    let str = monitor.innerHTML;
    str = str.substring(0, str.length - 1);
    monitor.innerHTML = str;
}

var record = ['']; //luu ket qua

//chuc nang phim =
function getResultExpression() {
    let inp = '' + monitor.innerText;
    if (inp != '')
        reset_by_click = true;
    let outp = null;

    if (inp.includes('π'))
        inp = inp.replace('π', Math.PI.toString());
    if (inp.includes('ANS'))
        inp = inp.replace('ANS', record[record.length - 1].toString());
    if (inp.includes('÷'))
        inp = inp.replace('÷', '/');
    if (inp.includes('×'))
        inp = inp.replace('×', '*');
    outp = eval(inp);
    record.push(outp);
    monitor.innerText = outp;
}

//light-dark mode
var mode = document.querySelector('input[name="theme"]');
mode.addEventListener('change', function(){
    if(this.checked == true)
        document.documentElement.setAttribute('data-theme','light');
    else
        document.documentElement.setAttribute('data-theme','dark');

})