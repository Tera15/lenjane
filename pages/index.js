import {
  Box,
  Center,
  SimpleGrid,
  GridItem,
  Flex,
  Stack,
} from "@chakra-ui/react";
import TitleBar from "../compnents/TitleBar";
import ContentCard from "../compnents/ContentCard";
import Blurb from "../compnents/Blurb";
export default function Home() {
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh" bg="background">
      <Stack w="100%" py={50}>
        <TitleBar />
        <Center>
          <SimpleGrid columns={3} w="100%" gap={4}>
            <Center>
              <ContentCard />
            </Center>
            <Center>
              <ContentCard headband />
            </Center>
            <Center>
              <Blurb />
            </Center>
          </SimpleGrid>
        </Center>
      </Stack>
    </Flex>
  );
}
