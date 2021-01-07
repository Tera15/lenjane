import {
  Center,
  Grid,
  Heading,
  Text,
  Flex,
  Stack,
  Container,
} from "@chakra-ui/react";
import TitleBar from "../../components/TitleBar";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import SocialWidget from "../../components/Socialwidget";
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
              position={["relative", "relative", "relative", "absolute"]}
              textAlign="center"
              mt={[8, 8, 8, 0]}
              transform={["", "", "", "translate(0, -2rem)"]}
            >
              <Heading textStyle="h3">Shop Headbands</Heading>
              <Text textAlign="center" textStyle="p">
                Our headbands are fucking great, buy some now. Seriously... Do
                it.
              </Text>
            </Stack>
          </Center>
          <Center>
            <Grid
              templateColumns={[
                "1fr",
                "1fr",
                "1fr",
                "repeat( 3, minmax(400px, 1fr) )",
              ]}
              w="80%"
              gridAutoFlow={["row", "row", "row", "column"]}
              overflowX={["scroll"]}
              gridGap="5rem"
            >
              {headbands.isSuccess &&
                headbands.data.data.map(
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
        <Container position="absolute" transform="translate(0, 20rem)">
          <SocialWidget />
        </Container>
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
