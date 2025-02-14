import React from "react";
import { useState } from "react";
import { SiteItem } from "./SiteItem";
import { ReferenceItem } from "./ReferenceItem";

export function VersionTheme(props) {
  const sedes = [
    {
      sede: "ua",
      children: ["aac","aan","aas","abo","maco","mano","mibon"]
    },
    {
      sede: "ub",
      children: ["mbc", "mbon","mbos", "mob"],
    },
    {
      sede: "ucb",
      children: ["apac", "apv", "apl", "apo", "apse", "apso", "aps", "ap"],
    },
    {
      sede: "ucob",
      children: ["abc", "alm", "aplac", "asm", "aom", "mto"],
    },
    {
      sede: "uch",
      children: ["acsch", "amch", "mcch", "mchp", "anch", "asach", "msmch"],
    },
    {
      sede: "ue",
      children: ["men", "mes"],
    },
    {
      sede: "ulb",
      children: ["ab", "abac", "abn", "abs", "mbso", "mibes", "mse"],
    },
    {
      sede: "uneb",
      children: ["ace", "ape", "apec", "misal", "mpi", "mrp",],
    },
    {
      sede: "unob",
      children: ["aamar", "anra", "aceam", "asur", "mla"],
    },
    {
      sede: "unb",
      children: ["ama", "anpa", "aspa", "mnem", "mpa", "mopa", "asuma"],
    },
    {
      sede: "up",
      children: [],
    },
    {
      sede: "upn",
      children: ["anop", "apce", "micop", "minop", "mpn"],
    },
    {
      sede: "ups",
      children: ["apc", "apsur", "mcp", "mop", "mpcs", "mplt", "msop"],
    },
    {
      sede: "useb",
      children: ["aes", "amc", "aml", "ams", "arj", "ars", "arf", "ases", "mmn", "mmo"],
    },
    {
      sede: "usb",
      children: ["ac", "acp", "acsr", "anc", "anp", "ansr", "asp", "asr", "aop"],
    },
    {
      sede: "uu",
      children: [],
    },
  ];

  const [version, setVersion] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function Reference(ref) {
    setVersion({
      parent: ref.parent,
      child: ref.child,
    });
  }

  return (
    <>
      <h1>Theme versions</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar sede..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <table>
        <thead>
          <ReferenceItem getReference={Reference} />
        </thead>
        <tbody>
          {sedes.map((item) => {
            return (
              <React.Fragment key={`${item.sede}`}>
                <SiteItem 
                  site={item.sede} 
                  version={version} 
                  searchTerm={searchTerm}
                />
                {item.children.map((children) => (
                  <SiteItem
                    key={children}
                    site={children}
                    children={true}
                    version={version}
                    searchTerm={searchTerm}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
