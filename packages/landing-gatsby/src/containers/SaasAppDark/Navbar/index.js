import { closeModal, openModal } from '@redq/reuse-modal';
import lockIcon from 'common/assets/image/saasAppDark/icons/lock.svg';
import logo from 'common/assets/image/saasAppDark/logo.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import Image from 'common/components/Image';
import NavbarWrapper from 'common/components/Navbar';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import Logo from 'common/components/UIElements/Logo';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LoginModal from '../LoginModal';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };
  
  const data = useStaticQuery(graphql`
    query {
      saasAppDarkJson {
        MENU_ITEMS {
          label
          offset
          path
          id
        }
      }
    }
  `);

  const { saasAppDarkJson : MENU_ITEMS } = data;

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1300px">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={logo}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="sticky-logo nav-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS?.MENU_ITEMS}
              offset={-70}
            />

            <div className="navbar-buttons">
              <Button
                {...button}
                iconPosition="left"
                icon={<Image src={lockIcon} alt="lock icon" />}
                onClick={handleLoginModal}
                title="Login"
                className="navbar_button navbar_button_one"
              />
              <Link to="#" className='navbar_button navbar_button_two'>
                <Button {...button} title="Join Free" />
              </Link>
            </div>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS?.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sass_app_dark_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {},
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
