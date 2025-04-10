import React from "react";
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

function Main({ dishes }) {
  return (
    <>
      {/* <React.Fragment> */}
      {/* The <> is equivalent to <React.Fragment> */}
      <h2>
        This was just added so we could show that we don't need to junk up the
        DOM with a bunch of extra divs.
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
      {/* </React.Fragment> */}
    </>
  );
}

function App() {
  return (
    <div>
      <Header name="Steve" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
