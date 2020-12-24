import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useHeadbands() {
  return useQuery("headbands", () =>
    commerce.products.list({
      category_slug: "headband",
    })
  );
}
