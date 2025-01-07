import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

// Product Interface
interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

// Product Data
const product: Iproducts[] = [
  {
    title: "Gradient Graphic T-shirt",
    id: 1,
    price: "$145",
    img_url: "/tshirt2.webp",
  },
  {
    title: "Polo with Tipping Details",
    id: 2,
    price: "$180",
    img_url: "/tshirt3.webp",
  },
  {
    title: "Black Striped T-shirt",
    id: 3,
    price: "$120",
    img_url: "/tshirt4.webp",
    old_price: "$150",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 4,
    price: "$240",
    img_url: "/product2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 5,
    price: "$180",
    img_url: "/product3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 6,
    price: "$130",
    img_url: "/product4.png",
    old_price: "$160",
  },
  {
    title: "VERTICAL STRIPED SHIRT",
    id: 7,
    price: "$212",
    img_url: "/product5.png",
    old_price: "$232",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 8,
    price: "$145",
    img_url: "/product6.png",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 9,
    price: "$80",
    img_url: "/product7.png",
  },
];

// Star Ratings
const Star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />];

export default function CasualShirts() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-6 px-4 md:px-8">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold">Casual</h1>

        {/* Showing Products & Sort By */}
        <div className="flex items-center gap-4 text-gray-600 text-sm md:text-base">
          <p>Showing 1-10 of 100 Products</p>
          <div className="flex items-center gap-1">
            <span>Sort by:</span>
            <select
              className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-700 text-sm"
              defaultValue="Most Popular"
            >
              <option value="Most Popular">Most Popular</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest Arrivals">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 px-4 md:px-8">
        {product.map((data) => (
          <div key={data.id} className="w-[230px]">
            {/* Product Image */}
            <Link href={`/products/${data.id}`}>
              <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px] overflow-hidden">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  width={230}
                  height={230}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>

            {/* Product Details */}
            <div>
              <p className="text-lg font-bold mt-2">{data.title}</p>
              <p className="flex text-yellow-400">{Star}</p>
              <p className="font-bold mt-1">
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
