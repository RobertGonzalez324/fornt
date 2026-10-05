
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function Piepag({path, setPath}) {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Robert The Father of the ice creams" year={2026} />
      <FooterLinkGroup>
        <FooterLink href="#Hogar" onClick={(e) => setPath('Hogar')}>
          Hogar
        </FooterLink>
        <FooterLink href="#Productos" onClick={(e) => setPath('Productos')}>
          Productos
        </FooterLink>
        <FooterLink href="#Nosotros" onClick={(e) => setPath('Nosotros')}>
          Nosotros
        </FooterLink>
        <FooterLink href="#Contacto" onClick={(e) => setPath('Contacto')}>
          Contacto
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
