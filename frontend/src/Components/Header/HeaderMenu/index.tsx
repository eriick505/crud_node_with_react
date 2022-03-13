import { Link as RouterLink, useLocation } from "react-router-dom";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
} from "@chakra-ui/react";

import useAuth from "Hooks/useAuth";

import "./styles.css";

function HeaderMenu() {
  const location = useLocation();
  const { loginAuth } = useAuth();

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
                  <MenuItem>
                    <Link
                      as={RouterLink}
                      to={{
                        pathname: "/add-product",
                        state: { pageAddProduct: location },
                      }}
                    >
                      Adicionar Produtos
                    </Link>
                  </MenuItem>
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
        <li>
          <Button onClick={loginAuth.logout}>Sair</Button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
