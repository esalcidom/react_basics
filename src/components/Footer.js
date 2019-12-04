import React from "react";

//// pasar el valor de props usando distructuring
const Footer = ({fecha}) => (
    <footer>
        <p>Todos los derechos recervados &copy; {fecha}</p>
    </footer>
);

export default Footer;