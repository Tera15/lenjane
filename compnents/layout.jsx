import {
  Box,
  Center,
  SimpleGrid,
  Grid,
  Spacer,
  Heading,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import TitleBar from "../../compnents/TitleBar";
import ContentCard from "../../compnents/ContentCard";
import ProductCard from "../../compnents/ProductCard";
export default function ShopAll() {
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh" bg="background">
      <Stack w="95%">
        <TitleBar />
        <Center>
          <Stack textAlign="center" position="relative" top={-20}>
            <Heading textStyle="h3">Shop Everything</Heading>
            <Text textAlign="center" textStyle="p">
              Our scrunchies are fucking great, buy some now. Seriously... Do
              it.
            </Text>
          </Stack>
        </Center>
        <Center>
          <Grid
            templateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
            w="100%"
            h="599px"
          >
            <Center>
              <ProductCard />
            </Center>
            <Center>
              <ProductCard headband />
            </Center>
            <Center>
              <ProductCard />
            </Center>
          </Grid>
        </Center>
      </Stack>
    </Flex>
  );
}
