import { ProductsProps } from "@/ustils/interface";
import Link from "next/link";
import AuthorImage from "../../assets/images/author.jpg";
import CardImage from "../../assets/images/home1.jpg";
import { CustomImage } from "../../compound/customImage/index";

export const Card = ({
  id,
  name,
  address,
  price,
  create_at,
  beds,
  baths,
  sqft,
}: ProductsProps) => {
  return (
    <div className="p-[17px] rounded-2xl shadow-sm overflow-hidden " key={id}>
      <div className="overflow-hidden max-h-[226.76px] w-full rounded-2xl hover:bg-gradient-image ">
        <CustomImage
          src={CardImage}
          alt="Product"
          className="rounded-2xl w-full relative hover:scale-105 transition-all cursor-pointer duration-500 "
        />
      </div>
      <div className="pt-[14px]">
        <Link
          href="/"
          className="text-18 font-bold text-primary hover:text-yellow mb-[6px] transition-colors duration-300"
        >
          {name}
        </Link>
        <div className="flex items-center gap-2 text-12 mb-[21px]">
          <span>a</span>
          {address}
        </div>
        <p className="text-18 font-bold mb-[21px] text-yellow">${price}00</p>
        <div className="flex items-center text-14 gap-4 pb-[16px] border-b border-b-1px">
          <p className="flex items-center gap-1">
            Beds:<span className="font-semibold">{beds}</span>
          </p>
          <p className="flex items-center gap-1">
            Baths:
            <span className="font-semibold">{baths}</span>
          </p>
          <p className="flex items-center gap-1">
            Sqft:
            <span className="font-semibold">{sqft}</span>
          </p>
        </div>
        <div className="flex items-center justify-between pt-[17px]">
          <div className="flex items-center gap-2 text-14">Compare</div>
          <div className="w-10 h-10">
            <CustomImage
              src={AuthorImage}
              alt="Author"
              className="rounded-2xl "
            />
          </div>
          <div className="text-14">{create_at} years ago</div>
        </div>
      </div>
    </div>
  );
};
