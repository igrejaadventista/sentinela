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
      <th>Campo</th>
      <th>Parent Version: {info?.parent}</th>
      <th>Child Version: {info?.child}</th>
    </tr>
  );
}
