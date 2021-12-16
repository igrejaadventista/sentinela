process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();

async function getUrls() {
  var itens = [];

  itens.push(
    await get(
      "https://tax.adventistas.org/pt/wp-json/wp/v2/xtt-pa-sedes?_fields=slug&per_page=150"
    )
  );
  itens.push(
    await get(
      "https://tax.adventistas.org/es/wp-json/wp/v2/xtt-pa-sedes?_fields=slug&per_page=150"
    )
  );

  const pt = itens[0].map((item) => {
    return [
      `http://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes/style.css`,
      // `http://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes-child/style.css`,
    ];
  });

  const es = itens[1].map((item) => {
    return [
      `http://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes/style.css`,
      // `http://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes-child/style.css`,
    ];
  });

  return [...pt, ...es];
}

async function get(url) {
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
}

async function getReferencia(url) {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      const movies = await response.text();
      const file = movies.split("\n");
      if (file[5]) {
        const check = file[5].split(" ");
        return check[1];
      } else {
        return "Deu ruim aqui";
      }
    } else {
      return "Não encontrado referencia";
    }
  } catch {
    return "Problema ao pegar a referencia";
  }
}

async function getRef() {
  const ref_1 = await getReferencia(
    "https://raw.githubusercontent.com/igrejaadventista/pa-theme-sedes/master/assets/scss/style.scss"
  );

  const ref_2 = await getReferencia(
    "https://raw.githubusercontent.com/igrejaadventista/pa-theme-sedes-child/master/assets/scss/style.scss"
  );

  return Promise.all([ref_1, ref_2]).then((values) => {
    return values;
  });
}

async function getFile(url) {
  try {
    const sede = await fetch(url);
    if (sede.status == 200) {
      const movies = await sede.text();
      const file = movies.split("\n");
      if (file[5]) {
        const check = file[5].split(" ");
        return check[1];
      } else {
        return "Deu Ruim";
      }
    } else {
      return "Não encontrado";
    }
  } catch {
    return "Problema no fetch";
  }
}

async function geral() {
  const urls = await getUrls();

  const items = await Promise.all(
    urls.map(async (url) => {
      const version_1 = await getFile(url[0]);
      const version_2 = await getFile(url[1]);
      return [
        { status: version_1, site: url[0] },
        { status: version_2, site: url[1] },
      ];
    })
  );

  //console.table(items);

  return items;
}

function formatHml(itens, ref) {
  var page =
    "<!doctypehtml><style>a{text-decoration: none;}.erro{background-color: #ff6161;}.ok{background-color: #93ff93;}table{font-family:arial,sans-serif;border-collapse:collapse;}td,th{border:1px solid #ddd;text-align:left;padding:8px}tr:nth-child(even){background-color:#ddd}</style>";

  page += `<div style='display: flex; justify-content: center;'><table><tr><th>Sedes: ${ref[0]}</th><th>Child: ${ref[1]}</th><th>Site</th></tr>`;

  itens.map((item) => {
    var info = item[0].site.split("/wp-");

    page += ` <tr>
                <td class="${ref[0] != item[0].status ? "erro" : "ok"}">
                  <a href="${item[0].site}" target="_blank">
                    ${item[0].status}
                  </a>
                </td>
                <td class="${ref[1] != item[1].status ? "erro" : "ok"}">
                  <a href="${item[1].site}" target="_blank">
                    ${item[1].status}
                  </a>
                </td>
                <td>
                  ${info[0]}
                </td>
              </tr>`;
  });

  page += "</table></div></body></html>";

  return page;
}

router.get("/", async (req, res) => {
  const ref = await getRef();
  const itens = await geral();
  const log = formatHml(itens, ref);

  //console.log(log);

  try {
    res.set("Content-Type", "text/html");
    res.send(log);
  } catch {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
