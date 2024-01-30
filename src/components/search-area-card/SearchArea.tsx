import { CustomImage } from "@/compound/customImage";
import Link from "next/link";

interface SearchAreaProps {
  id?: number;
  name: string;
  image?: string;
  label: string;
  alt?: string;
}

export const SearchAreaCard = ({ id, name, image, label }: SearchAreaProps) => {
  return (
    <div className="relative group">
      <Link href="/" className="h-[236px]">
        <CustomImage src={image} alt="search area" className="w-full" />
        <div className="absolute top-[120px] bottom-0 left-0 opacity-0 right-0 bg-overlay group-hover:opacity-100 group-hover:bg-overlay-hover group-hover:top-0 transition-all duration-500"></div>
      </Link>
      <div className="text-white absolute bottom-6 left-6">
        <Link
          href="/"
          className="text-18 font-bold hover:text-yellow transition-colors duration-300 "
        >
          {name}
        </Link>
        <p className="text-14 ">{label}</p>
      </div>
    </div>
  );
};
