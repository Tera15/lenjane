import { Stack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
export default function ContentCard({ headband }) {
  return (
    <Stack spacing={5}>
      <Container w={["80%", "80%", "80%", "440px"]}>
        <Image
          src={`${
            headband ? "/headbandplacholder.jpg" : "/scrunchydisplay.jpg"
          }`}
          width={494}
          height={509}
        />
      </Container>
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
