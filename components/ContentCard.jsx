import { Stack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
export default function ContentCard({ headband }) {
  return (
    <Stack h="450px" w="450px" spacing={5}>
      <Image
        src={`${
          headband ? "/headbandPlacholder.jpeg" : "/scrunchydisplay.png"
        }`}
        width={494}
        height={509}
      />
      <Container borderTop="2px solid black" textAlign="center">
        <Link href={headband ? "/shop/headbands" : "/shop/scrunchies"}>
          <a>
            <Text mt={2} textStyle="menu">
              {headband ? "Headbands" : "Scrunchies"}
            </Text>
          </a>
        </Link>
      </Container>
    </Stack>
  );
}
