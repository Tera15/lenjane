import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";
export default function useCategory() {
  return useQuery("cart", () => commerce.categories.list());
}
