import { useState } from "react";
import {
  Stack,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import CustomButton from "./Button";
export default function ProductDescription() {
  const [quantity, setQuantity] = useState(1);
  const handleSetQuantity = (e) => {
    if (e >= 0) {
      setQuantity(e);
    }
  };
  return (
    <Stack h="100%" width="70%" spacing={65}>
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
