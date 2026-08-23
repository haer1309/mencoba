console.log("DailyBoard Siap Dijalankan");
const app = document.getElementById("app");

const judul = document.createElement("h2");
const tugas = document.createElement("h3");
const tombol = document.createElement("button");
const input = document.createElement("input");

const catatan = document.createElement("h3");
const cuaca = document.createElement("h3");
judul.textContent = "Selamat Datang Di DailyBoard";
tugas.textContent = "Tugas:";
tombol.textContent = "Tambah Tugas";
tombol.addEventListener("click", () => {
    alert("Tombol berhasil diklik!");
});
input.addEventListener("input", (e) => {
    console.log("Nilai input:", e.target.value);
});
catatan.textContent = "Catatan";
cuaca.textContent = "Cuaca";
app.appendChild(judul);
app.appendChild(tugas);
app.appendChild(tombol);
app.appendChild(input);
app.appendChild(catatan);
app.appendChild(cuaca);
judul.style.color = "#083596";


let daftarTugas = [
    {id: 1, nama: "Belajar JavaScript", selesai: false },
    {id: 2, nama: "Olahraga Pagi", selesai: false },
];

function renderTugas() {
    const list = document.getElementById("daftar-tugaas");
    list.innerHTML = "";

    daftarTugas.forEach((tugas) => {
        const li = document.createElement("li");
        li.textContent  = tugas.nama;
        list.appendChild(li);
    })
}

renderTugas();

let nextId =3;

function tambahTugas(nama) {
  daftarTugas.push({ id: nextId++, nama, selesai: false });
  simpanKeStorage();
  renderTugas();
}

 hapusTugas(id) {
    daftarTugas = daftarTugas.filter((t) => t.id !== id);
    renderTugas();
}
function renderTugas() {
    const list = document.getElementById(daftar-tugas);
    list.innerHTML = "";

    daftarTugas.forEach((tugas) => {
        const li = document.createElement("li");
        li.textContent = tugas.nama;

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.addEventListener("click", () => hapusTugas(tugas.id));

        li.functionappendChild(tombolHapus);
        list.appendChild(li);
    })
}