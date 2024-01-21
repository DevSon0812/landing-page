import { Card } from "@/components/card/Card";
import { map } from "lodash";

export const FeaturedProducts = () => {
  const CATEGORIES = [
    {
      id: 1,
      category: "House",
    },
    {
      id: 2,
      category: "Smart home",
    },
    {
      id: 3,
      category: "Apartments",
    },
    {
      id: 4,
      category: "Office",
    },
    {
      id: 5,
      category: "Villa",
    },
    {
      id: 6,
      category: "Bungalow",
    },
  ];

  return (
    <section className="w-full py-[71px] container px-4">
      <div className="text-center pb-10 text-primary">
        <h4 className="text-45 text-primary font-bold leading-[54px] ">
          Featured properties
        </h4>
        <p className="mt-[14px] mb-[30px] text-14 text-[#8E8E93]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </p>
        {/* category */}
        <div className="flex items-center justify-center flex-wrap gap-3 transition-all duration-500 ">
          {map(CATEGORIES, (category) => (
            <button
              key={category.id}
              type="button"
              className="py-2 px-[14px] text-14 shadow-sm font-normal text-primary hover:font-semibold hover:text-yellow transition-all duration-500"
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
