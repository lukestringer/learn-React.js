import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>Potato Kitchen! owner: {props.name}</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      {" "}
      <Header name="Steve" />
      <main>
        <h2>We make good thingsa</h2>
      </main>
    </div>
  );
}

export default App;
