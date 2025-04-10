import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>Potato Kitchen! owner: {props.name}</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      {" "}
      <Header name="Steve" year={new Date().getFullYear()} />
      <main>
        <h2>We make good thingsa</h2>
      </main>
    </div>
  );
}

export default App;
