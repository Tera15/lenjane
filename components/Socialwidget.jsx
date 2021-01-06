import { Center, Icon } from "@chakra-ui/react";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SocialWidget() {
  return (
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
  );
}
