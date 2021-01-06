import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { commerce } from "../src/lib/commerce";
import { loadStripe } from "@stripe/stripe-js";
import { VStack, Container, Text, HStack, Input } from "@chakra-ui/react";
import useGetCheckoutToken from "../hooks/useGetToken";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

export default function CheckoutPage() {
  const [step, setStep] = useState();
  const token = useGetCheckoutToken();
  console.log(token);

  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <HStack my="auto">
            <VStack>
              <VStack
                w={500}
                h={500}
                p={4}
                border="solid black"
                as="form"
                justify="space-around"
              >
                <Input />
                <Input />
                <Input />
              </VStack>
            </VStack>
            <VStack>
              {" "}
              <Container w={500} h={500} border="solid 1.5px black">
                <Text>ORDER SUMMARY</Text>
              </Container>
            </VStack>
          </HStack>
        )}
      </ElementsConsumer>
    </Elements>
  );
}
