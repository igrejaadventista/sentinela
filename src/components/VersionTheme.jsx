import React from "react";
import { useState } from "react";
import { SiteItem } from "./SiteItem";
import { ReferenceItem } from "./ReferenceItem";

export function VersionTheme(props) {
  const sedes = [
    {
      sede: "ucb",
      children: ["apac", "apv", "apl", "apo", "apse", "apso", "aps", "ap"],
    },
    {
      sede: "ucob",
      children: ["abc", "alm", "amt", "aplac", "asm", "mto", "misom"],
    },
    {
      sede: "ulb",
      children: ["ab", "abac", "abn", "abs", "mbs", "ms"],
    },
    {
      sede: "uneb",
      children: ["ace", "ape", "apec", "misal", "mne", "mpi"],
    },
    {
      sede: "unob",
      children: ["aamar", "aamo", "aceam", "asur"],
    },
    {
      sede: "unb",
      children: ["ama", "anpa", "aspa", "asuma", "mnem", "mopa", "mpa"],
    },
    {
      sede: "useb",
      children: [
        "aes",
        "amc",
        "aml",
        "ams",
        "arj",
        "arf",
        "ars",
        "ases",
        "mmn",
        "mmo",
      ],
    },
    {
      sede: "usb",
      children: [
        "ac",
        "acp",
        "acsr",
        "ansr",
        "anc",
        "anp",
        "aop",
        "asp",
        "asr",
      ],
    },
    {
      sede: "ua",
      children: ["aac", "aan", "aas", "abo", "maco", "mano", "mibon-ua"],
    },
    {
      sede: "ub",
      children: ["mbc", "mbo", "mob"],
    },
    {
      sede: "uch",
      children: ["acsch", "amch", "asach", "mcch", "mchp", "mnch", "msmch"],
    },
    {
      sede: "ue",
      children: ["men", "mes"],
    },
    {
      sede: "up",
      children: [],
    },
    {
      sede: "upn",
      children: ["anop", "apce", "micop", "mno", "mpn"],
    },
    {
      sede: "ups",
      children: ["apc", "mac", "mlt", "mop", "mpcs", "mps", "msop"],
    },
    {
      sede: "uu",
      children: [],
    },
  ];

  const [version, setVersion] = useState([]);

  function Reference(ref) {
    setVersion({
      parent: ref.parent,
      child: ref.child,
    });
  }

  return (
    <>
      <h1>Theme versions</h1>
      <table>
        <thead>
          <ReferenceItem getReference={Reference} />
        </thead>
        <tbody>
          {sedes.map((item) => {
            return (
              <React.Fragment key={`${item.sede}`}>
                <SiteItem site={item.sede} version={version} />
                {item.children.map((children) => (
                  <SiteItem
                    key={children}
                    site={children}
                    children={true}
                    version={version}
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
