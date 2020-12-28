import { Center, Stack, Heading, Text, Spacer } from "@chakra-ui/react";
import Link from "next/link";
export default function Blurb() {
  return (
    <Stack w="450px">
      <Stack height="400px">
        <Heading textStyle="h3">Ethically made. Hand finished.</Heading>
        <Spacer />
        <Text textStyle="p">
          Made in Candada, our hair accessories are hand-finished to accomplish
          a seamless style for all you hair needs.
        </Text>{" "}
        <Text textStyle="p">
          {" "}
          For each purchase, 10% of the sale price is donated to a select
          charity of the month.
        </Text>
        <Spacer />
        <Heading textStyle="h2">For every type of hair day.</Heading>
      </Stack>
      <Center p={1} mb={2} borderTop="2px solid black">
        <Link href="/shop">
          <a>
            <Text textStyle="menu">Shop All</Text>
          </a>
        </Link>
      </Center>
    </Stack>
  );
}
