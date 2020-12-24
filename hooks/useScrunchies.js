import { useQuery } from "react-query";
import { commerce } from "../src/lib/commerce";

export default function useScrunchies() {
  return useQuery("scrunchies", () =>
    commerce.products.list({
      category_slug: "scrunchy",
    })
  );
}
