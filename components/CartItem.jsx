import { useState, useEffect } from "react";
import {
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import useUpdateCart from "../hooks/useUpdateCart";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
export default function CartItem({
  name,
  productId,
  media,
  price,
  bagQuantity,
}) {
  const [quantity, setQuantity] = useState(1);
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { mutate: updateCart } = useUpdateCart();
  console.log(productId, "asdad");
  useEffect(() => {
    setQuantity(bagQuantity);
  }, []);
  const handleSetQuantity = (e) => {
    if (e >= 0) {
      setQuantity(e);
    }
  };

  const handleUpdateQuantity = async (event, id, qty) => {
    event.preventDefault();
    let values = { id, quantity: +qty };
    updateCart(values);
  };

  return (
    <HStack p={4} borderBottom="solid 2px black">
      <Image src={media} width={150} height={150} />
      <VStack height="100%" justify="space-between">
        <Text textStyle="h4">{name}</Text>
        <Button
          onClick={() => removeFromCart(productId)}
          background="black"
          color="white"
          borderRadius="none"
        >
          Remove
        </Button>
      </VStack>
      <Spacer />
      <VStack height="100%" justify="space-between">
        <Text>QTY</Text>
        <HStack
          justify="center"
          as="form"
          onSubmit={(e) => handleUpdateQuantity(e, productId, quantity)}
        >
          <NumberInput
            width="30%"
            value={quantity}
            onChange={handleSetQuantity}
            allowMouseWheel
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            background="black"
            borderRadius="none"
            color="white"
            type="submit"
          >
            Save
          </Button>
        </HStack>
      </VStack>
      <VStack height="100%" justify="space-between">
        <Text>Total</Text>
        <Text fontWeight="bold">${price}</Text>
      </VStack>
    </HStack>
  );
}
