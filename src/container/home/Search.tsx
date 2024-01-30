import { SearchAreaCard } from "@/components/search-area-card/SearchArea";
import { map } from "lodash";
import { DATA_SEARCH_AREA } from "./constants";

export const SearchArea = () => {
  return (
    <section className="pb-[71px]">
      <div className="text-center pb-10 text-primary">
        <h4 className="text-45 text-primary font-bold leading-[54px] ">
          Search real estate by area
        </h4>
        <p className="mt-[14px] mb-0 lg:mb-[30px] text-14 text-[#8E8E93]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </p>
      </div>
      {/* list search area */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  cursor-pointer">
        {map(DATA_SEARCH_AREA, (product) => (
          <SearchAreaCard
            key={product.id}
            name={product.name}
            label={product.label}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};
