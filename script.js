const syntymapaiva = new Date(2003, 11, 9);

const tanaan = new Date();

let ika = tanaan.getFullYear() - syntymapaiva.getFullYear();

const syntymapaivaTanaVuonna = new Date(
    tanaan.getFullYear(),
    syntymapaiva.getMonth(),
    syntymapaiva.getDate()
);

if (tanaan < syntymapaivaTanaVuonna) {
    ika--;
}

document.getElementById("ika").textContent =
    "Olen " + ika + "-vuotias opiskelija.";

const nappi = document.getElementById("tervehdysNappi");
const tervehdys = document.getElementById("tervehdys");

nappi.addEventListener("click", function () {
    tervehdys.textContent =
        "Hei, kiva kun vierailit portfoliossani!";
});
