let el, i;
let data = [
  { comentario: "Está es mi hoja de vida."}
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#comentario").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.comentario}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#comentario").value;
  data = [...data, { comentario: fn}];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#comentario").value = data[i].comentario;
}

function update() {
  data[i].comentario = document.querySelector("#comentario").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

renderItem();