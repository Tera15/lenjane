import {
  Flex,
  Spacer,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../compnents/Cart";

export default function TitleBar() {
  return (
    <Flex width="80%" mt={10} mx="auto">
      <Heading textStyle="h1">LENNON JANE</Heading>
      <Spacer />
      <UnorderedList styleType="none" alignSelf="center">
        <Flex align="center" justify="around">
          <ListItem mr={39}>
            <Link href="/">
              <Text textStyle="menu">Home</Text>
            </Link>
          </ListItem>
          <ListItem mr={39}>
            <Link href="/shop">
              <Text textStyle="menu">Shop</Text>
            </Link>
          </ListItem>
          <ListItem mr={39}>
            <Link href="/about">
              <Text textStyle="menu">About</Text>
            </Link>
          </ListItem>
          <ListItem mr={39}>
            <Link href="/charities">
              <Text textStyle="menu">Charities</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Cart />
          </ListItem>
        </Flex>
      </UnorderedList>
    </Flex>
  );
}
