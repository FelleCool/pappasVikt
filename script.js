document.addEventListener('DOMContentLoaded', tabelRows())


const vikt = document.getElementById("number");

function save() {
    try {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const date = `${month}-${day}-${year}`;
        console.log(date);
        
        localStorage.setItem(date, vikt.value);
    } catch (error) {
        console.log(error);
        
    }
    tabelRows()

}


function tabelRowData(date, vik) {
    console.log("tabelRowData", date, vik)
    const tabel = document.querySelector(".tabel");

    const tr = document.createElement("tr");

    let tdDate = document.createElement("td");
    tdDate.textContent = date;
    tr.appendChild(tdDate);

    let tdVikt = document.createElement("td");
    tdVikt.textContent = vik;
    tr.appendChild(tdVikt);

    tabel.appendChild(tr);
}

function tabelRows() {
    const tabel = document.querySelector(".tabel");
    tabel.innerHTML = ""

    for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
    tabelRowData(key, value);
    }
}