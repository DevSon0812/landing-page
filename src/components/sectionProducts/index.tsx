"use client";
import { DATA_PRODUCTS } from "@/ustils/constants";
import { map } from "lodash";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";

interface SectionProductsProps {
  title: string;
  subTitle: string;
}

export const SectionProducts = ({ title, subTitle }: SectionProductsProps) => {
  return (
    <section className="overflow-hidden py-16">
      <div className="text-center pb-10 text-primary">
        <h4 className="text-45 text-primary font-bold leading-[54px] ">
          {title}
        </h4>
        <p className="mt-[14px] mb-[30px] text-14 text-[#8E8E93]">{subTitle}</p>
      </div>
      {/* list items */}
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500 }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerGroup={3}
          className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-[1140px] px-4 pb-[80px]"
        >
          {map(DATA_PRODUCTS, (product) => (
            <SwiperSlide key={product.id}>
              <Card
                id={product.id}
                name={product.name}
                price={product.price}
                address={product.address}
                baths={product.baths}
                beds={product.beds}
                create_at={product.create_at}
                sqft={product.sqft}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
