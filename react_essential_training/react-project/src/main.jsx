import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//const animals = ["dog", "cat", "sea cow"];
//console.log(animals[0]);
//replaced with
const [firstAnimal, , third] = ["dog", "cat", "sea cow"]; //skip over with comma
console.log(firstAnimal, third);

createRoot(document.getElementById("root")).render(<App />);
