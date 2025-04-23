"use client";
import Image from "next/image";

//dynamic component for Hotels page
export default function HotelBlock({
  id,
  name,
  capacity,
  avgCost,
}: {
  id: string;
  name: string;
  capacity: number;
  avgCost: number;
}) {
  const imageLoader = ({ src }: { src: string }) => {
    let name = `./hotels/${src}.jpeg`;
    return name;
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>
        It has room for {capacity} guests and costs ${avgCost} on average.
      </p>
      <Image
        src={id}
        loader={imageLoader}
        width={300}
        height={300}
        alt={""}
      ></Image>
    </div>
  );
}
