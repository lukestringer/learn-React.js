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

//adding key to each list item to make sure it
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <ul>
      {/* incorrect solution is to generate them when accessing, rather than beforehand (whole point is to avoid errors when new dishes are added)
      {dishes.map((dish, i) => (
        <li key={i} style={{ listStyleType: "none" }}>
      */}
      {dishes.map((dish) => (
        <li key={dish.i} style={{ listStyleType: "none" }}>
          {dish.title}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      {" "}
      <Header name="Steve" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
