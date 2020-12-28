import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";
export default function Dropdown() {
  return (
    <Menu>
      <MenuButton textStyle="menu">Shop</MenuButton>
      <MenuList borderRadius="none" bg="background">
        <MenuItem textStyle="h4">
          <Link href="/shop">
            <a>Shop Everything</a>
          </Link>
        </MenuItem>
        <MenuItem textStyle="h4">
          <Link href="/shop/scrunchies">
            <a>Scrunchies</a>
          </Link>
        </MenuItem>
        <MenuItem textStyle="h4">
          <Link href="/shop/headbands">
            <a>Headbands</a>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
