import React from 'react';
import { Container, Link, Row } from './Footer.styles';
import Body from '../Body/Body';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faFacebookF,
  faTiktok,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as PortalIcon } from '../../assets/portal.svg';
import { ReactComponent as LojaIcon } from '../../assets/loja.svg';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Link onClick={() => navigate('/rss')}>
          <Body size="m">RSS FEED</Body>
        </Link>

        <Link onClick={() => navigate('/planos')}>
          <Body size="m">Planos</Body>
        </Link>

        <Link onClick={() => navigate('/')}>
          <Body size="m">Home</Body>
        </Link>
      </Row>

      <Row>
        <Link>
          <a href="https://tecnoveste.com.br" target="_blank">
            <PortalIcon width={24} height={24} />
          </a>
        </Link>

        <Link>
          <a href="https://www.youtube.com/@TecnoVeste" target="_blank">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </a>
        </Link>

        <Link>
          <a
            href="https://www.instagram.com/tecnoveste.podcasts/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </a>
        </Link>
        <Link>
          <a href="https://x.com/tecnoveste_Cast" target="_blank">
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </a>
        </Link>
        <Link>
          <a href="https://www.tiktok.com/@tecnoveste" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </a>
        </Link>
        <Link>
          <a href="https://www.facebook.com/tecnoveste" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </a>
        </Link>
        <Link>
          <a href="https://veste.tecnoveste.com.br/" target="_blank">
            <LojaIcon width={40} height={24} />
          </a>
        </Link>
      </Row>

      <Row>
        <Body size="s">
          Tecnoveste Cast 2025 © Todos os direitos reservados.
        </Body>
      </Row>
      <Row>
        <Body size="s">contato@podcast.tecnoveste.com.br</Body>
      </Row>
    </Container>
  );
};

export default Footer;
