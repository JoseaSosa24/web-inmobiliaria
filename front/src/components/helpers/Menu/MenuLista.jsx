import { MenuItem } from "./MenuItem";

export const MenuLista = () => {
    return (
      <ul className="navbar-nav">
        <MenuItem link="#inicio" nombreItem="Inicio" active />
        <MenuItem link="#nosotros" nombreItem="Nosotros" />
        <MenuItem link="#anuncios" nombreItem="Anuncios" />
        <MenuItem link="#servicios" nombreItem="Servicios" />
        <MenuItem link="#contacto" nombreItem="Contacto" />
       {/*  <MenuItem link="#" nombreItem="Dropdown link" dropdown>
          <MenuItem link="#" nombreItem="Action" />
          <MenuItem link="#" nombreItem="Another action" />
          <MenuItem link="#" nombreItem="Something else here" />
        </MenuItem> */}
      </ul>
    );
  };