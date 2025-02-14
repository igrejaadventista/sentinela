import { useState, useEffect } from "react";

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
      
      setIsVisible(
        headquarter.includes(searchValue) || 
        site.includes(searchValue)
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
            ? info.headquarter
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
