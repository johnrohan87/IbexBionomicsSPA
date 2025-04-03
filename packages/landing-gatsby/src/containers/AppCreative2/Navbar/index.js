import lockImage from 'common/assets/image/appCreativeTwo/icons/lock.png';
import logoImage from 'common/assets/image/appCreativeTwo/logo.png';
import Box from 'common/components/Box';
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

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const data = useStaticQuery(graphql`
    query {
      appCreative2Json {
        menu_items {
          label
          path
          offset
        }
      }
    }
  `);

  const { appCreative2Json : menu_items } = data;

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1400px">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={logoImage}
            title="App Creative 2"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items?.menu_items}
              offset={-70}
            />
            <Link to="#" className="navbar_button navbar_button_one" {...button}>
              <Image src={lockImage} alt="Login now" />
              Login Now
            </Link>
            <Link to="#" className="navbar_button navbar_button_two" {...button}>
              Join Free
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menu_items?.menu_items}
                drawerClose={true}
                offset={-100}
              />
              <div className='mobile-menu-drawer-bottom'>
                <Link to="#" className="navbar_button navbar_button_one" {...button}>
                  <Image src={lockImage} alt="Login now" />
                  Login Now
                </Link>
                <Link to="#" className="navbar_button navbar_button_two" {...button}>
                  Join Free
                </Link>
              </div>
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
    className: 'app_creative_two_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['148px', '148px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
