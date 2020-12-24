import { Center, Grid, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import TitleBar from "../../compnents/TitleBar";
import ContentCard from "../../compnents/ContentCard";
import ProductCard from "../../compnents/ProductCard";
import useProducts from "../../hooks/useProducts";
import useHeadbands from "../../hooks/useHeadbands";
import { commerce } from "../../src/lib/commerce";
export default function ShopScrunchies() {
  const headbands = useHeadbands();
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
              {headbands.isSuccess &&
                headbands.data.data.map(
                  ({ id, name, media: { source }, price: { formatted } }) => {
                    return (
                      <Center mb={8}>
                        <ProductCard
                          name={name}
                          imgSrc={source}
                          price={formatted}
                        />
                      </Center>
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

  await queryClient.prefetchQuery("headbands", () =>
    commerce.products.list({ category_slug: "headband" })
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
