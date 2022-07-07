function iq_test() {
    var result = '';
    const form = document.forms.iq;
    const checkedIQ = form.querySelector('input[name=iq]:checked');

    if (checkedIQ.value == 1)
        result = '220';
    else
        result = '5';

    const textResult = document.getElementById('iqResult');
    textResult.innerText = 'Ваш IQ: ' + result;
}
