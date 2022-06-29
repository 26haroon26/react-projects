function clr() {
    document.getElementById("showCalculation").value = "";
}
function val(value) {
    document.getElementById("showCalculation").value += value;
}
function result() {
    let x = document.getElementById("showCalculation").value;
    let y = eval(x);
    document.getElementById("showCalculation").value = y;
}
document.getElementById("showCalculation").value = "";
function delet() {
    let x = document.getElementById("showCalculation").value;
    let y = x.slice(0, -1);
    document.getElementById("showCalculation").value = y;
}