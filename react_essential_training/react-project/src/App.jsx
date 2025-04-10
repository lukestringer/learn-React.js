import "./App.css";

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

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }}>{dish}</li>
      ))}
    </ul> //each child in list should have a unique "key" prop
  );
}

function App() {
  return (
    <div>
      {" "}
      <Header name="Steve" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
