import { useState, useEffect } from "react";

export function ReferenceItem(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.adventistas.dev/get-theme-reference`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);

        props.getReference(data);
      })
      .catch((error) => console.log("Deu ruim na busca da referencia"));
  }, []);

  return (
    <tr>
      <th>Campo:</th>
      <th>Parent: {info?.parent}</th>
      <th>Child: {info?.child}</th>
    </tr>
  );
}
