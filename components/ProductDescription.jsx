import { useState } from "react";
import {
  Stack,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import CustomButton from "./Button";
import useAddToCart from "../hooks/useAddToCart";

export default function ProductDescription({ id }) {
  const [quantity, setQuantity] = useState(1);
  const { mutate, status, reset } = useAddToCart();
  const handleSetQuantity = (e) => {
    if (e >= 0) {
      setQuantity(e);
    }
  };
  console.log(id);
  return (
    <Stack
      as="form"
      h="100%"
      width="70%"
      spacing={65}
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ id, quantity });
      }}
    >
      <Stack h="100%">
        <Heading textStyle="h3">Black and Gold Scrunchy</Heading>
        <Spacer />
        <Text textStyle="p">
          Our black and gold scrunhies are fucking great. They are the best
          thing ever and you need to buy them immediately. <br />{" "}
          EEEEEEEEEEEEEE! These things are the best!
        </Text>{" "}
        <Spacer />
        <Flex>
          <NumberInput
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
        </Flex>
      </Stack>
      <CustomButton>Add To Cart</CustomButton>
    </Stack>
  );
}
