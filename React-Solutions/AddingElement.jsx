/*It is like a to do list where when we click on the add button handleAdditem function called in function we create new array with setItem([]) spread operator used to include all items and input as well in new array*/ 
import { useState } from "react";
import "h8k-components";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    // TODO: Add logic to add input to items list
  if(input!=""){
    setItems([...items, input]);
    setInput("");
  } 
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
