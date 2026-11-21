import { shop } from "@/config";

export const formatPrice = (item) =>
  item.price == null
    ? "Get a quote"
    : `${item.from ? "from " : ""}${item.price.toLocaleString("en-US")} ${shop.currency}`;