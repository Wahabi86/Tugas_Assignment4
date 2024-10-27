const btnEdit = document.getElementById("btn-edit");
const btnSubmit = document.getElementById("btn-submit");
const form = document.getElementById("form"); //select untuk form

// untuk hide and show btn edit
btnEdit.addEventListener("click", () => {
  if (form.style.display === "flex") {
    form.style.display = "none";
  } else {
    form.style.display = "flex";
  }
});

// logic btn submit
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  form.style.display = "none";

  const inputNama = document.getElementById("form-nama");
  const inputRole = document.getElementById("form-role");
  const inputAvailbility = document.getElementById("form-availbility");
  const inputUsia = document.getElementById("form-usia");
  const inputLokasi = document.getElementById("form-lokasi");
  const inputPengalaman = document.getElementById("form-pengalaman");
  const inputEmail = document.getElementById("form-email");

  const objectValue = {
    nama: inputNama.value,
    role: inputRole.value,
    availbility: inputAvailbility.value,
    usia: inputUsia.value,
    lokasi: inputLokasi.value,
    pengalaman: inputPengalaman.value,
    email: inputEmail.value,
  };

  localStorage.setItem("data", JSON.stringify(objectValue));

  renderData();

  document.getElementById("form-nama").value = "";
  document.getElementById("form-role").value = "";
  document.getElementById("form-availbility").value = "";
  document.getElementById("form-usia").value = "";
  document.getElementById("form-lokasi").value = "";
  document.getElementById("form-pengalaman").value = "";
  document.getElementById("form-email").value = "";
});

function renderData() {
  const data = localStorage.getItem("data");
  const parseData = JSON.parse(data);

  const nama = document.getElementById("nama");
  const role = document.getElementById("role");
  const availbility = document.getElementById("availbility");
  const usia = document.getElementById("usia");
  const lokasi = document.getElementById("lokasi");
  const pengalaman = document.getElementById("pengalaman");
  const email = document.getElementById("email");

  nama.innerHTML = parseData.nama;
  role.innerHTML = parseData.role;
  availbility.innerHTML = parseData.availbility;
  usia.innerHTML = parseData.usia;
  lokasi.innerHTML = parseData.lokasi;
  pengalaman.innerHTML = parseData.pengalaman;
  email.innerHTML = parseData.email;
}

renderData();