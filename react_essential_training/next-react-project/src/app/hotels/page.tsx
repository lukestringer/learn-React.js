import { Key } from "react";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

//dynamic component for Hotels page
function HotelBlock({
  name,
  capacity,
  avgCost,
}: {
  name: string;
  capacity: number;
  avgCost: number;
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        It has room for {capacity} guests and costs ${avgCost} on average.
      </p>
    </div>
  );
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>
          {data.map(
            (hotel: {
              id: Key | null | undefined;
              name: string;
              capacity: number;
              avgCost: number;
            }) => (
              <HotelBlock
                key={hotel.id}
                name={hotel.name}
                capacity={hotel.capacity}
                avgCost={hotel.avgCost}
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}
