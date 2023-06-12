import AdCard from "./AdCard";
import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <AdCard />
        {Array(8)
          .fill("")
          .map((i) => (
            <Card />
          ))}
      </div>
    </div>
  );
}
