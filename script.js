const Output = document.getElementById('Output');

function onscreen(num) {
    // Output.value = num;
    // Output.value = Output.value + num;    
    Output.value += num;

}
function clean() {
    Output.value = Output.value.slice(0, -1);

}
function equal() {
    Output.value = eval(Output.value);

}
function Allclear() {
    Output.value = ''

}
console.log(4 + 4);
console.log('4' + '4');
