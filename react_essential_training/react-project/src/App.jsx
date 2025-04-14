import { useEffect, useReducer } from "react";
import "./App.css";
import logo from "./assets/react.svg";

function Header({ name, year }) {
  return (
    <header>
      <h1>Potato Kitchen! owner: {name}</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and cheese",
  "Salmon and potatoes",
  "Spagheettiii and the meat a ballasss",
];

//adding key to each list item to make sure it
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <button onClick={() => onStatus()}>Open the restaurant!!</button>
      <h2>
        Welcome to the beautiful {openStatus ? "open" : "closed"} restaurant.
      </h2>
      <main>
        <img
          src="https://github.com/lukestringer.png"
          alt="blini kot"
          height={169}
        />
        <img src={logo} alt="the react logo in place of a chef" height={100} />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, toggleStatus] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`);
  }, []); //[] optional second arg. list of dependencies. function will be called AGAIN (always runs on first render) when those dependencies update, e.g. status in this case
  //^ runs whenever the statue value changes

  return (
    <>
      <h1>Restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggleStatus}>
        {status ? "Close" : "Open"} Restaurant!
      </button>
      <Header name="Steve" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggleStatus} />
    </>
  );
}

export default App;
