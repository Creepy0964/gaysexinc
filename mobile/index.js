function clear(name) {
    var ele = document.getElementsByName(name);
    for(var i=0;i<ele.length;i++)
    {
        ele[i].checked = false;
    }        
}

function group() {
    const result = document.getElementById('typeResult');
    clear("intro");
    clear("intuitive");
    clear("think");
    clear("project");
    result.innerText = 'Ваш тип: ';
}

function mbti() {
    var text1 = '';
    var text2 = '';
    var text3 = '';
    var text4 = '';

    const form = document.forms.test;
    const checked1 = form.querySelector('input[name=intro]:checked');
    const checked2 = form.querySelector('input[name=intuitive]:checked');
    const checked3 = form.querySelector('input[name=think]:checked');
    const checked4 = form.querySelector('input[name=project]:checked');

    if(checked1.value == 1) text1 = 'I';
    else text1 = 'E';

    if(checked2.value == 1) text2 = 'N';
    else text2 = 'S';

    if(checked3.value == 1) text3 = 'T';
    else text3 = 'F';

    if(checked4.value == 1) text4 = 'J';
    else text4 = 'P';

    var textResult = text1 + text2 + text3 + text4;

    const result = document.getElementById('typeResult');
    result.innerText = 'Ваш тип: ' + textResult;
}