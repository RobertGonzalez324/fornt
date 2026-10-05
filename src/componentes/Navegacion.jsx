
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Navegacion({path, setPath}) {
  return (
    <Navbar className="!bg-blue-1000" fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://cdn-icons-png.flaticon.com/512/75/75800.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AutoReacth Motors</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#Hogar" active={path === 'Hogar' ? true : false} onClick={(e) => setPath('Hogar')}>
          Hogar
        </NavbarLink>
        <NavbarLink href="#Productos" active={path === 'Productos' ? true : false} onClick={(e) => setPath('Productos')}>
          Productos
        </NavbarLink>
        <NavbarLink href="#Nosotros" active={path === 'Nosotros' ? true : false} onClick={(e) => setPath('Nosotros')}>
          Nosotros
        </NavbarLink>
        <NavbarLink href="#Contacto" active={path === 'Contacto' ? true : false} onClick={(e) => setPath('Contacto')}>
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
