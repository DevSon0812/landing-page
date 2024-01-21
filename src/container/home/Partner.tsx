"use client";

import { CustomImage } from "@/compound/customImage";
//  Swiper
import { map } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import PannerUrl from "../../assets/images/partner.png";

export const Partner = () => {
  const DISPLAY_IMAGES = [
    {
      id: 1,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 2,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 3,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 4,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 5,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 6,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 7,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 8,
      image: PannerUrl,
      alt: "brand partner",
    },
    {
      id: 9,
      image: PannerUrl,
      alt: "brand partner",
    },
  ];

  return (
    <section className="w-full lg:w-[1110px] mx-auto px-4 lg:px-0 py-20">
      <div>
        <h4 className="text-16 font-semibold mb-6 leading-6 text-primary">
          Trusted by over 150+ major companies
        </h4>
        <Swiper
          spaceBetween={20}
          loop
          speed={1500} // Đặt tốc độ
          breakpoints={{
            300: {
              slidesPerView: 2.5,
            },
            500: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 6.2,
            },
          }}
        >
          {map(DISPLAY_IMAGES, ({ id, image, alt }) => (
            <SwiperSlide key={id}>
              <CustomImage className="w-40h-20" src={image} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
