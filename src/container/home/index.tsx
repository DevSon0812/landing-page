import { Banner } from "@/components/banner";
import { FeaturedProducts } from "./FeaturedProducts";
import { Partner } from "./Partner";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Partner />
      <FeaturedProducts />
    </main>
  );
}
