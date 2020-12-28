import { Center, Grid, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import TitleBar from "../../components/TitleBar";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../hooks/useProducts";
import { commerce } from "../../src/lib/commerce";
export default function ShopAll() {
  const products = useProducts();
  return (
    <>
      <TitleBar />
      <Flex align="center" justify="center" w="100vw" minHeight="85vh">
        <Stack width="100%" spacing={10}>
          <Center>
            <Stack
              position="absolute"
              textAlign="center"
              transform="translate(0, -2rem)"
            >
              <Heading textStyle="h3">Shop Everything</Heading>
              <Text textAlign="center" textStyle="p">
                Our scrunchies are fucking great, buy some now. Seriously... Do
                it.
              </Text>
            </Stack>
          </Center>
          <Center>
            <Grid
              templateColumns="repeat( 3, minmax(400px, 1fr) )"
              w="80%"
              h="599px"
              gridAutoFlow="column"
              overflowX="scroll"
              gridGap="5rem"
            >
              {products.isSuccess &&
                products.data.data.map(
                  ({ id, name, media: { source }, price: { formatted } }) => {
                    return (
                      <Link href="/shop/[id.js]" as={`/shop/${id}`} key={id}>
                        <a>
                          <Center mb={8}>
                            <ProductCard
                              name={name}
                              imgSrc={source}
                              price={formatted}
                            />
                          </Center>
                        </a>
                      </Link>
                    );
                  }
                )}
            </Grid>
          </Center>
        </Stack>
      </Flex>
    </>
  );
}

export async function useStaticProps() {
  const queryClient = new QueryClient();
  const getProducts = async () => {
    const products = await commerce.products.list();
    return products;
  };

  await queryClient.prefetchQuery("products", getProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
