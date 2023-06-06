import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable, funcionActualiza] = useState(valorInicial)

  console.log(props);

  // const [mostrar, actualizarMostrar] = useState(true);

  // const manejarClick = () => {
  //   console.log("Hola", !mostrar);
  //   actualizarMostrar(!mostrar);
  // };

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
  );
};

export default MiOrg;
