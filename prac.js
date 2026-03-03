document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});
function sumar(){
    let a = Number(document.getElementById("s1").value);
    let b = Number(document.getElementById("s2").value);
    document.getElementById("resSuma").innerText = "Resultado: " + (a + b);
}

function restar(){
    let a = Number(document.getElementById("r1").value);
    let b = Number(document.getElementById("r2").value);
    document.getElementById("resResta").innerText = "Resultado: " + (a - b);
}

function multiplicar(){
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    document.getElementById("resMulti").innerText = "Resultado: " + (a * b);
}

function dividir(){
    let a = Number(document.getElementById("d1").value);
    let b = Number(document.getElementById("d2").value);

    if(b === 0){
        document.getElementById("resDiv").innerText = "No se puede dividir entre 0";
    } else {
        document.getElementById("resDiv").innerText = "Resultado: " + (a / b);
    }
}