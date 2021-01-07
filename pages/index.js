import { Center, Icon, Grid, Flex, Stack } from "@chakra-ui/react";
import TitleBar from "../components/TitleBar";
import ContentCard from "../components/ContentCard";
import Blurb from "../components/Blurb";
import SocialWidget from "../components/Socialwidget";
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
      <Flex align="center" justify="center" w="100vw" minHeight="85vh">
        <Stack spacing={10}>
          <Center mt={[10, 10, 10, 0]}>
            <Grid
              templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]}
              width="85vw"
              justifySelf="center"
              gap={20}
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
          <SocialWidget />
        </Stack>
      </Flex>
    </>
  );
}
