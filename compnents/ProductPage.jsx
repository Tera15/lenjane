import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Container,
  Icon,
  Grid,
  Spacer,
  Flex,
  VStack,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import TitleBar from "../compnents/TitleBar";
import ProductDescription from "./ProductDescription";
import Blurb from "../compnents/Blurb";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  return (
    <>
      <TitleBar />
      <Flex align="center" justify="center" w="100vw" mt={40} bg="background">
        <Stack w="85%">
          <Grid
            templateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
            h="599px"
          >
            <Flex height="100%" justify="center">
              <VStack height="100%" justify="space-between" mr={2}>
                <Container w="100%" h="30%">
                  <Image src="/scrunchydisplay.png" width={120} height={167} />
                </Container>
                <Image src="/scrunchydisplay.png" width={120} height={167} />
                <Image src="/scrunchydisplay.png" width={120} height={167} />
              </VStack>
              <Image src="/scrunchydisplay.png" width={490} height={509} />
            </Flex>
            <Center>
              <ProductDescription />
            </Center>
          </Grid>
        </Stack>
      </Flex>
    </>
  );
}
