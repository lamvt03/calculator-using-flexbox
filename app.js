var monitor = document.querySelector('.monitor');
monitor.innerText = '';

var keyboard = document.querySelectorAll('button');

/**
 * false: append giá trị phím vừa nhấn
 * true: nhấn key bất kỳ => xoá màn hình và hiển thị giá trị phím vừa nhấn
 */
var reset_by_click = false;

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

var record = ['ERROR']; //luu ket qua

//chuc nang phim =
function getResultExpression() {
    let inp = '' + monitor.innerText;
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
    outp = Math.round(outp*100000)/100000;

    if(monitor.innerText = outp){
        reset_by_click = true;
        record.pop();
        record.push(outp);
    }
    
}

//light-dark mode
var mode = document.querySelector('input[name="theme"]');
mode.addEventListener('change', function(){
    if(this.checked == true)
        document.documentElement.setAttribute('data-theme','light');
    else
        document.documentElement.setAttribute('data-theme','dark');

})