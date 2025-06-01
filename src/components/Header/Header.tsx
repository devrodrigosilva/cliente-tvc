import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/Logo.webp';
import { ReactComponent as PortalIcon } from '../../assets/portal.svg';

import {
  Container,
  LogoIcon,
  Menu,
  ModalMenu,
  Content,
  MenuItem,
  ModalMenuUp,
} from './Header.styles';
import Body from '../Body/Body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCreditCard,
  faPodcast,
  faVideo,
  faRightToBracket,
  faUser,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import getLocalUserId from '../../services/helpers/getLocalUserId';
import { logout } from '../../services/auth';
import { useTheme } from 'styled-components';

const Header: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState<boolean>(true);

  useEffect(() => {
    getLocalUserId().then((newLocalId) => {
      setShowLogin(!newLocalId);
    });
  }, []);

  const [showModalMenu, setShowModalMenu] = useState(false);
  const modalMenuRef = useRef<HTMLDivElement>(null);

  const handleOnBlurModalMenu = (e: Event) => {
    e.preventDefault();
    setShowModalMenu(false);
  };

  const handleOnOpenModalMenu = () => {
    setShowModalMenu(true);
    modalMenuRef.current?.focus();
  };

  return (
    <Container>
      <Content>
        <LogoIcon src={logo} onClick={() => navigate('/')} />

        <Menu onClick={handleOnOpenModalMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Menu>
      </Content>
      {showModalMenu && (
        <ModalMenu
          tabIndex={0}
          ref={modalMenuRef}
          onBlur={(e) => handleOnBlurModalMenu(e.nativeEvent)}
        >
          <ModalMenuUp>
            {showLogin && (
              <MenuItem onClick={() => navigate('/login')}>
                <FontAwesomeIcon icon={faUser} color={colors.textPrimary} />
                <Body size="l" color={colors.textPrimary}>
                  Login
                </Body>
              </MenuItem>
            )}
            {!showLogin && (
              <MenuItem onClick={() => navigate('/perfil')}>
                <FontAwesomeIcon icon={faUser} color={colors.textPrimary} />
                <Body size="l" color={colors.textPrimary}>
                  Perfil
                </Body>
              </MenuItem>
            )}
            <MenuItem onClick={() => navigate('/podcasts')}>
              <FontAwesomeIcon icon={faPodcast} color={colors.textPrimary} />
              <Body size="l" color={colors.textPrimary}>
                Podcasts
              </Body>
            </MenuItem>

            <MenuItem onClick={() => navigate('/episodios')}>
              <FontAwesomeIcon icon={faVideo} color={colors.textPrimary} />
              <Body size="l" color={colors.textPrimary}>
                Episodios
              </Body>
            </MenuItem>

            <MenuItem onClick={() => navigate('/rss')}>
              <FontAwesomeIcon icon={faRss} color={colors.textPrimary} />
              <Body size="l" color={colors.textPrimary}>
                RSS Feed
              </Body>
            </MenuItem>

            <MenuItem onClick={() => navigate('/planos')}>
              <FontAwesomeIcon icon={faCreditCard} color={colors.textPrimary} />
              <Body size="l" color={colors.textPrimary}>
                Planos
              </Body>
            </MenuItem>
          </ModalMenuUp>

          {!showLogin && (
            <MenuItem
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                color={colors.textPrimary}
              />
              <Body size="l" color={colors.textPrimary}>
                Sair
              </Body>
            </MenuItem>
          )}
        </ModalMenu>
      )}
    </Container>
  );
};

export default Header;
