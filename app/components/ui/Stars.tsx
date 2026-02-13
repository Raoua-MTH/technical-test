import StarIcon from "@/public/icons/Star.svg";
import Image from "next/image";

type Props = {
  rating?: number; // how many stars should be active
  width?: number;
  height?: number;
};

export default function Stars({
  rating = 5,
  width = 20,
  height = 20,
}: Props) {
  return (
    <div className="flex gap-[2px]">
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={StarIcon}
          alt="star"
          width={width}
          height={height}
          className={index < rating ? "opacity-100" : "opacity-30"}
        />
      ))}
    </div>
  );
}
