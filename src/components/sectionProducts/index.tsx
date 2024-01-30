"use client";

import { DATA_PRODUCTS } from "@/ustils/constants";
import { map } from "lodash";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";

interface SectionProductsProps {
  title: string;
  subTitle: string;
  type?: "small" | "large";
}

export const SectionProducts = ({
  title,
  subTitle,
  type,
}: SectionProductsProps) => {
  const containerClass =
    type === "large"
      ? "container px-4 pb-[80px]"
      : "w-full max-w-[1140px] px-4 pb-[80px]";
  const breakpoints =
    type === "large"
      ? {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }
      : {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        };

  return (
    <section
      className={`overflow-hidden py-16 ${
        type === "large" ? "bg-[#fffaf4]" : ""
      }`}
    >
      <div className="text-center pb-10 text-primary">
        <h4 className="text-45 text-primary font-bold leading-[54px] ">
          {title}
        </h4>
        <p className="mt-[14px] mb-[30px] text-14 text-[#8E8E93]">{subTitle}</p>
      </div>
      {/* list items */}
      <div>
        <Swiper
          className={containerClass}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2500 }}
          spaceBetween={30}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={breakpoints}
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
