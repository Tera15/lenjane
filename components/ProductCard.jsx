import { Center, Stack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import CustomButton from "./Button";
export default function ProductCard({ imgSrc, name, price }) {
  return (
    <Stack h="480px" w="400px">
      <Container>
        <Image src={imgSrc} width={500} height={500} />
      </Container>
      <Container borderTop="2px solid black">
        <Text mt={2} textStyle="menu">
          {name}
        </Text>
        <Text textStyle="p">${price}</Text>
      </Container>
    </Stack>
  );
}
