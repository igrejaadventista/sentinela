import { useState, useEffect } from "react";

const siteNames = {
  // União Argentina
  ua: "União Argentina",
  aac: "Associação Argentina Central",
  aan: "Associação Argentina do Norte",
  aas: "Associação Argentina do Sul",
  abo: "Associação Bonaerense",
  maco: "Missão Argentina do Centro-Oeste",
  mano: "Missão Argentina do Noroeste",
  mibon: "Missão Bonaerense do Norte",

  // União Boliviana
  ub: "União Boliviana",
  mbc: "Missão Boliviana Central",
  mbon: "Missão Boliviana Ocidental Norte",
  mbos: "Missão Boliviana Ocidental Sul",
  mob: "Missão do Oriente Boliviano",

  // União Central Brasileira
  ucb: "União Central Brasileira",
  apac: "Associação Paulista Central",
  apv: "Associação Paulista do Vale",
  apl: "Associação Paulista Leste",
  apo: "Associação Paulista Oeste",
  apse: "Associação Paulista Sudeste",
  apso: "Associação Paulista Sudoeste",
  aps: "Associação Paulista Sul",
  ap: "Associação Paulistana",

  // União Centro-Oeste Brasileira
  ucob: "União Centro-Oeste Brasileira",
  abc: "Associação Brasil Central",
  alm: "Associação Leste Mato-Grossense",
  aplac: "Associação Planalto Central",
  asm: "Associação Sul-Mato-Grossense",
  aom: "Associação Oeste Mato-Grossense",
  mto: "Missão do Tocantins",

  // União Equatoriana
  ue: "União Equatoriana",
  men: "Missão Equatoriana do Norte",
  mes: "Missão Equatoriana do Sul",

  // União Leste Brasileira
  ulb: "União Leste Brasileira",
  ab: "Associação Bahia",
  abac: "Associação Bahia Central",
  abn: "Associação Bahia Norte",
  abs: "Associação Bahia Sul",
  mbso: "Missão Bahia do Sudoeste",
  mibes: "Missão Bahia Extremo Sul",
  mse: "Missão Sergipe",

  // União Nordeste Brasileira
  uneb: "União Nordeste Brasileira",
  ace: "Associação Cearense",
  ape: "Associação Pernambucana",
  apec: "Associação Pernambucana Central",
  misal: "Missão Alagoas",
  mpi: "Missão Piauiense",
  mrp: "Missão Rio Grande do Norte-Paraíba",

  // União Noroeste Brasileira
  unob: "União Noroeste Brasileira",
  aamar: "Associação Amazonas-Roraima",
  anra: "Associação Norte de Rondônia e Acre",
  aceam: "Associação Central Amazonas",
  asur: "Associação Sul de Rondônia",
  mla: "Missão Leste Amazonas",

  // União Norte-Brasileira
  unb: "União Norte-Brasileira",
  ama: "Associação Maranhense",
  anpa: "Associação Norte do Pará",
  aspa: "Associação Sul do Pará",
  mnem: "Missão Nordeste Maranhense",
  mpa: "Missão Pará-Amapá",
  mopa: "Missão Oeste do Pará",
  asuma: "Associação Sul-Maranhense",

  // União Paraguaia
  up: "União Paraguaia",

  // União Peruana do Norte
  upn: "União Peruana do Norte",
  anop: "Associação Norte-Pacífico do Peru",
  apce: "Associação Peruana Central Este",
  micop: "Missão Centro-Oeste do Peru",
  minop: "Missão Norte-Oriental do Peru",
  mpn: "Missão Peruana do Norte",

  // União Peruana do Sul
  ups: "União Peruana do Sul",
  apc: "Associação Peruana Central",
  apsur: "Associação Peruana do Sul",
  mcp: "Missão Central do Peru",
  mop: "Missão do Oriente Peruano",
  mpcs: "Missão Peruana Central Sul",
  mplt: "Missão Peruana do Lago Titicaca",
  msop: "Missão Sul-Oriental do Peru",

  // União Sudeste Brasileira
  useb: "União Sudeste Brasileira",
  aes: "Associação Espírito-Santense",
  amc: "Associação Mineira Central",
  aml: "Associação Mineira Leste",
  ams: "Associação Mineira Sul",
  arj: "Associação Rio de Janeiro",
  ars: "Associação Rio Sul",
  arf: "Associação Rio-Fluminense",
  ases: "Associação Sul-Espírito-Santense",
  mmn: "Missão Mineira Norte",
  mmo: "Missão Mineira Oeste",

  // União Uruguaia
  uu: "União Uruguaia"
};

export function SiteItem(props) {
  const [info, setInfo] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch(`https://api.adventistas.dev/get-theme-version?s=${props.site}`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log("Deu ruim"));
  }, []);

  useEffect(() => {
    if (props.searchTerm) {
      const searchValue = props.searchTerm.toLowerCase();
      const headquarter = info?.headquarter?.toLowerCase() || '';
      const site = props.site.toLowerCase();
      const fullName = siteNames[props.site]?.toLowerCase() || '';
      
      setIsVisible(
        headquarter.includes(searchValue) || 
        site.includes(searchValue) ||
        fullName.includes(searchValue)
      );
    } else {
      setIsVisible(true);
    }
  }, [props.searchTerm, info]);

  if (!isVisible) return null;

  return (
    <tr>
      <td>
        <a
          href={`http://${props.site}.adventistas.org`}
          target="_blank"
          className={props?.children && "children"}
        >
          {info?.headquarter
            ? props.children 
              ? `${props.site} - ${siteNames[props.site] || props.site}`
              : info.headquarter
            : info?.errorMessage
              ? `${props.site} - falha  `
              : `Carregando...`}
        </a>
      </td>
      <td className={props?.version?.parent == info?.parent ? "ok" : ""}>
        <a
          href={`http://${props.site}.adventistas.org/wp-content/themes/pa-theme-sedes/style.css`}
          target="_blank"
          className={props?.children && "children"}
        >
          {info?.parent} {props?.version?.parent == info?.parent && "✅"}
        </a>
      </td>
      <td className={props?.version?.child == info?.child ? "ok" : ""}>
        <a
          href={`http://${props.site}.adventistas.org/wp-content/themes/pa-theme-sedes-child/style.css`}
          target="_blank"
          className={props?.children && "children"}
        >
          {info?.child} {props?.version?.child == info?.child && "✅"}
        </a>
      </td>
    </tr>
  );
}
