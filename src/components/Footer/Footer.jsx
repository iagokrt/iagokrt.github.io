import React, { useContext } from 'react';
import { FaLocationArrow } from 'react-icons/fa'
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Footer = () => {
  const { footer } = useContext(PortfolioContext)

  return (
    <footer className="footer navbar-static-bottom">
        <Container>
        <section>
          <nav>
            <ul className="footer-section-static-bottom">
              <li id="item-01">
                <h1>Correo Eletronico</h1>
                <p><b>abcdrywallinc@hotmail.com</b></p>
              </li>
              <li id="item-02">
                <h1>Dirección</h1>
                <p>PO BOX 690234</p>
                <p>Charlotte NC 28227</p>
              </li>
              <li id="item-03">
                <h2>Trabalhe Conosco!</h2>
                <p>+55 555 4213</p>
              </li>
            </ul>
          </nav>
        </section>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Work by{' '}
          <a href="https://www.linkedin.com/in/iagobarreto/" target="_blank" rel="noopener noreferrer">
            Iago Carneiro
          </a>
          <span> | </span>
          <a href="https://www.instagram.com/cubanitaenbrasil/" target="_blank" rel="noopener noreferrer">
             Liannis Cordova 
          </a>
        </p>
      </Container>
    </footer>
  );
};
/**
 *  
 */
export default Footer;
