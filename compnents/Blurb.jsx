import {
  Center,
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import CustomButton from "./Button";
export default function Blurb() {
  return (
    <Stack h="599px" w="494px" spacing={22}>
      <Stack h="100%">
        <Heading>Ethically made. Hand finished.</Heading>
        <Spacer />
        <Text>
          Made in Candada, our hair accessories are hand-finished to accomplish
          a seamless style for all you hair needs.
        </Text>{" "}
        <Text>
          {" "}
          For each purchase, 10% of the sale price is donated to a select
          charity of the month.
        </Text>
        <Spacer />
        <Heading textStyle="h2">For every type of hair day.</Heading>
      </Stack>
      <Center mt={2} p={1} borderTop="2px solid black">
        <Text textStyle="menu">Shop All</Text>
      </Center>
    </Stack>
  );
}
