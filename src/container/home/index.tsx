import { Banner } from "@/components/banner";
import { SectionProducts } from "@/components/sectionProducts";
import { FeaturedProducts } from "./FeaturedProducts";
import { Partner } from "./Partner";
import { SearchArea } from "./Search";
import "./customSwiper.css";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Partner />
      <FeaturedProducts />
      <SearchArea />
      <SectionProducts
        title="Properties for sale"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      />
      <SectionProducts
        title="Properties for rent"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
        type="large"
      />
    </main>
  );
}
