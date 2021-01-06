import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useGetCheckoutUrl() {
  return useQuery("checkoutId", () =>
    commerce.cart.retrieve(commerce.cart.id())
  );
}
