

const eleCalc = document.querySelector(".calc");
eleCalc.addEventListener("click", function() {
    const numKM = document.getElementById("numKM").value; 
    const age = document.getElementById("age").value;

    const prezzo = (numKM * 0.21);
    const prezzoMinore = (numKM * 0.21) - ((numKM * 0.21) * 20 / 100);
    const prezzoOver = (numKM * 0.21) - ((numKM * 0.21) * 40 / 100);

    if (age == "normal") {
        document.getElementById("price").innerHTML = prezzo.toFixed(2);
    }
    if (age == "minorenne") {
        document.getElementById("price").innerHTML = prezzoMinore.toFixed(2);
    }
    if (age == "over") {
        document.getElementById("price").innerHTML = prezzoOver.toFixed(2);
    }
})
