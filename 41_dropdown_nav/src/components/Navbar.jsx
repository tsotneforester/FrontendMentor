import { useState } from 'react';
import styled from 'styled-components';
import ArrowDownSVG from '../assets/icon-arrow-down.svg?react';
import logo from '../assets/logo.svg';
import MenuSVG from '../assets/icon-menu.svg?react';
import CloseButtonSVG from '../assets/icon-close-menu.svg?react';
import Auth from './Auth';

const Navbar = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const routes = transformMenuData(menu);

  return (
    <NavbarContainer>
      <img src={logo} />
      <LinksContainer>
        {routes.map((menu, index) => (
          <LinkItem key={index}>
            <p>
              {menu.title} {menu.submenu && <ArrowDownIcon />}
            </p>
            {menu.submenu && renderSubmenu(menu.submenu)}
          </LinkItem>
        ))}
      </LinksContainer>
      <S.Auth>
        <Auth />
      </S.Auth>

      <MenuIcon onClick={() => setIsOpen(true)} />

      {isOpen && (
        <>
          <Overlay />
          <Modal>
            <CloseButtonIcon
              onClick={() => {
                setIsOpen(false);
                setActiveMenu(null);
              }}
            />

            <div className="links-container">
              {routes.map((menu, index) => (
                <LinkItem
                  key={index}
                  onClick={() => {
                    activeMenu == index
                      ? setActiveMenu(null)
                      : setActiveMenu(index);
                  }}
                  $active={activeMenu == index}
                >
                  <p>
                    {menu.title}
                    {menu.submenu && (
                      <ArrowDownIcon $active={activeMenu == index} />
                    )}
                  </p>
                  {menu.submenu &&
                    renderSubmenu(menu.submenu, () => setIsOpen(false))}
                </LinkItem>
              ))}
            </div>

            <Auth />
          </Modal>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

// 🔰 Styled Components
const S = {};
const NavbarContainer = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white1};
  padding: 16px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    gap: 20px;
  }

  img {
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    }
  }
`;
S.Auth = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    display: block;
    top: 14px;
    right: 26px;
  }
`;
const LinksContainer = styled.div`
  display: none;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

const ArrowDownIcon = styled(ArrowDownSVG)`
  transform: rotate(${({ $active }) => ($active ? '0deg' : '180deg')});
  path {
    stroke: ${({ theme }) => theme.colors.gray2};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: rotate(0deg);
    path {
    }
  }

  //
`;

const LinkItem = styled.div`
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.gray2};
  height: ${({ $active }) => ($active ? 'auto' : '54px')};
  text-decoration: none;
  width: 100%;
  overflow: hidden;
  padding: 14px 4px;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    overflow: unset;

    text-decoration: none;
    padding: 14px 18px;
    font-size: 1rem;

    &:hover ${() => Submenu} {
      display: block;
    }
    &:hover ${() => ArrowDownIcon} {
      transform: rotate(180deg);
    }
  }

  p {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
  }
`;

const Submenu = styled.div`
  position: static;
  text-decoration: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white1};
    top: 100%;
    margin-top: 130px;
    left: 0;
    text-decoration: none;
    display: none;
    font-size: 1rem;
    margin: 0;

    background: ${({ theme }) => theme.colors.white1};
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
    border-radius: 10px;
  }
`;

const SubmenuItem = styled.div`
  position: relative;
  background-color: none;
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.gray2};
  padding: 6px 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: auto;
  }
  p {
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  z-index: 900;
  background-color: #000000a9;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: clamp(40px, 70%, 300px);
  height: 100vh;
  height: 100svh;
  background: ${({ theme }) => theme.colors.white1};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 100px 24px 24px 24px;
  gap: 70px;
  font-size: 2rem;
  z-index: 1000;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }

  .links-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
`;

const MenuIcon = styled(MenuSVG)`
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CloseButtonIcon = styled(CloseButtonSVG)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background: none;
  cursor: pointer;
`;

// 🔰 creates objects from string array and adds title and route for React Router
function transformMenuData(menu, parentRoute = '') {
  return menu.map((item) => {
    if (!item.title) {
      throw new Error('Menu item must have a title');
    }

    const currentRoute =
      item.route || `${parentRoute}/${item.title.toLowerCase()}`;

    // Check if the item has a submenu and transform it recursively
    let submenu;
    if (Array.isArray(item.submenu)) {
      submenu = item.submenu.map((subItem) => {
        if (typeof subItem === 'string') {
          // If the submenu item is a string, create an object with title and route
          return {
            title: subItem,
            route: `${currentRoute}/${subItem.toLowerCase()}`,
          };
        } else if (typeof subItem === 'object') {
          // If the submenu item is an object, transform it recursively
          return transformMenuData([subItem], currentRoute)[0];
        }
      });
    }

    // Return the transformed item
    return {
      ...item,
      title: item.title,
      route: currentRoute,
      submenu: submenu,
    };
  });
}

function renderSubmenu(submenu, handler) {
  return (
    <Submenu>
      {submenu.map((item, index) => (
        <SubmenuItem
          onClick={(e) => {
            e.stopPropagation();
            handler();
          }}
          key={index}
        >
          <p>
            {item.icon} {item.title}
          </p>
        </SubmenuItem>
      ))}
    </Submenu>
  );
}
