import Link from "next/link";
import AuthorImage from "../../assets/images/author.jpg";
import CardImage from "../../assets/images/home1.jpg";
import { CustomImage } from "../../compound/customImage/index";

export const Card = () => {
  return (
    <div className="p-[17px] rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-hidden rounded-2xl hover:bg-gradient-image ">
        <Link href="/" className="h-[226.76px] ">
          <CustomImage
            src={CardImage}
            alt="Product"
            className="rounded-2xl hover:scale-105 transition-all duration-500 hover:bg-gradient-image"
          />
        </Link>
      </div>
      <div className="pt-[14px]">
        <Link
          href="/"
          className="text-18 font-bold text-primary hover:text-yellow mb-[6px] transition-colors duration-300"
        >
          Gorgeous Apartment Building
        </Link>
        <div className="flex items-center gap-2 text-12 mb-[21px]">
          <span>a</span>
          58 Hullbrook Road, Billesley, B13 0LA
        </div>
        <p className="text-18 font-bold mb-[21px] text-yellow">$7,500</p>
        <div className="flex items-center text-14 gap-4 pb-[16px] border-b border-b-1px">
          <p className="flex items-center gap-1">
            Beds:<span className="font-semibold">4</span>
          </p>
          <p className="flex items-center gap-1">
            Baths:
            <span className="font-semibold">2</span>
          </p>
          <p className="flex items-center gap-1">
            Sqft:
            <span className="font-semibold">1120</span>
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
          <div className="text-14">3 years ago</div>
        </div>
      </div>
    </div>
  );
};
