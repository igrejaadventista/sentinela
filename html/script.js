async function get(url, type = "json") {
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    const data = await response[type]();

    return data;
  } catch {
    console.log("Erro no fatch");
    return false;
  }
}

function set_html(oque, onde) {
  const e = document.getElementById(onde);
  e.innerHTML = oque;
}

function monta_tabela(data) {
  data.map((item, index) => {
    console.log(item);
    monta_linha(item);
  });
}

function monta_linha(item) {
  var tabela = document.getElementById("tabela");
  var tr = document.createElement("tr");

  var d1 = document.createElement("td");
  var c1 = document.createTextNode(item.v_sedes);
  d1.appendChild(c1);
  tr.appendChild(d1);

  var d2 = document.createElement("td");
  var c2 = document.createTextNode(item.v_sedes);
  d2.appendChild(c2);
  tr.appendChild(d2);

  var d3 = document.createElement("td");
  var c3 = document.createTextNode(item.site);
  d3.appendChild(c3);
  tr.appendChild(d3);

  tabela.appendChild(tr);
}

function insert_html(value, teg, onde, id = false) {
  var elemento = document.createElement(teg);

  if (id) {
    elemento.setAttribute("id", id);
  }

  var conteudo = document.createTextNode(value);

  elemento.appendChild(conteudo);

  var insert = document.getElementById(onde);
  insert.appendChild(elemento);
  //document.body.insertBefore(elemento, insert);
}

async function get_referencia() {
  const ref_sedes = await get(
    "https://raw.githubusercontent.com/igrejaadventista/pa-theme-sedes/master/assets/scss/style.scss",
    "text"
  );

  const sedes = ref_sedes.split("\n");
  const ref_1 = sedes[5].split(" ");

  set_html(`Versão: ${ref_1[1]}`, "ref_1");

  const ref_child = await get(
    "https://raw.githubusercontent.com/igrejaadventista/pa-theme-sedes-child/master/assets/scss/style.scss",
    "text"
  );

  const child = ref_child.split("\n");
  const ref_2 = child[5].split(" ");

  set_html(`Versão: ${ref_2[1]}`, "ref_2");

  return { sedes: ref_1, child: ref_2 };
}

async function get_sites() {
  var length = document.querySelectorAll("tr").length;

  var data = [];

  if (length <= 1) {
    data = await get(`http://localhost:8080/api/site?page=1&per_page=1`);
  } else {
    var page = length;
    data = await get(`http://localhost:8080/api/site?page=${page}&per_page=1`);
  }

  console.log(length);

  if (data) {
    monta_tabela(data);
  }

  if (length == 10) {
    clearInterval(get_sites);
  }
}

function loop() {
  setInterval(get_sites, 2000);
}

loop();
