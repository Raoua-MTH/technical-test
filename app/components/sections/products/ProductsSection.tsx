import ProductTitle from "./ProductTitle";
import ProductNavigation from "./ProductNavigation";
import ChairIcon1 from "@/public/images/chair1.png";
import ChairIcon2 from "@/public/images/chair2.png";
import ChairIcon3 from "@/public/images/chair3.png";
import ChairIcon4 from "@/public/images/chair4.png";
import ArrowIcon from "@/public/icons/arrowDir.svg";
import Image from "next/image";
import SeeMore from "../../ui/SeeMore";
import { ProductCard } from "./ProductCard";

const products = [
  {
    image: ChairIcon1,
    price: 392,
    label: "Sakarias Armchair",
    category: "Chair",
  },
  {
    image: ChairIcon2,
    price: 292,
    label: "Baltsar Chair",
    category: "Chair",
  },
  {
    image: ChairIcon3,
    price: 519,
    label: "Anjay Chair",
    category: "Chair",
  },
  {
    image: ChairIcon4,
    price: 399,
    label: "Nyantuy Chair",
    category: "Chair",
  },
];

export default function ProductsSection() {
  return (
    <div className="bg-panto-gray flex items-center flex-col">
      <ProductTitle />

      <div className="mt-10">
        <ProductNavigation />
      </div>

      <div className="relative mt-20 flex flex-row xl:flex-nowrap flex-wrap xl:justify-start justify-center gap-[42px]">
        
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            label={product.label}
            category={product.category}
          />
        ))}

        {/* Arrows */}
        <div className="flex h-full items-center absolute w-full">
          <div className="xl:flex hidden h-full items-center relative w-full">
            
            <div className="absolute z-20 h-[50px] -left-7 w-[50px] flex items-center justify-center rounded-full bg-white shadow-2xl">
              <Image
                src={ArrowIcon}
                alt="arrow"
                width={24}
                height={24}
                className="object-cover"
                priority
              />
            </div>

            <div className="rotate-180 absolute h-[50px] -right-7 w-[50px] flex items-center justify-center rounded-full bg-white shadow-2xl">
              <Image
                src={ArrowIcon}
                alt="arrow"
                width={24}
                height={24}
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      <div className="py-[67px]">
        <SeeMore label="View All" className="text-[18px] h-[33px]" />
      </div>
    </div>
  );
}
