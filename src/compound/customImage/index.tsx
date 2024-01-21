import Image from "next/image";

interface CustomImageProps {
  width?: number;
  height?: number;
  className?: string;
  alt: string;
  src: any;
}

export const CustomImage = ({
  width,
  height,
  className,
  alt,
  src,
}: CustomImageProps) => {
  return (
    <Image
      width={width || 500}
      height={height || 500}
      loading="lazy"
      alt={alt}
      src={src}
      className={className}
    ></Image>
  );
};
