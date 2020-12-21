import { Center, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CustomButton from "./Button";
export default function ContentCard({ headband }) {
  return (
    <Stack h="599px" w="494px" spacing={22}>
      <Image
        src={`${
          headband ? "/headbandPlacholder.jpeg" : "/scrunchydisplay.png"
        }`}
        width={400}
        height={600}
      />
      <Center borderTop="2px solid black">
        <Text mt={2} textStyle="menu">
          {headband ? "Headbands" : "Scrunchies"}
        </Text>
      </Center>
    </Stack>
  );
}
