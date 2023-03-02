import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { MenuBox, MenuLink } from "../Styled-component/Main.styled";

function Menu() {
    const theme=useContext(ThemeContext);
    
    return (
        <MenuBox>
            <MenuLink theme={theme}>
                about me
            </MenuLink>
            <MenuLink theme={theme}>
                why me
            </MenuLink>
            <MenuLink theme={theme}>
                contact
            </MenuLink>
        </MenuBox>
    );
  }
  
  export default Menu;