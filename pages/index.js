import { Center, Icon, Grid, Flex, Stack } from "@chakra-ui/react";
import TitleBar from "../compnents/TitleBar";
import ContentCard from "../compnents/ContentCard";
import Blurb from "../compnents/Blurb";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useCategory from "../hooks/useCategory";
export default function Home() {
  const categories = useCategory();
  return (
    <>
      <TitleBar />
      <Flex align="center" justify="center" w="100vw" minHeight="85vh">
        <Stack spacing={10}>
          <Center>
            <Grid
              templateColumns="repeat( auto-fit, minmax(491px, 1fr) )"
              h="599px"
              width="85vw"
              justifySelf="center"
            >
              <Center>
                <ContentCard />
              </Center>
              <Center>
                <ContentCard headband />
              </Center>
              <Center>
                <Blurb />
              </Center>
            </Grid>
          </Center>
          <Center textStyle="menu">
            <a
              href="https://instagram.com/lennonjaneco"
              target="_blank"
              rel="noopener"
            >
              <Icon as={FontAwesomeIcon} icon={faInstagram} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener">
              <Icon as={FontAwesomeIcon} icon={faPinterest} mx={4} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener">
              <Icon as={FontAwesomeIcon} icon={faTiktok} />
            </a>
          </Center>
        </Stack>
      </Flex>
    </>
  );
}
