import { useState } from "react";
import CartIndicator from "./CartIndicator";
import AddItemButton from "./AddItemButton";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const addItem = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Shopping Cart </h1>

      <CartIndicator count={cartCount} />

      <AddItemButton addItem={addItem} />
    </div>
  );
}

export default App;