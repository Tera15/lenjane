import {
  Flex,
  Spacer,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
export default function TitleBar() {
  return (
    <Flex mx="67px" pos="relative" top="-100" left="0">
      <Heading textStyle="h1">LENNON JANE</Heading>
      <Spacer />
      <UnorderedList styleType="none" alignSelf="center">
        <Flex align="center" justify="around">
          <ListItem mr={39}>
            <Text textStyle="menu">Home</Text>
          </ListItem>
          <ListItem mr={39}>
            <Text textStyle="menu">Shop</Text>
          </ListItem>
          <ListItem mr={39}>
            <Text textStyle="menu">About</Text>
          </ListItem>
          <ListItem mr={39}>
            <Text textStyle="menu">charities</Text>
          </ListItem>
          <ListItem>
            <Image src="/MyBag.svg" width={50} height={30} />
          </ListItem>
        </Flex>
      </UnorderedList>
    </Flex>
  );
}
