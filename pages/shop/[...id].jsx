import ProductDescription from "../../compnents/ProductDescription";
import { commerce } from "../../src/lib/commerce";
import { useState } from "react";
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
import TitleBar from "../../compnents/TitleBar";
import CustomButton from "../../compnents/Button";
import useAddToCart from "../../hooks/useAddToCart";

export default function ProductPage({ product }) {
  const {
    id,
    name,
    description,
    media: { source },
    price: { formatted },
    related_products,
  } = product;
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
                  <Image src={source} width={120} height={167} />
                </Container>
                <Image src={source} width={120} height={167} />
                <Image src={source} width={120} height={167} />
              </VStack>
              <Image src={source} width={490} height={509} />
            </Flex>
            <Center>
              <ProductDescription
                name={name}
                price={formatted}
                description={description}
              />
            </Center>
          </Grid>
        </Stack>
      </Flex>
    </>
  );
}

export async function getStaticPaths({ product }) {
  console.log(product);
  let items = await commerce.products.list();
  let products = items.data;
  const paths = products.map((product) => ({ params: { id: [product.id] } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await commerce.products.retrieve(params.id);

  return {
    props: {
      product,
    },
  };
}
