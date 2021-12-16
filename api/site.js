process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const router = express.Router();

async function get(url, type = "json") {
  try {
    const response = await fetch(url);

    if (response.status == 200) {
      const data = await response[type]();
      return data;
    } else {
      return false;
    }
  } catch {
    console.log("Erro no facht");
    return false;
  }
}

async function get_sites(quantidade, page = 1) {
  const data_pt = await get(
    `https://tax.adventistas.org/pt/wp-json/wp/v2/xtt-pa-sedes?_fields=slug&per_page=${quantidade}&page=${page}`
  );

  const data_es = await get(
    `https://tax.adventistas.org/es/wp-json/wp/v2/xtt-pa-sedes?_fields=slug&per_page=${quantidade}&page=${page}`
  );

  const data = [...data_pt, ...data_es].map((item) => {
    return {
      sedes: `https://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes/style.css`,
      child: `https://${item.slug}.adventistas.org/wp-content/themes/pa-theme-sedes-child/style.css`,
      site: `https://${item.slug}.adventistas.org`,
    };
  });

  return [...data];
}

async function get_vercoes(quantidade, page) {
  const sites = await get_sites(quantidade, page);

  const vercoes = await Promise.all(
    sites.map(async (item) => {
      const sedes = await get(item.sedes, "text");

      if (sedes) {
        const linhas = sedes.split("\n");

        const vercao = linhas[5].split(" ")[1];
        item.v_sedes = vercao;
      } else {
        item.v_sedes = "Não encontrado";
      }

      const child = await get(item.child, "text");

      if (child) {
        const linhas = child.split("\n");

        const vercao = linhas[5].split(" ")[1];
        item.v_child = vercao;
        return item;
      } else {
        item.v_child = "Não encontrado";
        return item;
      }
    })
  );

  return vercoes;
}

router.get("/", async (req, res) => {
  const page = req.query.page;
  const per_page = req.query.per_page;
  const data = await get_vercoes(per_page, page);

  try {
    res.set("Content-Type", "text/html");
    res.send(data);
  } catch {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
