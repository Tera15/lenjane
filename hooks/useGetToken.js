import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useGetCheckoutToken() {
  return useQuery("checkoutToken", () =>
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id())
      .then((resp) => resp)
  );
}
