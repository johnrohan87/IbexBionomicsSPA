import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
  fontSize,
  position,
  minWidth,
  zIndex,
} from 'styled-system';

// Navbar container
const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;

  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = 'NavbarStyle';

// Dropdown styles
export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${display}
  ${position}
`;

export const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  ${space}
  ${color}
  ${fontSize}
  ${borderRadius}
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  /* Optional scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ${display}
  ${position}
  ${minWidth}
  ${boxShadow}
  ${color}
  ${space}
  ${zIndex}
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// Hover behavior wrapper
export const DropdownContainer = styled(DropdownWrapper)`
  &:hover ${DropdownContent} {
    display: block;
  }

  &:hover ${DropdownButton} {
    background-color: #3e8e41;
  }
`;

export default NavbarStyle;