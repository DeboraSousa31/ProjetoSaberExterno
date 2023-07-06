import { Row } from 'react-bootstrap';
import './Footer.css';
export const Footer = () => {
  return (
    <Row>
      <div className="footer">
        <footer>
          Horário de funcionamento: Segunda a Sexta - 08h às 18h
          <br />
          <small>Desenvolvido por: Equipe Saper - Erika, Débora, Hellry</small>
        </footer>
      </div>
    </Row>
  );
};
