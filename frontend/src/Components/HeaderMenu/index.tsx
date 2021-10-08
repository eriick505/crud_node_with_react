import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import "./styles.css";

function HeaderMenu() {
  return (
    <nav className="menu">
      <ul className="menuList">
        <li>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
                >
                  Produtos
                </MenuButton>
                <MenuList>
                  <MenuItem>Todos os Produtos</MenuItem>
                  <MenuItem>Adicionar Produtos</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </li>
        <li>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
                >
                  Pedidos
                </MenuButton>
                <MenuList>
                  <MenuItem>Todos os Pedidos</MenuItem>
                  <MenuItem>Adicionar Pedidos</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
