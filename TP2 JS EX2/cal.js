const x = document.getElementById("x");
const y = document.getElementById("y");
const op = document.getElementById("op");
const res = document.getElementById("res");
function calculer() {
    init()
    test=true
    if (x.value === "") {
        x.parentElement.querySelector(".error").textContent="saisir la valeur de x";
        test=false;
    }
    if (y.value === "") {
        y.parentElement.querySelector(".error").textContent="saisir la valeur de y";
        test=false;
    }
    if (op.value == "/" && y.value === "0") {
        res.innerText="division par 0";
        test=false;
    }
    if (test) {
        switch (op.value) {
            case '+':
                r=parseInt(x.value)+parseInt(y.value);
                break;
            case '-':
                r=parseInt(x.value)-parseInt(y.value);
                break;
            case '*':
                r=parseInt(x.value)*parseInt(y.value);
                break;
            case '/':
                r=parseInt(x.value)/parseInt(y.value);
                break;
    }
    res.textContent="le resultat : " + r;
    }
    
}
function init() {
    document.querySelectorAll(".error").forEach((e)=>e.textContent="");
    document.getElementById("res").innerText="";
}