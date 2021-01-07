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
import useGetCheckoutUrl from "../hooks/useGetCheckoutUrl";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useCart from "../hooks/useCart";

export default function ShoppingBag() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartData = useGetCheckoutUrl();
  console.log(cartData.isSuccess && cartData.data.hosted_checkout_url);
  const btnRef = useRef();
  const cart = useCart();
  const cartItems = cart.data;
  const cartTotal =
    cartItems &&
    cartItems.reduce((acc, item) => {
      acc += item.line_total.raw;
      return Math.floor(acc);
    }, 0);

  return (
    <>
      <Button
        onClick={onOpen}
        background="transparent"
        fontSize={[20, 20, 30, 40]}
      >
        <Icon as={FontAwesomeIcon} icon={faShoppingBag} />
      </Button>
      <Text
        fontSize={["10px", "xs", "xs", "xs"]}
        position="absolute"
        color="background"
        transform={[
          "translate(1.3rem, -1.5rem)",
          "translate(1.9rem, -1.4rem)",
          "translate(1.9rem, -1.4rem)",
          "translate(1.9rem, -1.4rem)",
        ]}
        fontWeight="bold"
      >
        {(cartItems && cartItems.length) || 0}
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
                {cart.isSuccess &&
                  cartItems.map(
                    ({
                      id,
                      name,
                      media: { source },
                      line_total: { formatted },
                      quantity,
                    }) => {
                      return (
                        <CartItem
                          key={id}
                          name={name}
                          productId={id}
                          media={source}
                          price={formatted}
                          bagQuantity={quantity}
                        />
                      );
                    }
                  )}
              </VStack>
            </DrawerBody>
            <Divider />
            <DrawerFooter justifyContent="center">
              <Text fontWeight="bold" mr={4}>
                Total: ${cartTotal}
              </Text>
              <Button
                border="solid 2px black"
                background="none"
                borderRadius="none"
              >
                <a
                  href={cartData.isSuccess && cartData.data.hosted_checkout_url}
                >
                  Proceed to checkout
                </a>
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
