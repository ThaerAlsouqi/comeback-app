import "./App.css";
import MyButton from "./MyButton";
const user = {
  name: "John Doe",
};
const products = [
  { id: 1, name: "Laptop", isFruit: false, price: 999 },
  { id: 2, name: "Smartphone", isFruit: false, price: 699 },
  { id: 3, name: "Tablet", isFruit: true, price: 499 },
];
const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? "red" : "blue",
    }}
  >
    {product.name}: ${product.price}
  </li>
));

function App() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <ul>{listItems}</ul>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
