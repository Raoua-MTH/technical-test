import { ProductNavItem } from "./ProductNavItem";

export default function ProductNavigation() {
  const items = [
    { name: "Chair", isActive: true },
    { name: "Beds", isActive: false },
    { name: "Sofa", isActive: false },
    { name: "Lamp", isActive: false },
  ];

  return (
    <div className="bg-[#EEEEEE] cursor-pointer px-2 h-[57px] flex items-center rounded-full">
      {items.map((item, index) => (
        <ProductNavItem
          key={index}
          name={item.name}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
}
