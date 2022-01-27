import { useState, useEffect } from "react";

export function SiteItem(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.adventistas.dev/get-theme-version?s=${props.site}`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log("Deu ruim"));
  }, []);

  return (
    <tr>
      <td>
        <a
          href={`http://${props.site}.adventistas.org`}
          target="_blank"
          className={props?.children && "children"}
        >
          {info?.headquarter
            ? info.headquarter
            : info?.errorMessage
            ? `${props.site} - falha  `
            : `Carregando...`}
        </a>
      </td>
      <td className={props?.version?.parent == info?.parent ? "ok" : ""}>
        {info?.parent} {props?.version?.parent == info?.parent && "✅"}
      </td>
      <td className={props?.version?.child == info?.child ? "ok" : ""}>
        {info?.child} {props?.version?.child == info?.child && "✅"}
      </td>
    </tr>
  );
}
