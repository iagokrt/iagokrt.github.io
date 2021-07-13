import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABCDRYWALL | Contact</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron contact-section">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Yey Contact Page! <br />
              If you're trying to contact.. 
              <span role="img" aria-label="emoji">
              📝
              </span>
            </h1>
            <p> 
              contact information
              <span role="img" aria-label="emoji">
                📝
              </span>
            </p>
            <p> 
              Talk to us
              <span role="img" aria-label="emoji">
                📞
              </span>
              + 555 721440
            </p>
            <p> 
            Send an E-mail
            <span role="img" aria-label="emoji">
                📧
            </span>
            email@abcdrywall.com
          </p>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back < br/>
                Regressar a inicio
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
