const numKM = document.getElementById("numKM").value; 
const age = document.getElementById("age").value;

const prezzo = (numKM * 0.21);
const prezzoMinore = (numKM * 0.21) - ((numKM * 0.21) * 20 / 100);
const prezzoOver = (numKM * 0.21) - ((numKM * 0.21) * 40 / 100);