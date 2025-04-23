import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
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
              id: string;
              name: string;
              capacity: number;
              avgCost: number;
            }) => (
              <HotelBlock
                key={hotel.id}
                id={hotel.id}
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
