import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1>Lift Status Info</h1>
      {/* npm run dev  then go to localhost:3000/mountain to see this page*/}
      {/* <div>{JSON.stringify(data)}</div> */}
      <table>
        <thead>
          <tr>
            <th>Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {/* All the type info added with Quick Fix (problem because this is TypeScript not JS) */}
          {data.map((lift: { id: Key; name: string; status: string }) => (
            <tr key={lift.id}>
              {" "}
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
