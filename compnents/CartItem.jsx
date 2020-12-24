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
export default function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const handleSetQuantity = (e) => {
    if (e >= 0) {
      setQuantity(e);
    }
  };
  return (
    <HStack p={4} borderBottom="solid 2px black">
      <Image src="/scrunchydisplay.png" width={150} height={150} />
      <VStack height="100%" justify="space-between">
        <Text textStyle="h4">Black Scrunchy</Text>
        <Button background="black" color="white" borderRadius="none">
          Remove
        </Button>
      </VStack>
      <Spacer />
      <VStack height="100%" justify="space-between">
        <Text>QTY</Text>
        <HStack justify="center">
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
          <Button background="black" borderRadius="none" color="white">
            Save
          </Button>
        </HStack>
      </VStack>
      <VStack height="100%" justify="space-between">
        <Text>Total</Text>
        <Text fontWeight="bold">$18</Text>
      </VStack>
    </HStack>
  );
}
