import { useState } from "react";
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
import Cart from "../components/Cart";
import Dropdown from "../components/Dropdown";

export default function TitleBar() {
  return (
    <>
      <Flex
        width={["100vw", "100vw", "100vw", "80vw"]}
        flexDir={["column", "column", "column", "row"]}
        mt={10}
        mx="auto"
        align={["center"]}
      >
        <Heading textStyle="h1">LENNON JANE</Heading>
        <Spacer />
        <UnorderedList styleType="none" alignSelf="center">
          <Flex align="center" justify={["center", "", "", ""]}>
            <ListItem mr={[9.5, 9.5, 29.5, 39]}>
              <Link href="/">
                <Text textStyle="menu">Home</Text>
              </Link>
            </ListItem>
            <ListItem mr={[9.5, 9.5, 29.5, 39]}>
              <Dropdown />
            </ListItem>
            <ListItem mr={[9.5, 9.5, 29.5, 39]}>
              <Link href="/about">
                <Text textStyle="menu">About</Text>
              </Link>
            </ListItem>
            <ListItem mr={[9.5, 9.5, 29.5, 39]}>
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
    </>
  );
}
