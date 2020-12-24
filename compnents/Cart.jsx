import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Header,
  DrawerOverlay,
  DrawerContent,
  Button,
  Icon,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useCart from "../hooks/useCart";

export default function ShoppingBag() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cart = useCart();
  const cartItems = cart.data;
  return (
    <>
      <Button onClick={onOpen} background="transparent" fontSize={40}>
        <Icon as={FontAwesomeIcon} icon={faShoppingBag} />
      </Button>
      <Text
        position="absolute"
        color="background"
        transform="translate(1.8rem, -1.5rem)"
        fontWeight="bold"
      >
        1
      </Text>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay>
          <DrawerContent background="background">
            <DrawerCloseButton />
            <DrawerHeader textAlign="center" textStyle="h3" m={2} p={0}>
              Shopping Bag
            </DrawerHeader>
            <DrawerBody display="flex" flexDir="column" px={10}>
              <VStack spacing={5}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </VStack>
            </DrawerBody>
            <Divider />
            <DrawerFooter justifyContent="center">
              <Text fontWeight="bold" mr={4}>
                Total: $12
              </Text>
              <Button
                border="solid 2px black"
                background="none"
                borderRadius="none"
              >
                Proceed to Checkout
              </Button>
            </DrawerFooter>
            <Text textAlign="center" textStyle="p" mb={4}>
              Taxes and Shipping are calculated at checkout
            </Text>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
